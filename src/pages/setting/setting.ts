import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  //退出登陆
  logOut() {
    console.log("退出");
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
