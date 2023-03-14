import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(){}

  ngOnInit():void{
    
  }

  title:String ="Lists of posts";

  @Input()
  fromParent!: String;

  messagepost: String="Gokul got a message";

  childMessage: String="from child component";

  messageParent:String="gokul is a gigolo";
  @Output() messageEvent= new EventEmitter<String>();


  sendMessage(){
    this.messageEvent.emit(this.childMessage);
    
  }
}
