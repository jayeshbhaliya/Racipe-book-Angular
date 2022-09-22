import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Racipe } from "../racipes/Racipe";
import { RacipeService } from "../racipes/racipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private racipeService: RacipeService,private authService : AuthService) { }

  storeRacipes() {
    const racipes = this.racipeService.getRacipes();
    this.http.put('https://recipe-book-by-jb-default-rtdb.firebaseio.com/racipes.json', racipes).subscribe(response => {
      console.log(response);
    });
  }
  fetchRacipes() {
      return this.http
    .get<Racipe[]>(
      'https://recipe-book-by-jb-default-rtdb.firebaseio.com/racipes.json')
    .pipe(map((racipe) => {
      return racipe.map((racipe) => {
        return { ...racipe, ingredients: !racipe.ingredient ? racipe.ingredient : [] };
      });
    }),
    tap(racipes => {
      // console.log(racipes)
      this.racipeService.setRacipes(racipes);
    }));

  }
}
