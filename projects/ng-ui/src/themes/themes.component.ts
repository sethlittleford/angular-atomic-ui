import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngs-themes',
  template: `
  `,
  styleUrls: ['./dark.css'],
  // https://angular.io/guide/component-styles#view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class ThemesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
