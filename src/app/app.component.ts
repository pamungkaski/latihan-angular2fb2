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
    tags: ['']
  };
  arrayAtt: FirebaseListObservable<Attraction[]>;
  items: FirebaseObjectObservable<any[]>;
  constructor(
  private db: AngularFireDatabase
) {
    this.arrayAtt = db.list('/attractions') as FirebaseListObservable<Attraction[]>;
    // console.log(this.arrayAtt)
  }
  onSubmit(attraction: Attractions) {
    this.items = this.db.object('/attractions/' + attraction.id);
    this.items.set({
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
      tags: attraction.tags
    });
    attraction.id =  UUID.UUID();
  }
  onSelect(attraction: Attraction) {
    this.items = this.db.object('/attractions/' + attraction.$key);
    this.items.set({
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
      tags: attraction.tags
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
  tags: string[]
}
interface Attraction {
  $key: number;
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
  tags: string[]
}

