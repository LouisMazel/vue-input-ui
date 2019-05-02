<template>
  <div
    ref="parent"
    :class="[{
      'is-focused': isFocus || valid,
      'has-value': value,
      'has-error': error,
      'is-disabled': disabled,
      'is-dark': dark,
      'has-hint': hint && !value
    }, size]"
    class="field vue-input-ui"
    @click="focusInput"
  >
    <input
      v-if="!textarea"
      :id="id"
      ref="VueInputUi"
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="labelValue"
      :style="[borderStyle]"
      :type="type"
      class="field-input"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    >
    <textarea
      v-else
      :id="id"
      ref="VueInputUi"
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="labelValue"
      :style="[borderStyle]"
      :type="type"
      class="field-input textarea"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    />
    <label
      ref="label"
      :for="id"
      :class="error ? 'lm-text-danger' : null"
      :style="[colorStyle]"
      class="field-label"
      @click="focusInput"
    >
      {{ hintValue || labelValue }}
    </label>

    <button
      v-if="clearable && inputValue && !textarea"
      class="field-clear"
      title="clear"
      type="button"
      @click="clear"
    >
      <span class="field-clear__effect" />
      <span>
        ✕
      </span>
    </button>

    <div
      v-if="loader"
      class="loader"
      :class="{ textarea }"
    />
  </div>
</template>

<script>
  export default {
    name: 'VueInputUi',
    props: {
      value: { type: [String, Number], default: null },
      label: { type: String, default: 'Enter text' },
      hint: { type: String, default: String },
      error: { type: Boolean, default: Boolean },
      color: { type: String, default: 'dodgerblue' },
      disabled: { type: Boolean, default: false },
      dark: { type: Boolean, default: false },
      id: { type: String, default: 'VueInputUi' },
      size: { type: String, default: String },
      type: { type: String, default: 'text' },
      readonly: { type: Boolean, default: false },
      valid: { type: Boolean, default: false },
      validColor: { type: String, default: 'yellowgreen' },
      required: { type: Boolean, default: false },
      textarea: { type: Boolean, default: false },
      loader: { type: Boolean, default: false },
      clearable: { type: Boolean, default: false }
    },
    data: function () {
      return {
        isFocus: false
      }
    },
    computed: {
      borderStyle () {
        const cond = (this.isFocus && !this.error) || this.valid
        return cond
          ? { border: `1px solid ${this.valid ? this.validColor : this.color} !important` }
          : null
      },
      colorStyle () {
        const cond = this.isFocus || this.valid
        return cond
          ? { color: `${this.valid ? this.validColor : this.color}` }
          : null
      },
      inputValue: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      labelValue () {
        let label = this.label
        if (this.required && label) {
          label += ` *`
        }
        return label
      },
      hintValue () {
        let hint = this.hint
        if (this.required && hint) {
          hint += ` *`
        }
        return hint
      }
    },
    methods: {
      focusInput () {
        this.$refs.VueInputUi.focus()
      },
      onFocus: function () {
        this.$emit('focus')
        this.isFocus = true
      },
      onBlur: function () {
        this.$emit('blur')
        this.isFocus = false
      },
      clear () {
        this.$emit('input', null)
        this.$emit('clear')
      }
    }
  }
</script>

