import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Racipe } from '../Racipe';
import { RacipeService } from '../racipe.service';

@Component({
  selector: 'app-racipe-edit',
  templateUrl: './racipe-edit.component.html',
  styleUrls: ['./racipe-edit.component.css'],
})
export class RacipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  racipeForm: FormGroup;

  get ingredientsControls() {
    return (this.racipeForm.get('ingredient') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private racipeService: RacipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  onSubmit() {
    console.log(this.racipeForm);
    // const newRacipe = new Racipe(
    //   this.racipeForm.value['name'],
    //   this.racipeForm.value['imagePath'],
    //   this.racipeForm.value['description'],
    //   this.racipeForm.value['ingredient']
    //   );
    if (this.editMode) {
      this.racipeService.updateRacipe(this.id, this.racipeForm.value);
    } else {
      this.racipeService.addRacipe(this.racipeForm.value);
    }
    this.onCancelEdit();
  }
  private initForm() {
    let racipename = '';
    let racipeImagePath = '';
    let racipeDescription = '';
    let racipeIngredient =  [];

    if (this.editMode) {
      const racipe = this.racipeService.getRacipe(this.id);
      racipename = racipe.name;
      racipeImagePath = racipe.imagePath;
      racipeDescription = racipe.description;
      if (racipe['ingredient']) {
        for (let ing of racipe.ingredient) {

          racipeIngredient.push(
            new FormGroup({
              name: new FormControl(ing.name),
              amount: new FormControl(ing.amount),
            })
          )

        }
      }
    }
    this.racipeForm = new FormGroup({
      name: new FormControl(racipename, Validators.required),
      imagePath: new FormControl(racipeImagePath, Validators.required),
      description: new FormControl(racipeDescription, Validators.required),
      ingredient: new FormArray(racipeIngredient),
    });
    console.log(this.racipeForm);
  }
  onCancelEdit() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.racipeForm.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.racipeForm.get('ingredients')).removeAt(index);
  }
}









