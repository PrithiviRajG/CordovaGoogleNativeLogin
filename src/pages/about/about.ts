import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { Storage } from '@ionic/storage';

interface Window {
    plugins: any;
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public storage: Storage) {

  }

  login() {
    window['plugins'].googleplus.login(

          {'webClientId': '1049392732662-k78h4hf5nh76m52ombs3bfab1ntevgtd',
            'offline': true
    },
      function (obj) {
        alert(JSON.stringify(obj));
        console.log("Hurray From about.ts"+JSON.stringify(obj)); // do something useful instead of alerting

        },
        function (msg) {
        alert('error: ' + msg);
        console.log('error: ' + msg);
        }
      );
  }

  hello(){
//localStorage.get('starter_google_user')
  this.storage.get('starter_google_user').then( (value:any) => {
    console.log("in hell function"+value)
  });

  }
}
