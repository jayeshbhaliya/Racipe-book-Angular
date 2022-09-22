import { Component, OnInit} from '@angular/core';
import { Racipe } from "../Racipe";
import { RacipeService } from '../racipe.service';

@Component({
  selector: 'app-racipes-list',
  templateUrl: './racipes-list.component.html',
  styleUrls: ['./racipes-list.component.css']
})
export class RacipesListComponent implements OnInit {

  racipe:Racipe[] ;
  constructor(private racipeService : RacipeService) { }

  ngOnInit() {
    this.racipeService.racipesChanged.subscribe(
      (racipe :Racipe[])=>{
        this.racipe = racipe;
      }
    )
    this.racipe = this.racipeService.getRacipes();
  }


}
