import { Component,ViewChild } from '@angular/core';
import { Platform,Tabs } from 'ionic-angular'

import { AboutPage } from '../about/about';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';
import { BackButtonService } from '../../services/backButton.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots = [];//声明tab路由
  @ViewChild('myTabs') tabRef: Tabs;
  constructor(public backButtonService: BackButtonService, private platform: Platform) {
    this.tabRoots = [
      {
        root:HomePage,
        tabTitle:"主页",
        tabIcon:"home"
      },
      {
        root: SettingPage,
        tabTitle: '设置',
        tabIcon: 'person'
      },
      {
        root:AboutPage,
        tabTitle:"关于我们",
        tabIcon:"document"
      }
    ];
    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }
}
