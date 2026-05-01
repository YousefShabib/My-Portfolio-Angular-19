import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { MagneticDirective } from '../shared/magnetic.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RevealDirective, MagneticDirective, InteractiveCardDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly person = PORTFOLIO_CONTENT.person;
  readonly hero = PORTFOLIO_CONTENT.hero;
  readonly heroStats = PORTFOLIO_CONTENT.heroStats;
  readonly socialLinks = PORTFOLIO_CONTENT.socialLinks;

  scrollToAbout(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
