import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.sass']
})
export class TabpanelComponent implements OnInit {


  panelOpenState = false;
  ngOnInit(): void {
  }

}
