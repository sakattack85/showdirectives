import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showdirectives';
  disable:boolean=true;
  inputboxdata=""
  option="optibbbbon3"
show:boolean=false;
x:number=4;
strarray:string[]=['first', 'second', 'third']
users:User[]=[]

constructor(){
  let user1=new User('iosif','@iosif.com')
  let user2=new User('iosif1','@iosifdsd.com')
this.users.push(user1,user2)
}

change(event:any){
  event.target.style.color="red";
}

evaluate(){
  if(this.inputboxdata==""){
  this.disable=true
}
  else this.disable=false

}
reset(){
  this.inputboxdata="";
}

mouseclick(element:Element){
  element.innerHTML='changed'

}

}
