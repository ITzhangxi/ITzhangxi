import ZtButton from './src/button.vue';

/* istanbul ignore next */
ZtButton.install = function(Vue) {
    Vue.component(ZtButton.name, ZtButton);
};

export default ZtButton;
