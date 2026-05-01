import { Injectable, NgZone, OnDestroy, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import Lenis from 'lenis';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService implements OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private lenis?: Lenis;
  private frameId = 0;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.05,
        wheelMultiplier: 0.95,
        touchMultiplier: 1,
        smoothWheel: true,
        syncTouch: true
      });

      const raf = (time: number) => {
        this.lenis?.raf(time);
        this.frameId = window.requestAnimationFrame(raf);
      };

      this.frameId = window.requestAnimationFrame(raf);
    });
  }

  scrollTo(target: string | HTMLElement): void {
    this.lenis?.scrollTo(target, { duration: 1.05 });
  }

  ngOnDestroy(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }

    this.lenis?.destroy();
  }
}
