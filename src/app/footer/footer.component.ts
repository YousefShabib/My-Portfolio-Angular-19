import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MagneticDirective } from '../shared/magnetic.directive';
import { PORTFOLIO_CONTENT } from '../shared/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MagneticDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly person = PORTFOLIO_CONTENT.person;
  readonly socialLinks = PORTFOLIO_CONTENT.socialLinks;
}
