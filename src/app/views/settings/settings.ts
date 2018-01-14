import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LocalStorage } from "../../service/LocalStorage/localstorage.service";
LocalStorage
@Component({
    selector: "settings-page",
    templateUrl: "settings.html"
})
export class AppSettings {
	password:string="";
    metr:number=50;
    	eys:string="assets/pp/close-eys.png";
	showPassword:boolean=false; 
	radioGen:number=1;
	intMan: boolean = false;
  intWom: boolean = false;
	constructor(public navCtrl: NavController,
				public ls:LocalStorage
	) {

	}
	ngOnInit(){
		
	}
    back(){
        this.navCtrl.pop();
    }
    openEye(){
		if(!this.showPassword){
			this.eys="assets/pp/open-eys.png"
			this.showPassword=!this.showPassword;
		}
		else{
			this.eys="assets/pp/close-eys.png"
			this.showPassword=!this.showPassword;
		}
	}
}