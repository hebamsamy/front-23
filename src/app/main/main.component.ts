import { Component } from '@angular/core';
import{todoItem} from "../shared/todo"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  list:todoItem[]=[
    new todoItem("sleep"),
    new todoItem("weke up at 7am "),
  ]
  change(i:number){
    this.list[i].isDone =true
  }
  delete(i:number){
    this.list.splice(i,1)
  }
  add(text:string){
    this.list.push(new todoItem(text))
  }
//   jobtitle="front end";
//   age:number = 18
// img="https://picsum.photos/400"
// changeAge(n:string){
//   this.age = Number(n)
// }
//   change(job:string){
//     this.jobtitle = job
//   }
//   keyuphandler(j:string){
//     console.log(j)
//   }
//   print():string{
//     return "test"
//   }
}
