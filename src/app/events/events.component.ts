import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  header:string = "Events";
  presentingCols: string[] = ['event', 'location', 'date'];
  eventsPresenting: any[] = [
	  {event: "ng-conf", location: "Salt Lake City, Utah", date: "May 1-3, 2019"},
	  {event: "ngVikings", location: "Copenhagen, Denmark", date: "May 26 (workshops), 27-28 (conference), 2019"}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
