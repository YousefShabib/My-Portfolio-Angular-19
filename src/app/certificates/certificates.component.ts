import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, InteractiveCardDirective],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent {
  readonly certificates = PORTFOLIO_CONTENT.credentials;
}
