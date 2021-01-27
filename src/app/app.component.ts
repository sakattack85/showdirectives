import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showdirectives';
  disable:boolean=true;
  inputboxdata=""
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
