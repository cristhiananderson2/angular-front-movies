import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html'
})
export class GeneralListComponent implements OnInit {

  @Input() list;
  constructor() { }

  ngOnInit(): void {
  }

}
