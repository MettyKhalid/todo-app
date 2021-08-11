import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoOne: string = "Projet 1";
  todoTow: string = "Projet 2";
  todoThree: string = "Projet 3";
  todoFour: string = "Projet 4";

  todos = [
    {
      todoName: "Projet 1",
      todoStatus: false,
      todoImage: "http://placehold.it/50",
    },
    {
      todoName: "Projet 2",
      todoStatus: true,
      todoImage: "http://placehold.it/50",
    },
    {
      todoName: "Projet 3",
      todoStatus: false,
      todoImage: "http://placehold.it/50",
    },
    {
      todoName: "Projet 4",
      todoStatus: false,
      todoImage: "http://placehold.it/50",
    }
  ];

  onChangeStatus(i:number): void {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

}
