import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}