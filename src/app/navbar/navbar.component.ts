import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  afterNextRender,
  inject,
  signal
} from '@angular/core';

import { MagneticDirective } from '../shared/magnetic.directive';
import { NAV_ITEMS, PORTFOLIO_CONTENT } from '../shared/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MagneticDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly navItems = NAV_ITEMS;
  readonly person = PORTFOLIO_CONTENT.person;
  readonly isMenuOpen = signal(false);
  readonly isDarkMode = signal(false);
  readonly activeSection = signal('home');

  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.observeSections());
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = savedTheme ? savedTheme === 'dark' : prefersDark;

    this.isDarkMode.set(dark);
    this.applyTheme(dark);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  selectNav(href: string): void {
    this.activeSection.set(href.replace('#', ''));
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    const dark = !this.isDarkMode();
    this.isDarkMode.set(dark);
    this.applyTheme(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#08131d' : '#f3f6f7');
  }

  private observeSections(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      {
        threshold: [0.12, 0.32, 0.55],
        rootMargin: '-18% 0px -58% 0px'
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}
