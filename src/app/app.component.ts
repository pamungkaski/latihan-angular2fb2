import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {promise} from "selenium-webdriver";
//import { AngularFire } from 'angularfire2'
// import { FirebaseService } from './services/firebase.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Attraction';
  attraction: Attractions = {
    id: Guid.newGuid(),
    name: '',
    location: {
      latitude: '',
      longitude: ''
    }
  };
  arrayAtt: FirebaseListObservable<Attraction[]>;
  items: FirebaseObjectObservable<any[]>;
  constructor(
  private db: AngularFireDatabase
) {
    this.arrayAtt = db.list('/attractions') as FirebaseListObservable<Attraction[]>;
    //console.log(this.arrayAtt)
  }
  onSelect(attraction: Attractions) {
    this.items = this.db.object('/attractions/' + attraction.id);
    this.items.set({
      name: attraction.name,
      location:{
        latitude: attraction.location.latitude,
        longitude: attraction.location.longitude
      }
    });
    attraction.id =  Guid.newGuid();
  }
}
export class Attractions {
  id: string;
  name: string;
  location: {
    latitude: string,
    longitude: string
  }
}
class Guid {
  r: number;
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
}
interface Attraction {
  $key?: number;
  name?: string;
  location: {
    latitude: string;
    longitude: string
}
}

