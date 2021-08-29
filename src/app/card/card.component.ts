import { Component, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  
})
export class CardComponent implements OnInit {
  time = null;
  date = null;
  constructor(private i18n: NzI18nService) { }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  

  ngOnInit(): void {
  }

}
