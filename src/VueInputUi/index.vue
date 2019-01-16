<template>
  <div
    id="VueInputUi"
    class="vue-input-uit"
  >
    <div
      ref="parent"
      :class="{'is-focused': isFocus, 'has-value': value, 'has-error': errorHint}"
      class="field"
    >
      <label
        :class="hint ? (errorHint ? 'text-danger' : 'text-primary') : ''"
        :for="id"
        class="field-label"
      >
        {{ hint || label }}
      </label>
      <input
        :id="id"
        ref="VueInputUi"
        v-model="inputValue"
        :type="type"
        :placeholder="label"
        :value="value"
        class="field-input"
        @focus="onFocus"
        @blur="onBlur"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueInputUi',
    props: {
      label: { type: String, default: 'Enter text' },
      value: { type: String, default: String },
      hint: { type: String, default: String },
      errorHint: { type: Boolean, default: Boolean },
      type: { type: String, default: 'text' },
      id: { type: String, default: 'VueInputUi' }
    },
    data () {
      return {
        isFocus: false
      }
    },
    computed: {
      inputValue: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    },
    methods: {
      onFocus () {
        this.isFocus = true
      },
      onBlur () {
        this.isFocus = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  #VueInputUi {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    .field{
      position: relative;
      .field-label{
        position: absolute;
        top: 3px;
        left: 13px;
        -webkit-transform: translateY(25%);
        transform: translateY(25%);
        opacity: 0;
        -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        font-size: 11px;
        color: rgba(0, 0, 0, 0.54);
      }
      .field-input{
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        position: relative;
        width: 100%;
        height: 42px;
        min-height: 42px;
        padding: 0 12px;
        font-weight: 300;
        -webkit-appearance: none;
        outline: none;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
      &.has-error {
        .field-input {
          border-color: orangered !important;
        }
        .field-label{
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
          font-size: 11px;
        }
        .field-input {
          padding-top: 14px;
        }
      }
      &.has-value {
        .field-label{
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
          font-size: 11px;
        }
        .field-input {
          padding-top: 14px;
        }
      }
      &.is-focused {
        .field-input {
          border-color: dodgerblue;
        }
        .field-label {
          color: dodgerblue;
        }
      }
    }
    .text-danger {
      color: orangered !important;
    }
  }
</style>
