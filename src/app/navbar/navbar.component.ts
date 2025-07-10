import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ضروري لـ ngClass, ngIf, ...
import { RouterModule } from '@angular/router'; // ✅ ضروري لـ routerLink أو href إن لزم

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // ✅ هذا السطر مهم لتجنب أخطاء ngClass
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
