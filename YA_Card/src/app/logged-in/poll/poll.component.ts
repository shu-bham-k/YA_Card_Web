import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  option='Poll'
  constructor() { }

  ngOnInit(): void {
  }

}
