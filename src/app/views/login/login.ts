import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { APIService } from '../../service/api/api-service';
import { ListPage } from '../list/list';
import { Settings } from '../../service/settings/settings';
import { LocalStorage } from "../../service/LocalStorage/localstorage.service";



@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	eys: string = "assets/pp/close-eys.png";
	showPassword: boolean = false;
	constructor(
		public navCtrl: NavController,
		private api: APIService,
		private settings: Settings,
		public ls: LocalStorage,
		
	) {

	}
	username = "a@a.a"
	password = "123"
	login() {
		this.api.login(this.username, this.password).subscribe(data => {
			console.log(data);

			if (data["action"] == "login") {
				this.api.sessionId = data["id"]
				this.settings.clientID = data["id"]
				this.ls.setIt('start', 'start');
				
				this.navCtrl.setRoot(ListPage);
			}
		}, error => {
			console.log(error);
		});
	}
	registration() {
		this.navCtrl.push(RegistrationPage);
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
	lsSave(data){
		this.ls.setIt("distance", data["distance"])
		if(data["sex"]=="mal"){
			this.ls.setIt("sex", "2")
		}
		else if(data["sex"]=="femal"){
			this.ls.setIt("sex", "1")
		}
	}
}
