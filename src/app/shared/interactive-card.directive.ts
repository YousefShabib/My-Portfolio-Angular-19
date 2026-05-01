import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  NgZone,
  OnDestroy,
  inject,
  input
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';

const defaultIntensity = 12;
const defaultScale = 1.018;

function coerceIntensity(value: number | string | null | undefined): number {
  if (value === '' || value == null) {
    return defaultIntensity;
  }

  return Number(value);
}

function coerceScale(value: number | string | null | undefined): number {
  if (value === '' || value == null) {
    return defaultScale;
  }

  return Number(value);
}

@Directive({
  selector: '[appInteractiveCard]',
  standalone: true
})
export class InteractiveCardDirective implements AfterViewInit, OnDestroy {
  readonly appInteractiveCard = input(defaultIntensity, { transform: coerceIntensity });
  readonly appInteractiveScale = input(defaultScale, { transform: coerceScale });

  @HostBinding('class.interactive-card') private readonly interactiveClass = true;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private rotateXTo?: (value: number) => gsap.core.Tween;
  private rotateYTo?: (value: number) => gsap.core.Tween;
  private shiftXTo?: (value: number) => gsap.core.Tween;
  private shiftYTo?: (value: number) => gsap.core.Tween;
  private scaleTo?: (value: number) => gsap.core.Tween;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      const element = this.host.nativeElement;

      gsap.set(element, {
        transformPerspective: 1100,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      });

      this.rotateXTo = gsap.quickTo(element, 'rotationX', { duration: 0.42, ease: 'power3.out' });
      this.rotateYTo = gsap.quickTo(element, 'rotationY', { duration: 0.42, ease: 'power3.out' });
      this.shiftXTo = gsap.quickTo(element, 'x', { duration: 0.42, ease: 'power3.out' });
      this.shiftYTo = gsap.quickTo(element, 'y', { duration: 0.42, ease: 'power3.out' });
      this.scaleTo = gsap.quickTo(element, 'scale', { duration: 0.34, ease: 'power3.out' });
    });
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (event.pointerType === 'touch') {
      return;
    }

    const element = this.host.nativeElement;
    const bounds = element.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    const intensity = this.appInteractiveCard();

    element.style.setProperty('--spot-x', `${px * 100}%`);
    element.style.setProperty('--spot-y', `${py * 100}%`);

    this.rotateYTo?.((px - 0.5) * intensity);
    this.rotateXTo?.((0.5 - py) * intensity);
    this.shiftXTo?.((px - 0.5) * 8);
    this.shiftYTo?.((py - 0.5) * 8);
    this.scaleTo?.(this.appInteractiveScale());
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    this.reset();
  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    const scale = event.pointerType === 'touch' ? 0.992 : this.appInteractiveScale() - 0.01;
    this.scaleTo?.(scale);
  }

  @HostListener('pointerup')
  onPointerUp(): void {
    this.scaleTo?.(this.appInteractiveScale());
  }

  private reset(): void {
    this.host.nativeElement.style.setProperty('--spot-x', '50%');
    this.host.nativeElement.style.setProperty('--spot-y', '50%');
    this.rotateXTo?.(0);
    this.rotateYTo?.(0);
    this.shiftXTo?.(0);
    this.shiftYTo?.(0);
    this.scaleTo?.(1);
  }

  ngOnDestroy(): void {
    gsap.killTweensOf(this.host.nativeElement);
  }
}
