import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { MagneticDirective } from '../shared/magnetic.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, InteractiveCardDirective, MagneticDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly projects = PORTFOLIO_CONTENT.projects;
}