<style lang="scss" scoped>
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .field.vue-input-ui {
    position: relative;
    &.is-dark {
      .field-label{
        color: rgba(white, 0.70);
      }
      .field-input{
        background-color: #424242;
        border-color: rgba(white, 0.70);
        color: rgba(white, 0.70);
      }
      &.is-disabled {
        .field-label, .field-input {
          color: #000;
        }
      }
      .field-clear {
        color: rgba(white, 0.70);

        &__effect {
          background-color: rgba(white, 0.54);
        }
      }
    }
    .field-label{
      position: absolute;
      top: 4px;
      cursor: pointer;
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
      cursor: pointer;
      background-color: #FFF;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      position: relative;
      width: 100%;
      padding: 0 12px;
      font-weight: 400;
      -webkit-appearance: none;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      font-size: 14px;
      z-index: 0;

      &:not(.textarea) {
        height: 42px;
        min-height: 42px;
      }
      &.textarea {
        padding: 8px 12px 0 12px;
        min-height: 88px !important;
        resize: vertical;
      }
    }

    .field-clear {
      $clear-size: 24px;

      position: absolute;
      top: 0;
      bottom: 0;
      right: 8px;
      margin: auto 0;
      width: $clear-size;
      height: $clear-size;
      appearance: none;
      border: none;
      background: transparent;
      color: rgba(0, 0, 0, 0.54);
      border-radius: $clear-size;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      & > span:not(.field-clear__effect) {
        position: relative;
        top: 1px;
      }

      &__effect {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: $clear-size;
        height: $clear-size;
        background-color: rgba(black, 0.54);
        border-radius: $clear-size;
        transform: scale(0);
        transition: transform 200ms;
      }

      &:hover {
        color: white;

        .field-clear__effect {
          transform: scale(1);
          opacity: 0.6;
        }
      }
    }

    &.has-value {
      .field-label {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        font-size: 11px;
      }
      .field-input {
        padding-top: 14px;
        &.textarea {
          padding-top: 20px;
        }
      }
    }
    &.has-hint {
      .field-label{
        opacity: 1;
        transform: translateY(0);
        font-size: 11px;
      }
      .field-input {
        padding-top: 14px;
        &.textarea {
          padding-top: 20px;
        }
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
    &.has-error {
      .field-input {
        border-color: orangered !important;
      }
    }
    &.is-disabled {
      .field-input {
        border-color: #CCC;
        background: #F2F2F2;
      }
      .field-label, .field-input {
        cursor: default;
      }
    }
    .lm-text-danger {
      color: orangered !important;
    }
    &.is-dark {
      ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: rgba(white, 0.70);
      }
      :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: rgba(white, 0.70);
        opacity:  1;
      }
      ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: rgba(white, 0.70);
        opacity:  1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba(white, 0.70);
      }
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: rgba(white, 0.70);
      }
      ::placeholder { /* Most modern browsers support this now. */
        color: rgba(white, 0.70);
      }
      &.is-disabled {
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
          color: #424242;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color: #424242;
          opacity:  1;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: #424242;
          opacity:  1;
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #424242;
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
          color: #424242;
        }
        ::placeholder { /* Most modern browsers support this now. */
          color: #424242;
        }
      }
    }
    &.sm {
      .field-input {
        font-size: 12px;

        &:not(.textarea) {
          height: 36px;
          min-height: 36px;
        }
      }
      .field-label {
        font-size: 10px;
      }
      &.has-value {
        .field-input {
          padding-top: 12px;
          &.textarea {
            padding-top: 18px;
          }
        }
      }
    }
    &.lg {
      .field-input {
        font-size: 16px;

        &:not(.textarea) {
          height: 48px;
          min-height: 48px;
        }
      }
      .field-label {
        font-size: 14px;
      }
      &.has-value {
        .field-input {
          padding-top: 16px;
          &.textarea {
            padding-top: 26px;
          }
        }
      }
    }
    .loader {
      top: -2px;
      height: 2px;
      width: 100%;
      position: relative;
      overflow: hidden;
      border-radius: 2px;

      &.textarea {
        top: -7px;
      }

      &::before {
        display: block;
        position: absolute;
        content: '';
        left: -200px;
        width: 200px;
        height: 2px;
        background-color: rgba(black, 0.2);
        animation: loading 2s linear infinite;
      }
    }

    @keyframes loading {
      from {
        left: -200px;
        width: 30%;
      }

      50% {
        width: 30%;
      }

      70% {
        width: 70%;
      }

      80% {
        left: 50%;
      }

      95% {
        left: 120%;
      }

      to {
        left: 100%;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active  {
      box-shadow: 0 0 0 30px white inset;
      -webkit-box-shadow: 0 0 0 30px white inset;
    }
    &.is-dark {
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active  {
        box-shadow: 0 0 0 30px #424242 inset;
        -webkit-box-shadow: 0 0 0 30px #424242 inset;
      }
      input:-webkit-autofill {
        -webkit-text-fill-color: rgba(white, 0.70) !important;
      }
    }
  }
</style>