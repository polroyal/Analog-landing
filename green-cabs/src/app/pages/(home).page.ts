import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'green-cabs-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <green-cabs-analog-welcome/>
  `,
})
export default class HomeComponent {
}
