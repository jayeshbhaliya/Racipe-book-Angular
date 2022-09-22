import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RacipeService } from './racipe.service';

@Component({
  selector: 'app-racipes',
  templateUrl: './racipes.component.html',
  styleUrls: ['./racipes.component.css'],
  // providers: [RacipeService]
})
export class RacipesComponent implements OnInit {


  constructor(private dataStorageService : DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchRacipes().subscribe();
  }

}
