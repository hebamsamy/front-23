export class todoItem{
    task:string='';
    isDone:boolean=false;
    date:Date = new Date();
    constructor(t:string){
        this.task = t;
        this.date = new Date()
    }
}