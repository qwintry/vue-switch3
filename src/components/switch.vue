<template>
  <label class="switch" :class="{ 'is-disabled': disabled }">
    <span class="switch-text--prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </span>
    <div class="switch-mask" v-show="disabled"></div>
    <input class="switch-input"
           type="checkbox"
           @change="handle_change"
           v-model="model"
           :name="name"
           :disabled="disabled">
    <span class="switch-core" ref="core" :style="{ 'width': width + 'px' }">
            <span class="switch-button" :style="style"></span>
        </span>
    <transition name="label-fade">
      <div class="switch-label switch-label--left"
           v-show="value"
           :style="{ 'width': width + 'px' }">
      </div>
    </transition>
    <transition name="label-fade">
      <div class="switch-label switch-label--right"
           v-show="!value"
           :style="{ 'width': width + 'px' }">
      </div>
    </transition>
    <span class="switch-text--append" v-if="$slots.append">
      <slot name="append"></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'VueSwitch3',
    props: {
      value: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color_on: {
        type: String,
        default: ''
      },
      color_off: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        width: 46,
        style: {
          transform: ''
        }
      };
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    watch: {
      value() {
        if (this.color_on || this.color_off) {
          this.define_color();
        }
        this.style_transform();
      }
    },
    methods: {
      handle_change(event) {
        this.$emit('change', event.currentTarget.checked);
      },
      define_color() {
        let color_new = this.value ? this.color_on : this.color_off;
        this.$refs.core.style.borderColor = color_new;
        this.$refs.core.style.backgroundColor = color_new;
      },
      style_transform() {
        this.style.transform = this.value ? `translate(${ this.width - 20 }px, 2px)` : 'translate(4px, 2px)';
      }
    },
    mounted() {
      this.style_transform();
      if (this.color_on || this.color_off) {
        this.define_color();
      }
    }
  };
</script>

<style lang="scss">
  $color_white: #fff;
  $color_blue: #20a0ff;
  $color_light_lilac: #e5e9f3;
  $color_light_gray: #f9fafc;
  $color_blue_light: #c0ccda;

  .switch {
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    margin-top: 6px;
    margin-bottom: 6px;
    vertical-align: middle;

    .switch-text--prepend,
    .switch-text--append {
      display: block;
      height: 20px;
      position: relative;
      cursor: pointer;
    }

    .switch-text--prepend {
      padding-right: 10px;
      float: left;
    }

    .switch-text--append {
      position: absolute;
      left: 56px;
      top: -2px;
    }

    .label-fade-enter {
      opacity: 0;
    }
    .label-fade-leave-active {
      opacity: 0;
    }
    &.is-disabled {
      .switch-core {
        border-color: $color_light_lilac !important;
        background: $color_light_lilac !important;
        cursor: not-allowed;
        span {
          background-color: $color_light_gray !important;
        }
        ~ .switch-label * {
          color: $color_light_gray !important;
        }
      }
      .switch-label {
        cursor: not-allowed;
      }
      .switch-input:checked + .switch-core {
        border-color: $color_light_lilac;
        background-color: $color_light_lilac;
      }
    }
  }

  .switch-label {
    position: absolute;
    font-size: 14px;
    display: inline-block;
    width: 46px;
    height: 20px;
    cursor: pointer;
    transition: .2s;
    z-index: 10;
    left: 0;
    top: 0;
    user-select: none;
    * {
      position: absolute;
      font-size: 14px;
      display: inline-block;
      line-height: 1;
      top: 4px;
      color: $color_white;
    }
  }

  .switch-core {
    width: 46px;
    height: 20px;
    cursor: pointer;
    margin: 0;
    display: inline-block;
    position: relative;
    border: 1px solid $color_blue_light;
    outline: 0;
    border-radius: 12px;
    box-sizing: border-box;
    background: $color_blue_light;
    transition: border-color .3s, background-color .3s;
    .switch-button {
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 100%;
      transition: transform .3s;
      width: 14px;
      height: 14px;
      z-index: 20;
      background-color: $color_white;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    }
  }

  .switch-input {
    display: none;
    &:checked + .switch-core {
      border-color: $color_blue;
      background-color: $color_blue;
    }
  }

  .switch-label--left i {
    left: 6px;
  }

  .switch-label--right i {
    right: 6px;
  }

  .el-switch--wide .switch-label {
    &.switch-label--left span {
      left: 10px;
    }
    &.switch-label--right span {
      right: 10px;
    }
  }
</style>
