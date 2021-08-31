import { Component, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  
})
export class CardComponent implements OnInit {
  time1 = null;
  time2 =null;
  time3 = null;
  date1 = null;
  date2 = null;
  date3 = null;
  disabled1 = false;
  disabled2 = true;
  disabled3 = true;
  constructor(private i18n: NzI18nService) { }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  

  ngOnInit(): void {
  }

}
