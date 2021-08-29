import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Date: string;
  Name: string;
  Col: number;
  Trener: string;
  Progress: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  { Date: '23 дек, 9: 00', Name: 'Страхование с заботой о клиенте', Col: 12, Trener: '', Progress:'96 %' },
  { Date: '14 ноя, 9:30', Name: 'Главные правила продаж', Col: 10, Trener: '', Progress: '92%' },
  { Date: '19 окт, 14:30', Name: 'Первичное обучение КС', Col: 8, Trener: '', Progress: '89%' },
  { Date: '10 окт, 16:00', Name: 'Вторичное обучение КС', Col: 18, Trener: '', Progress: '86%' },
  { Date: '5 окт, 15:00', Name: 'Вклады: теория и практика', Col: 6, Trener: '', Progress: '69%' },
  { Date: '27 сен, 11:00', Name: 'Страхование с заботой о клиенте', Col: 20, Trener: '', Progress: '78%' },
  { Date: '27 сен, 11:00', Name: 'Страхование с заботой о клиенте', Col: 20, Trener: '', Progress: '78%' },

];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements AfterViewInit,  OnInit  {

  displayedColumns: string[] = ['Date', 'Name', 'Col', 'Trener', 'Progress', 'star'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  constructor() {
    } 
  ngOnInit(): void {
  }

}
