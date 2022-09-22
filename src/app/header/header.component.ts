import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Output() selectedFeature = new EventEmitter<string>()
  private userSub : Subscription;
  isAuthenticated = false;
  constructor(private dataStorageService : DataStorageService,private authService : AuthService ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !user ? false:true;          //!!user
    });

  }
  onSaveDate(){
    this.dataStorageService.storeRacipes();
  }
  onFetchDate(){
    this.dataStorageService.fetchRacipes().subscribe();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
  }

}