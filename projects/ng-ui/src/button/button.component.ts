import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `button[ngs-icon]`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  // https://angular.io/guide/component-styles#view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
