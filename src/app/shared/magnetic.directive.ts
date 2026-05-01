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

const defaultStrength = 26;

function coerceStrength(value: number | string | null | undefined): number {
  if (value === '' || value == null) {
    return defaultStrength;
  }

  return Number(value);
}

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective implements AfterViewInit, OnDestroy {
  readonly appMagnetic = input(defaultStrength, { transform: coerceStrength });

  @HostBinding('class.magnetic') private readonly magneticClass = true;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private moveXTo?: (value: number) => gsap.core.Tween;
  private moveYTo?: (value: number) => gsap.core.Tween;
  private scaleTo?: (value: number) => gsap.core.Tween;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      const element = this.host.nativeElement;
      this.moveXTo = gsap.quickTo(element, 'x', { duration: 0.28, ease: 'power3.out' });
      this.moveYTo = gsap.quickTo(element, 'y', { duration: 0.28, ease: 'power3.out' });
      this.scaleTo = gsap.quickTo(element, 'scale', { duration: 0.28, ease: 'power3.out' });
    });
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (event.pointerType === 'touch') {
      return;
    }

    const element = this.host.nativeElement;
    const bounds = element.getBoundingClientRect();
    const strength = this.appMagnetic();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * strength;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * strength;

    this.moveXTo?.(offsetX);
    this.moveYTo?.(offsetY);
    this.scaleTo?.(1.03);
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    this.moveXTo?.(0);
    this.moveYTo?.(0);
    this.scaleTo?.(1);
  }

  @HostListener('pointerdown')
  onPointerDown(): void {
    this.scaleTo?.(0.97);
  }

  @HostListener('pointerup')
  onPointerUp(): void {
    this.scaleTo?.(1.02);
  }

  ngOnDestroy(): void {
    gsap.killTweensOf(this.host.nativeElement);
  }
}
