import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Home } from '../pages/home/home';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html',
  providers: [Keyboard]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Home;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private keybaord: Keyboard
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.keybaord.disableScroll(true);
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
