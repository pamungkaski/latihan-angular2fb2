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
      longitude: '',
      route: '',
      city: '',
      state: '',
      country: ''
    },
    icon: '',
    phone_number: '',
    rating: 0,
    opening_hours: [{
      open: false,
      time: {
        start: '',
        close: '',
      }
    }, {
      open: false,
      time: {
        start: '',
        close: '',
      }
    }, {
      open: false,
      time: {
        start: '',
        close: '',
      }
    }, {
      open: false,
      time: {
        start: '',
        close: '',
      }
    }, {
      open: false,
      time: {
        start: '',
        close: '',
      }
    }, {
      open: false,
      time: {
        start: '',
        close: '',
      }
    }, {
      open: false,
      time: {
        start: '',
        close: '',
      }
    }],
    permanently_close: false,
    website: '',
    vicinity: '',
    tags: ['x'],
    recommended_duration: 0,
    type: ''
  };
  aTag: string;
  arrayAtt: FirebaseListObservable<Attraction[]>;
  items: FirebaseObjectObservable<any[]>;
  constructor(
  private db: AngularFireDatabase
) {
    this.arrayAtt = db.list('/attractions') as FirebaseListObservable<Attraction[]>;
    // console.log(this.arrayAtt)
  }
  onAddTag(attraction: Attraction, tag) {
    if (attraction.tags[0] === 'x'){
      attraction.tags[0] = tag
    }else {
      attraction.tags.push(tag);
    }
    tag = '';
    this.onUpdate(attraction)
  }
  onSubmit(attraction: Attractions) {
    this.items = this.db.object('/attractions/' + attraction.id);
    this.items.set({
      id: attraction.id,
      name: attraction.name,
      location: attraction.location,
      icon: attraction.icon,
      phone_number: attraction.phone_number,
      rating: attraction.rating,
      opening_hours: attraction.opening_hours,
      permanently_close: attraction.permanently_close,
      website: attraction.website,
      vicinity: attraction.location.route + ', ' + attraction.location.city
      + ', ' + attraction.location.state + ', ' + attraction.location.country,
      tags: attraction.tags,
      recommended_duration: attraction.recommended_duration,
      type: attraction.type
    })
      .then(function() {
        console.log('Add succeeded.')
      })
      .catch(function(error) {
        console.log('Add failed: ' + error.message)
      });
    attraction.id =  UUID.UUID();
  }
  onUpdate(attraction: Attraction) {
    this.items = this.db.object('/attractions/' + attraction.$key);
    this.items.set({
      id: attraction.$key,
      name: attraction.name,
      location: attraction.location,
      icon: attraction.icon,
      phone_number: attraction.phone_number,
      rating: attraction.rating,
      opening_hours: attraction.opening_hours,
      permanently_close: attraction.permanently_close,
      website: attraction.website,
      vicinity: attraction.location.route + ', ' + attraction.location.city
      + ', ' + attraction.location.state + ', ' + attraction.location.country,
      tags: attraction.tags,
      recommended_duration: attraction.recommended_duration,
      type: attraction.type
    })
      .then(function() {
        console.log('Update succeeded.')
      })
      .catch(function(error) {
        console.log('Update failed: ' + error.message)
      });
  }
  onDelete(attraction: Attraction) {
    this.items = this.db.object('/attractions/' + attraction.$key);
    this.items.remove()
      .then(function() {
        console.log('Remove succeeded.')
      })
      .catch(function(error) {
        console.log('Remove failed: ' + error.message)
      });
  }
}
export class Attractions {
  id: string;
  name: string;
  location: {
    latitude: string,
    longitude: string,
    route: string,
    city: string,
    state: string,
    country: string
  };
  icon: string;
  phone_number: string;
  rating: number;
  opening_hours: [{
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }];
  permanently_close: boolean;
  website: string;
  vicinity: string;
  tags: string[];
  recommended_duration: number;
  type: string;
}
interface Attraction {
  $key: string;
  id: string;
  name: string;
  location: {
    latitude: string;
    longitude: string;
    route: string;
    city: string;
    state: string;
    country: string
  }
  icon: string;
  phone_number: string;
  rating: number;
  opening_hours: [{
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }, {
    open: boolean,
    time: {
      start: string,
      close: string,
    }
  }];
  permanently_close: boolean;
  website: string;
  vicinity: string;
  tags: string[];
  recommended_duration: number;
  type: string;
}

