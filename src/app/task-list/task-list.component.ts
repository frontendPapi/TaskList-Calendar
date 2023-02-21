import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private route: ActivatedRoute){

  }

  date: Date = new Date();

  ngOnInit(): void {
   this.date = new Date(this.route.snapshot.params['date']);
  }

  tasks: Task[] = [
    new Task ("Visit Ann"),
    new Task ("Call Dad"),
    new Task ("Go to the gym"),
    new Task ("Wash the dishes"),
    new Task ("Shop for the party")
   ]
 
   add(newTask: string){
     this.tasks.push(new Task(newTask) );
   }
 
   remove(exisitingTask: Task){
    var userConfirmed = confirm(`Are you want to remove the following task? \n "${exisitingTask.title}"`)
 
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != exisitingTask)
    }
   }
 
 }
 
 class Task {
 
   constructor(public title: string){
 
   }
 
   toggleIsDone(){
     this.isDone = !this.isDone
   }
 
   public isDone = false;
 
 }

