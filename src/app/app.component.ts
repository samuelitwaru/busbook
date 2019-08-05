import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bus-book';
  today = new Date().toDateString();
  company = "UDH";
  username = "Okot Smith";
  password = "1234";
  buses = [
    {"number" : "UAG 979A", "from" : "Arua", "to" : "Kampala", "fare" : 35000, "time":new Date(1564322638748), "sits":[
      {
        "sit_no" : "01",
        "ticket" : {
            "id" : "BB-UAG979A-01",
            "sit_no" : "01",
            "company" : "company_name",
            "passenger" : "Samuel",
            "booking_time" : 0,
            "departure_time" : 0,
            "expiry_time" : 0,
            "start" : "Arua",
            "stop" : "Kamapala",
            "fare" : 35000,
            "currency" : "UGX",
            "pickup_stage" : "Euata"
        }
    },
    {
        "sit_no" : "02",
        "ticket" : null
    },
    {
        "sit_no" : "03",
        "ticket" : null
    },
    {
        "sit_no" : "04",
        "ticket" : null
    },
    {
        "sit_no" : "05",
        "ticket" : null
    },
    {
        "sit_no" : "06",
        "ticket" : null
    },
    {
        "sit_no" : "07",
        "ticket" : null
    },
    {
        "sit_no" : "08",
        "ticket" : null
    },
    {
        "sit_no" : "09",
        "ticket" : null
    },
    {
        "sit_no" : 10,
        "ticket" : null
    },
    {
        "sit_no" : 11,
        "ticket" : null
    },
    {
        "sit_no" : 12,
        "ticket" : null
    },
    {
        "sit_no" : 13,
        "ticket" : null
    },
    {
        "sit_no" : 14,
        "ticket" : null
    },
    {
        "sit_no" : 15,
        "ticket" : null
    },
    {
        "sit_no" : 16,
        "ticket" : null
    },
    {
        "sit_no" : 17,
        "ticket" : null
    },
    {
        "sit_no" : 18,
        "ticket" : null
    },
    {
        "sit_no" : 19,
        "ticket" : null
    },
    {
        "sit_no" : 20,
        "ticket" : null
    },
    {
        "sit_no" : 21,
        "ticket" : null
    },
    {
        "sit_no" : 22,
        "ticket" : null
    },
    {
        "sit_no" : 23,
        "ticket" : null
    },
    {
        "sit_no" : 24,
        "ticket" : null
    },
    {
        "sit_no" : 25,
        "ticket" : null
    },
    {
        "sit_no" : 26,
        "ticket" : null
    },
    {
        "sit_no" : 27,
        "ticket" : null
    },
    {
        "sit_no" : 28,
        "ticket" : null
    },
    {
        "sit_no" : 29,
        "ticket" : null
    },
    {
        "sit_no" : 30,
        "ticket" : null
    },
    {
        "sit_no" : 31,
        "ticket" : null
    },
    {
        "sit_no" : 32,
        "ticket" : null
    },
    {
        "sit_no" : 33,
        "ticket" : null
    },
    {
        "sit_no" : 34,
        "ticket" : null
    },
    {
        "sit_no" : 35,
        "ticket" : null
    },
    {
        "sit_no" : 36,
        "ticket" : null
    },
    {
        "sit_no" : 37,
        "ticket" : null
    },
    {
        "sit_no" : 38,
        "ticket" : null
    },
    {
        "sit_no" : 37,
        "ticket" : null
    },
    {
        "sit_no" : 40,
        "ticket" : null
    },
    {
        "sit_no" : 41,
        "ticket" : null
    },
    {
        "sit_no" : 42,
        "ticket" : null
    },
    {
        "sit_no" : 43,
        "ticket" : null
    },
    {
        "sit_no" : 44,
        "ticket" : null
    },
    {
        "sit_no" : 45,
        "ticket" : null
    },
    {
        "sit_no" : 46,
        "ticket" : null
    },
    {
        "sit_no" : 47,
        "ticket" : null
    },
    {
        "sit_no" : 48,
        "ticket" : null
    },
    {
        "sit_no" : 49,
        "ticket" : null
    },
    {
        "sit_no" : 50,
        "ticket" : null
    },
    {
        "sit_no" : 51,
        "ticket" : null
    },
    {
        "sit_no" : 52,
        "ticket" : null
    },
    {
        "sit_no" : 53,
        "ticket" : null
    },
    {
        "sit_no" : 54,
        "ticket" : null
    },
    {
        "sit_no" : 55,
        "ticket" : null
    },
    {
        "sit_no" : 56,
        "ticket" : null
    },
    {
        "sit_no" : 57,
        "ticket" : null
    },
    {
        "sit_no" : 58,
        "ticket" : null
    },
    {
        "sit_no" : 59,
        "ticket" : null
    },
    {
        "sit_no" : 60,
        "ticket" : null
    }
    ]},
    {"number" : "UAY 989B", "from" : "Arua", "to" : "Kampala", "fare" : 35000, "time":new Date(1564322293384)},
    {"number" : "UBB 999C", "from" : "Arua", "to" : "Kampala", "fare" : 35000, "time":new Date(1564322293384)}
  ];

  shown_bus = this.buses[0];

  shown_ticket = this.shown_bus.sits[0].ticket;

  current_sit = this.shown_bus.sits[0];

  constructor(){}

  show_bus(bus) {
    this.shown_bus = bus;
  }

  show_ticket(sit){
    if (sit.ticket == null){
      sit.ticket = {}
    }
    this.shown_ticket = sit.ticket;
    this.current_sit = sit;
  }
}
