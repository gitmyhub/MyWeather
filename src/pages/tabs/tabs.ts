import { Component } from '@angular/core';
import { WeatherPage } from '../weather/weather';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  weatherRoot = WeatherPage;
  settingsRoot = SettingsPage;

  constructor() {

  }
}
