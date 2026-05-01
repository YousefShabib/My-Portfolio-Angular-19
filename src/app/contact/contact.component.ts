import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveCardDirective } from '../shared/interactive-card.directive';
import { MagneticDirective } from '../shared/magnetic.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective, InteractiveCardDirective, MagneticDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly person = PORTFOLIO_CONTENT.person;
  readonly contactMethods = PORTFOLIO_CONTENT.contactMethods;
  readonly socialLinks = PORTFOLIO_CONTENT.socialLinks;
}
