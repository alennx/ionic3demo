import { Component } from '@angular/core';
import { IonicPage,ModalController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Platform } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public modalCtrl: ModalController,private backButtonService: BackButtonService,private platform:Platform) {
    this.platform.ready().then(()=>{
      this.backButtonService.registerBackButtonAction(null);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//登陆判定和跳转
  logIn(username:HTMLInputElement, password:HTMLInputElement){
    console.log("进来");
    // console.log(username.value);
    // console.log(password.value);
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }
}
