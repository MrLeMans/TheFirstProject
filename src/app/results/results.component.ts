import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public results = [
    {"date" : "11-04-2018", "distance" : "5,000.00", "time" : "42:40", "avgSpeed" : "7.20"}, 
    {"date" : "03-04-2018", "distance" : "3,000.00", "time" : "13:20", "avgSpeed" : "13.50"}, 
    {"date" : "02-04-2018", "distance" : "5,000.00", "time" : "35:00", "avgSpeed" : "8.57"}, 
    {"date" : "28-03-2018", "distance" : "1,000.00", "time" : "10:00", "avgSpeed" : "6.00"}];

  constructor() { }

  ngOnInit(): void {
  }

}
