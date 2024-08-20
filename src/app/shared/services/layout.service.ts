import { inject, Injectable, signal } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  breakpointObserver = inject(BreakpointObserver);

  currentBreakpoint = signal('');

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints[Breakpoints.Small])
            this.currentBreakpoint.set('small');

          if (state.breakpoints[Breakpoints.Medium])
            this.currentBreakpoint.set('medium');

          if (state.breakpoints[Breakpoints.Large])
            this.currentBreakpoint.set('large');
        }
      });
  }
}
