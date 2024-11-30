import template from './mainLayout.template.html';

const mainLayout = {
  template,
  transclude: true,
  controller: function () {
    this.info = 'mainLayout!';
  },
};

export default mainLayout;
