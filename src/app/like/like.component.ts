import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  likes=0
  
  upVotes(){
    this.likes=this.likes+1;
  }
//   dislikes=0
//   downVotes(){
//     this.dislikes=this.dislikes+1;
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }
