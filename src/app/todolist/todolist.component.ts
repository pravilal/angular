import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   array:any[]=[]
   mov:any[]=[]
value1:any
   values:string=''
   intex:any=''
setvalue(event:any){
  this.values=(event.target as HTMLInputElement).value


}
display(){
  this.array.push(this.values)
  console.log(this.array)

}
    
  remove(inex:any){
    this.intex=this.array.indexOf(inex)
    this.array.splice(this.intex,1)
    console.log(this.array)
  }
  move(inex:any){

this.mov.push(inex)
console.log(this.mov)
this.remove(inex)
  }
}

