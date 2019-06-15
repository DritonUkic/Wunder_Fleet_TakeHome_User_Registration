import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui-loader/header/header.component';
import { FooterComponent } from './components/ui-loader/footer/footer.component';
import { UiLoaderComponent } from './components/ui-loader/ui-loader.component';

import * as Reducers from './reducers/register/index';
import { RegisterComponent } from './components/pages/register/register.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/material-module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UiLoaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      personal: Reducers.personalReducer,
      address: Reducers.addressReducer,
      payment: Reducers.paymentReducer
    }),
    StoreDevtoolsModule.instrument({
      
    }),
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
