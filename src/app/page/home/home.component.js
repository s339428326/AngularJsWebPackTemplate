import template from './home.template.html';

const HomeComponent = {
  template,
  controller: function () {
    this.message = 'Welcome to the Home Page!';
  },
};

export default HomeComponent;
