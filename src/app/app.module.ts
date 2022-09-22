import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { dropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoping-list/shopping-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RacipeService } from './racipes/racipe.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component'
import { LodingSpinnerComponent } from './shared/loding-spinner/loding-spinner.component';
import { AuthInterceptorService } from './auth/auth-intercepter.service';
import { AlertComponent } from './shared/alert/alert.cpmponent';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    dropdownDirective,
    AuthComponent,
    LodingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService,RacipeService,{provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
