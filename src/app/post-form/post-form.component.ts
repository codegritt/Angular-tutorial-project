import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  postTitle!: String;
  postDetails!: String;
  imageUrl!: String;
  postUrl!: String;
  addBackgroung!: Boolean;

}
