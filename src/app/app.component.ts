import { Component } from '@angular/core';

import { Activity } from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  brand = 'Paul Berges';

  title = 'Hi, I\'m Paul Berges';

  activities: Activity[] = [
    { text: 'Software engineering @ ',
      linkAltText: 'Ford Motor Company',
      link:'https://corporate.ford.com/company.html'
    },
    {
      text: 'Author of cyber-physical systems ',
      linkAltText: 'papers',
      link: 'https://scholar.google.com/citations?user=YaEODREAAAAJ&hl=en&oi=ao'
    }
  ];

  freeTime = 'In my free time, I experiment with food and drink in the kitchen, or I study Japanese.';

  contact = 'Please use the icons below to contact me.  Email is my preferred method to stay in touch.';
}
