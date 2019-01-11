import { Response } from '@angular/http';
import { PastryService } from '../services/pastry.service';
import Pastry from '../models/pastry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.scss']
})
export class PastryComponent implements OnInit {

  constructor(private pastryService: PastryService) { }

  public newPastry: Pastry = new Pastry();

  pastriesList: Pastry[];
  editPastries: Pastry[] = [];

  ngOnInit(): void {
    this.pastryService.getPastries()
    .subscribe(pastries => {
      this.pastriesList = pastries;
      console.log(pastries);
    })
  }

  create() {
    this.pastryService.createPastry(this.newPastry)
    .subscribe((res) => {
      this.pastriesList.push(res.data)
      this.newPastry = new Pastry()
    })
  }
  
  editPastry(pastry: Pastry) {
    console.log(pastry)
    if(this.pastriesList.includes(pastry)){
      if(!this.editPastries.includes(pastry)){
        this.editPastries.push(pastry)
      }else{
        this.editPastries.splice(this.editPastries.indexOf(pastry), 1)
        this.pastryService.editPastry(pastry).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  submitPastry(event, pastry:Pastry){
    if(event.keyCode == 13){
      this.editPastry(pastry)
    }
  }

  deletePastry(pastry: Pastry) {
    this.pastryService.deletePastry(pastry._id).subscribe(res => {
      this.pastriesList.splice(this.pastriesList.indexOf(pastry), 1);
    })
  }

}
