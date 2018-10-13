import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home';
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, NavController, ToastController } from 'ionic-angular';
import { AngularFireModule } from 'angularFire2';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';

describe('HomePage', () => {
    let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    var config = {
        apiKey: "AIzaSyAP_15gqGDixEFlC2dBbzzrGzNhZ17CUJg",
        authDomain: "lab-assignment2-c325f.firebaseapp.com",
        databaseURL: "https://lab-assignment2-c325f.firebaseio.com",
        projectId: "lab-assignment2-c325f",
        storageBucket: "lab-assignment2-c325f.appspot.com",
        messagingSenderId: "685304153045"
      };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [
                AngularFireModule,
                HttpClientModule,
                AngularFireModule.initializeApp(config),
                IonicModule.forRoot(HomePage)
            ],
            providers: [
                NavController,
                Camera,
                HttpClient,
                AngularFireDatabase,
                AngularFireStorage,
                ToastController
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        comp = fixture.componentInstance;
    });

    it('should create component', () => expect(comp).toBeDefined());

});
