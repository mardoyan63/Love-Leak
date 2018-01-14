import { Injectable, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Injectable()
export class Settings {
	clientID:string;
	picture_path:string= "";
	video_path:string = ""
	gander:"";
	interest:"";
	isVIP:boolean;

}