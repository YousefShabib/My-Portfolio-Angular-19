import { AfterViewInit, Directive, ElementRef, HostBinding, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly appRevealDelay = input('0ms');
  readonly appRevealOnce = input(true);

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  @HostBinding('class.reveal') private readonly revealClass = true;
  @HostBinding('class.is-visible') private isVisible = true;
  @HostBinding('style.--reveal-delay') protected get revealDelay(): string {
    return this.appRevealDelay();
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      this.isVisible = true;
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;

          if (this.appRevealOnce()) {
            this.observer?.disconnect();
          }
        } else if (!this.appRevealOnce()) {
          this.isVisible = false;
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
