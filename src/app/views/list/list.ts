import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';
import { Settings } from '../../service/settings/settings';
import { APIService } from '../../service/api/api-service';
import { MessModal } from "./massage/message-modal";
import { AppSettings } from "../settings/settings";
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

const LISTS =
	[{ photo: "assets/photos/profile.jpg", name: "Jac", description: "" },
	{ photo: "assets/photos/cat.jpg", name: "Jac", description: "" },
	{ photo: "assets/photos/annaniks.jpg", name: "Jac", description: "" }]

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {
	@ViewChild(Slides) slides: Slides;
	slideIndex: number = 1;
	list = LISTS;
	rotate:number=0;
	showArrow=true;
	constructor(
		public navCtrl: NavController,
		private api: APIService,
		private settings: Settings,
		public mc: ModalController,
		private deviceOrientation: DeviceOrientation,
	) {
	}
	ngAfterViewInit() {
		this.slides.loop = true;
		this.slides.centeredSlides = true;
	}
	ionViewWillEnter() {

	}
	slideChanged() {
		if (this.slides.getActiveIndex() == 4) {
			this.slideIndex = 1;
		} else if (this.slides.getActiveIndex() == 0) {
			this.slideIndex = this.list.length;
		}
		else {
			this.slideIndex = this.slides.getActiveIndex();
		}
		this.showCompass();
	}
	openModal() {
		let myModal = this.mc.create(
			MessModal,
			{ data: this.list[this.slideIndex - 1] }
		);
		myModal.present();
	}
	showSettings(){
		this.navCtrl.push(AppSettings);
	}
	rotateArrow(){
		this.rotate+=5;
	}
		showCompass() {
		this.deviceOrientation.getCurrentHeading().then(
			(data: DeviceOrientationCompassHeading) => console.log(data),
			(error: any) => {
				this.showArrow=false;
			}
		);
	}
}