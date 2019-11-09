<template>
  <div
    id="VueInputUiDemo"
    class="vue-input-ui-demo flex"
    :class="{'dark': darkMode}"
  >
    <div class="container">
      <h1 class="mb-2 mt-4">
        {{ !value1 ? '-' : value1 }}
      </h1>
      <h2 class="mb-2">
        {{ !value2 ? '-' : value2 }}
      </h2>
      <h3 class="mb-2">
        {{ !value3 ? '-' : value3 }}
      </h3>
      <h4 class="mb-2">
        {{ !value4 ? '-' : value4 }}
      </h4>
      <h5 class="mb-2">
        {{ !value5 ? '-' : value5 }}
      </h5>
      <div class="flex justify-content-center pt-3 mb-2">
        <a
          class="btn btn-sm btn-dark"
          href="https://github.com/LouisMazel/vue-input-ui"
          target="_blank"
        >
          Github
        </a>
        <a
          class="btn btn-danger ml-2 btn-sm"
          href="https://npmjs.com/package/vue-input-ui"
          target="_blank"
        >
          Npm
        </a>
      </div>
      <div class="flex justify-content-center pt-3 mb-2">
        <button
          class="btn btn-sm"
          @click="darkMode = !darkMode"
        >
          Toggle Dark Mode
        </button>
        <button
          class="btn btn-success ml-2 btn-sm"
          @click="loading = !loading"
        >
          Toggle loader
        </button>
      </div>
      <br>
      <div class="component-container">
        <VueInputUi
          id="VueInputUi1"
          v-model="value1"
          label="Initial input"
          color="purple"
          size="sm"
          :dark="darkMode"
          clearable
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi2"
          v-model="value2"
          label="Custom border radius"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi3"
          v-model="value3"
          :dark="!darkMode"
          label="Custom bg dark color"
          dark-color="#21222e"
          clearable
          :border-radius="8"
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi4"
          v-model="value3"
          :dark="!darkMode"
          label="is dark"
          color="purple"
          clearable
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi5"
          v-model="value4"
          :error="true"
          label="Input with error='true' + text hint"
          hint="Error text"
          size="lg"
          :dark="darkMode"
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi6"
          v-model="value5"
          label="Valid input state"
          valid
          :dark="darkMode"
          clearable
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi7"
          v-model="value6"
          :dark="darkMode"
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi8"
          v-model="value7"
          label="Is disabled"
          :dark="darkMode"
          disabled
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi9"
          v-model="value8"
          label="Number input"
          :dark="darkMode"
          type="number"
          clearable
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi10"
          v-model="value9"
          label="Required input"
          hint="Is required"
          :dark="darkMode"
          required
          :loader="!loading"
          clearable
        />
        <br>
        <VueInputUi
          id="VueInputUi11"
          v-model="value10"
          label="Text area"
          :dark="darkMode"
          textarea
          rows="4"
          color="tomato"
          :loader="!loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import VueInputUi from './VueInputUi'

  export default {
    name: 'App',
    components: {
      VueInputUi
    },
    data () {
      return {
        value1: 'VueInputUI',
        value2: 'A beautiful input made with VueJs',
        value3: 'Customize size & color (dark mode)',
        value4: 'Error management',
        value5: 'Validator state',
        value6: 'Hello world!',
        value7: null,
        value8: null,
        value9: null,
        value10: null,
        darkMode: false,
        loading: false
      }
    }
  }
</script>

<style lang="scss">
  @import 'style-helpers';

  html,
  body {
    margin: 0;
    min-height: 100%;
  }

  .vue-input-ui-demo {
    background-color: white;

    .container {
      text-align: center;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .component {
      padding: 10px;
      background: #FFF;
      border-radius: 4px;
      border: 1px solid #EBEBEB;

      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
      }
    }

    .component-container {
      margin: 0 10px 20px 10px;
      padding: 20px;
      background: #FFF;
      border-radius: 4px;
      border: 1px solid #EBEBEB;
      min-width: 300px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      flex: 1 0 48%;

      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
      }

      &.dark {
        background-color: darken(#424242, 10%);
        color: #FFF;
      }
    }

    &.dark {
      background-color: darken(#424242, 20%);

      .component-container,
      .component {
        border: 1px solid #424242;
        background-color: darken(#424242, 10%);

        &:hover {
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        }
      }

      .container {
        color: white;
      }
    }
  }
</style>