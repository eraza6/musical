import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatTabsModule, MatIconModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {}
