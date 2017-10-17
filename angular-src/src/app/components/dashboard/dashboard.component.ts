import { Component, OnInit, OnDestroy } from '@angular/core';
import {AgmService} from '../../services/agm.service';
import {MapService} from '../../services/map.service';
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/takeWhile";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
private alive: boolean = true;

  constructor(
    private agmService:AgmService,
    private mapService:MapService


  ) { }

  ngOnInit() {
    this.agmService.getAgm().subscribe(data => {
      // is run sometimes later
       this.agmService = data
      //console.log(data)
       this.mapService.buildMap(data)
   });
  }


  ngOnDestroy() {
    }
  
}
