import { Component, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.sass']
})
export class TabpanelComponent implements OnInit {  
  date = null;;
  constructor(private i18n: NzI18nService) { }
  
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  panelOpenState = false;
  ngOnInit(): void {
  }

}
