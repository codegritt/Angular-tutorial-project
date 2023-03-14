import { Component, Input } from '@angular/core';

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
}