import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2/';
// import { FireBaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBxiu-VyEEdMKeGo9_P8g6UlVMKpu0y1J8',
      authDomain: 'genwis-704ad.firebaseapp.com',
      databaseURL: 'https://genwis-704ad.firebaseio.com',
      projectId: 'genwis-704ad',
      storageBucket: 'genwis-704ad.appspot.com',
      messagingSenderId: '961751670731'
    }),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
