import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  userName="Gokul"
  @ViewChild (PostComponent) childComp: any;
  constructor(){
console.log(this.childComp);

for(let i=0; i<this.postArray.length;i++){
  console.log(this.postArray);
}
  }

 
  parentMessage: String ="message coming from parent component";

  parentMessage1:String = "message to the navbar";

  ngAfterViewInit(){
    console.log(this.childComp);

  }
  receieveMessage($event: any){
    console.log($event)
  }

  onKeyUp(username: any){
    console.log(username)
  }

  postArray: Array<String>=['post1','post2','post3','post4']
  add(){
    this.postArray.push("gokul is a good boy")
  }
}
