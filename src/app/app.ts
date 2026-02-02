import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todolist');
  task='';
  tasklist:{name:string}[]=[];
 addtask() {
  this.task = this.task.trim(); 
  if (this.task) { 
    this.tasklist.push({ name: this.task }); 
    this.task = ''; 
  }
}
deletetask(index:number)
{
  this.tasklist.splice(index,1)
}
editbutton(index: number) {

  this.task = this.tasklist[index].name;

  this.deletetask(index);
}

}
