import Switch from './components/switch';

Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

/* eslint eol-last: ["error", "never"] */
export default Switch;