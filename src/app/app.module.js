import angular from '/node_modules/angular/index';
import uiRouter from '@uirouter/angularjs';
import appConfig from './app.config';
import mainLayout from './layout/mainLayout/mainLayout.component';
import HomePage from './page/home/home.component';
import SearchPage from './page/search/search.component';
import navBar from './components/navBar/navBar.component';

import '../style.css';

const app = angular.module('app', ['ui.router']);
app.config(appConfig);

app.component('mainLayout', mainLayout);
app.component('navBar', navBar);
app.component('home', HomePage);
app.component('search', SearchPage);

angular.bootstrap(document, ['app']);

export default app;
