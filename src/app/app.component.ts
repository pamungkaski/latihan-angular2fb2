import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid'
// import { AngularFire } from 'angularfire2'
// import { FirebaseService } from './services/firebase.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Attraction';
  attraction: Attractions = {
    id: UUID.UUID(),
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
    // console.log(this.arrayAtt)
  }
  onSelect(attraction: Attractions) {
    this.items = this.db.object('/attractions/' + attraction.id);
    this.items.set({
      name: attraction.name,
      location: {
        latitude: attraction.location.latitude,
        longitude: attraction.location.longitude
      }
    });
    attraction.id =  UUID.UUID();
  }
}
export class Attractions {
  id: string;
  name: string;
  icon: string;
  phone_number: string;
  rating: string;
  opening_hours: {

  };
  name: string;
  location: {
    latitude: string,
    longitude: string
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

