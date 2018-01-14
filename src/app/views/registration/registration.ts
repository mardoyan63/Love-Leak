import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { APIService } from "../../service/api/api-service";
import { LocalStorage } from "../../service/LocalStorage/localstorage.service";
import { Settings } from "../../service/settings/settings";
import { ListPage } from "../list/list";

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  username = ""
	password = ""
  radioGen: number = 1;
  intMan: boolean = false;
  intWom: boolean = false;
  eys: string = "assets/pp/close-eys.png";
  showPassword: boolean = false;
  constructor(
    public navCtrl: NavController,
    private api: APIService,
    		private settings: Settings,
		public ls: LocalStorage,
  ) {

  }

  registration() {
    let sex=""
    let int=""
    let dt="android"
    this.ls.setIt("username", this.username);
    this.ls.setIt("password", this.password);
    this.ls.setIt("sex", this.radioGen.toString());
    if(this.intWom){
      this.ls.setIt("interested", "man");
      int=""
    }
    else if(this.intMan){
      this.ls.setIt("interested", "won")
      int=""
    }
    else if(this.intMan && this.intWom){
        this.ls.setIt("interested", "all")
        int=""
    }
    if(this.radioGen==1){
      sex="femal"
    }
    else{
      sex="mal"
    }
    /*
    this.api.registration(this.username, sex, int, dt ).subscribe(data => {
      if (data['action'] == "reg") {
        this.api.sessionId = data["id"]
        this.settings.clientID = data["id"]
        this.ls.setIt('start', 'start');
        this.navCtrl.setRoot(ListPage);
      }
    },
    error => {
			console.log(error);
    })*/
  }
  back() {
    this.navCtrl.pop();
  }
  openEye() {
    if (!this.showPassword) {
      this.eys = "assets/pp/open-eys.png"
      this.showPassword = !this.showPassword;
    }
    else {
      this.eys = "assets/pp/close-eys.png"
      this.showPassword = !this.showPassword;
    }
  }
}
