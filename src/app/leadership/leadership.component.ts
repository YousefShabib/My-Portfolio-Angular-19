import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, InteractiveCardDirective],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadershipComponent {
  readonly leadership = PORTFOLIO_CONTENT.leadership;
}
