<template>
  <div>
    <vue-switch3 v-model="value" color_on="#13ce66" color_off="#ccc">
      <template slot="append">Страховка</template>
    </vue-switch3>

    <hr>
    <vue-switch3 v-model="value2" color_on="#13ce66" color_off="#ccc">
      <template slot="prepend">Страховка</template>
    </vue-switch3>
  </div>
</template>
<script>
  import VueSwitch3 from './components/switch';

  export default {
    name: 'app',
    data() {
      return {
        value: true,
        value2: false
      };
    },
    components: { 'vue-switch3': VueSwitch3 }
  };
</script>
<style>
  body { font-family: Arial; }
</style>