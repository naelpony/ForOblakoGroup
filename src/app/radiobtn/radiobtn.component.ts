import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-radiobtn',
  templateUrl: './radiobtn.component.html',
  styleUrls: ['./radiobtn.component.sass']
})
export class RadiobtnComponent implements OnInit {
  radioValue = 'A';

  constructor() { }

  ngOnInit(): void {
  }

}
