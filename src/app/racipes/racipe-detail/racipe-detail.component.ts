import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Racipe } from '../Racipe';
import { RacipeService } from '../racipe.service';

@Component({
  selector: 'app-racipe-detail',
  templateUrl: './racipe-detail.component.html',
  styleUrls: ['./racipe-detail.component.css'],
})
export class RacipeDetailComponent implements OnInit {
  racipe: Racipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private racipeService: RacipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.racipe = this.racipeService.getRacipe(this.id);
    });
  }
  OnDeleteRacipe() {
    this.racipeService.deleteRacipe(this.id);
    this.router.navigate(['/racipes']);
  }
  onAddToShoppingList() {
    this.racipeService.addIngredientsToShoppingList(this.racipe.ingredient);
  }
}
