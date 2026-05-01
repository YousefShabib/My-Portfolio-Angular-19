import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ParticleBackgroundComponent } from './shared/particle-background/particle-background.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    LeadershipComponent,
    AwardsComponent,
    CertificatesComponent,
    ContactComponent,
    ParticleBackgroundComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
