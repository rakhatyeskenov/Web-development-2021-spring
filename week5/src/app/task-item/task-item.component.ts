import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor() {
    this.task = new Task();
  }

  ngOnInit(): void {
  }

  removeTask(index: number) {
    // this.newTasks = this.newTasks.filter((x) => x.id !== index);
    this.remove.emit(index)
  }

  isDoneChanged() {
    this.done.emit(this.task);
  }

}
