var path = require('path');
var cooking = require('cooking');


cooking.set({
  entry: {
    index: path.join(__dirname, 'src/install.js')
  },
  dist: path.join(__dirname, 'dist'),
  template: false,
  format: 'umd',
  clean: true,
  minimize: true,
  moduleName: 'VueSwitch3',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2', 'lint', 'sass', 'autoprefixer']
});


cooking.add('output.filename', 'vue-switch3.js');
module.exports = cooking.resolve();
