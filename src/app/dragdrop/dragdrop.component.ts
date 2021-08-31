import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.sass']
})
export class DragdropComponent implements OnInit {
  todo = [
    'Максим Вильниц',
    'Ольга Крышкова',
    'Юлия Грунина',
    'Марат Большаков',
    'Светлана Иванова',
    'Данил Горбунов',
    'Дарья Васильева'

  ];

  done = [
    'Максим Вильниц',
    'Ольга Крышкова',
    'Юлия Грунина',
    'Марат Большаков',
    'Светлана Иванова',
    'Данил Горбунов',
    'Дарья Васильева',
    'Владимир Силеванов'
  ];
  
  

  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  constructor() { }

  ngOnInit(): void { }
}
