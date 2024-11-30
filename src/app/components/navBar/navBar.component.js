import template from './navBar.template.html';
import './navBar.component.css';

const navBar = {
  template,
  controller: function () {
    this.info = 'navBar!';
  },
};

export default navBar;
