import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {}
