import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

interface NetworkPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

@Component({
  selector: 'app-particle-background',
  standalone: true,
  templateUrl: './particle-background.component.html',
  styleUrls: ['./particle-background.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('networkCanvas', { static: true }) private readonly canvasRef?: ElementRef<HTMLCanvasElement>;

  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly points: NetworkPoint[] = [];
  private animationFrame = 0;
  private resizeObserver?: ResizeObserver;
  private ctx?: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;
  private pixelRatio = 1;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.canvasRef) {
      return;
    }

    this.ctx = this.canvasRef.nativeElement.getContext('2d') ?? undefined;

    if (!this.ctx) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.resize();
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.canvasRef!.nativeElement);
      this.animate();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrame);
    this.resizeObserver?.disconnect();
  }

  private resize(): void {
    const canvas = this.canvasRef?.nativeElement;

    if (!canvas || !this.ctx) {
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.width = bounds.width;
    this.height = bounds.height;
    canvas.width = Math.floor(this.width * this.pixelRatio);
    canvas.height = Math.floor(this.height * this.pixelRatio);
    this.ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
    this.createPoints();
  }

  private createPoints(): void {
    const count = Math.max(28, Math.floor((this.width * this.height) / 27000));

    this.points.length = 0;

    for (let index = 0; index < count; index += 1) {
      const seed = index + 3;
      this.points.push({
        x: (Math.sin(seed * 12.9898) * 43758.5453 % 1 + 1) % 1 * this.width,
        y: (Math.sin(seed * 78.233) * 23454.123 % 1 + 1) % 1 * this.height,
        vx: ((seed * 17) % 9 - 4) * 0.055,
        vy: ((seed * 29) % 9 - 4) * 0.055,
        radius: 1.1 + (seed % 3) * 0.45
      });
    }
  }

  private animate = (): void => {
    this.draw();
    this.animationFrame = requestAnimationFrame(this.animate);
  };

  private draw(): void {
    if (!this.ctx) {
      return;
    }

    const ctx = this.ctx;
    const maxDistance = Math.min(180, Math.max(112, this.width * 0.16));

    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#61d0c7';

    for (const point of this.points) {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < -20) point.x = this.width + 20;
      if (point.x > this.width + 20) point.x = -20;
      if (point.y < -20) point.y = this.height + 20;
      if (point.y > this.height + 20) point.y = -20;

      ctx.globalAlpha = 0.36;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < this.points.length; i += 1) {
      const start = this.points[i];

      for (let j = i + 1; j < this.points.length; j += 1) {
        const end = this.points[j];
        const distance = Math.hypot(start.x - end.x, start.y - end.y);

        if (distance > maxDistance) {
          continue;
        }

        ctx.globalAlpha = (1 - distance / maxDistance) * 0.22;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = ctx.fillStyle;
        ctx.stroke();
      }
    }
  }
}
