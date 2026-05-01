import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, InteractiveCardDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  readonly aboutParagraphs = PORTFOLIO_CONTENT.aboutParagraphs;
  readonly strengths = PORTFOLIO_CONTENT.strengths;
  readonly education = PORTFOLIO_CONTENT.education;
  readonly experience = PORTFOLIO_CONTENT.experience;
}
