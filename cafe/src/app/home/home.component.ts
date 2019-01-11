import { Response } from '@angular/http';
import { PastryService } from '../services/pastry.service';
import Pastry from '../models/pastry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pastryService: PastryService) { }
  pastriesList: Pastry[];
  ngOnInit() {
    this.pastryService.getPastries()
    .subscribe(pastries => {
      this.pastriesList = pastries;
      console.log(pastries);
    })
  }

}
