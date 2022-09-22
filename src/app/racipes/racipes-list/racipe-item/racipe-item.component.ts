import { Component, Input, OnInit } from '@angular/core';
import { Racipe } from "../../Racipe";

@Component({
  selector: 'app-racipe-item',
  templateUrl: './racipe-item.component.html',
  styleUrls: ['./racipe-item.component.css']
})
export class RacipeItemComponent implements OnInit {
  @Input() racipes: Racipe;
  @Input() index:number;


  ngOnInit(): void {
  }


}
