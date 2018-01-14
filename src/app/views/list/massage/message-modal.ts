import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

@Component({
    selector: 'mess-modal',
    templateUrl: 'message-modal.html',
})
export class MessModal{
    photo:string="assets/person.jpg";
    constructor(public viewCtrl: ViewController,
                public params: NavParams
    ){
        console.log(this.params.get("data"));
        this.photo=this.params.get("data").photo;
    }
    dismiss(){
        this.viewCtrl.dismiss();
    }
}