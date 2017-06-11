import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  hero: FirebaseObjectObservable<any[]>
  constructor(private db: AngularFireDatabase) { }

  addHero(hero) {
    this.hero = this.db.object('hero' + hero.id) as FirebaseObjectObservable<any[]>;
    this.hero.set({
      name: hero.name,
    })
  }
}
