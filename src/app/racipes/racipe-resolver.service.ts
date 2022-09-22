import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Racipe } from "./Racipe";
import { RacipeService } from "./racipe.service";

@Injectable({providedIn: 'root'})
export class RacipeResolverService implements Resolve<Racipe[]> {
  // racipeService: any;
  constructor(private dataStorageService : DataStorageService ,private racipeService : RacipeService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const racipes = this.racipeService.getRacipes();

    if(racipes.length === 0){
      return this.dataStorageService.fetchRacipes();
    }
    else{
      return racipes;
    }
  }
}
