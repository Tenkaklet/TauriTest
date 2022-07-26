import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import firebase from 'firebase/compat/app';


interface Rooom {
  id: string,
  personer: number,
  rooomName: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Max is the best';
  rooms!: Observable<any[]>;
  constructor(adb: AngularFireDatabase, public aAuth: AngularFireAuth) {
    // const roomRef = adb.list('rooms');
    this.rooms = adb.list('rooms').valueChanges();
  }

  login() {
    this.aAuth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
  }

  logout () {
    this.aAuth.signOut();
    console.log('signed out');
    
  }
  
}
