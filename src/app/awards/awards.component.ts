import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, InteractiveCardDirective],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardsComponent {
  readonly awards = PORTFOLIO_CONTENT.awards;
}
