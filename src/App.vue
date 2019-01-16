<template>
  <div
    id="VueInputUi"
    class="vue-input-ui"
    :class="{'dark': darkMode}"
  >
    <div class="container">
      <h1>{{ !value1 ? '-' : value1 }}</h1>
      <h2>{{ !value2 ? '-' : value2 }}</h2>
      <h3>{{ !value3 ? '-' : value3 }}</h3>
      <h4>{{ !value4 ? '-' : value4 }}</h4>
      <h5>{{ !value5 ? '-' : value5 }}</h5>
      <p>{{ !value6 ? '-' : value6 }}</p>
      <button
        class="btn"
        style="margin-top: 20px;"
        @click="darkMode = !darkMode"
      >
        {{ darkMode ? 'Disable' : 'Enable' }} Dark Mode
      </button>
      <br>
      <div class="component-container">
        <VueInputUi
          v-model="value1"
          label="Initial input"
          color="purple"
          size="sm"
          :dark="darkMode"
        />
        <br>
        <VueInputUi
          v-model="value2"
          label="Input with value"
          :dark="darkMode"
        />
        <br>
        <VueInputUi
          v-model="value3"
          :error="true"
          label="Input with error='true' + text hint"
          hint="Error text"
          size="lg"
          :dark="darkMode"
        />
        <br>
        <VueInputUi
          v-model="value4"
          :dark="darkMode"
        />
        <br>
        <VueInputUi
          v-model="value5"
          dark
          label="is dark"
          color="purple"
        />
        <br>
        <VueInputUi
          v-model="value6"
          label="is disabled"
          :dark="darkMode"
          disabled
        />
        <br>
        <VueInputUi
          v-model="value7"
          label="Number input"
          :dark="darkMode"
          type="number"
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
        value2: 'Hello world!',
        value3: 'A beautiful input made with VueJs',
        value4: 'Error management',
        value5: 'Customize size & color (dark mode)',
        value6: null,
        value7: null,
        darkMode: false
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/main.scss";
  html, body {
    margin: 0;
    min-height: 100%;
  }
  html {
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;
    width: 100%;
  }
  body {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  #VueInputUi {
    min-height: 100%;
    &.dark {
      background-color: darken(#424242, 20%);
      .container {
        color: white;
      }
      header {
        color: rgba(255, 255, 255, 0.70);
      }
    }
  }
  .container {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  textarea {
    background-color: #FFF;
    color: #bd4147;
    border: 1px solid #CCC;
    border-radius: 4px;
    outline: none;
    font-size: 85%;
    width: 100%;
    font-weight: 700;
    font-family: monospace, monospace;
    resize: none;
  }
  .btn {
    padding: 10px 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    outline: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #96bf31;
    color: #FFF;
    font-weight: 500;
    &:hover {
      background-color: darken(#96bf31, 10%);
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    &.option {
      background-color: #424242;
      &:hover {
        background-color: darken(#424242, 10%);
      }
    }
  }
  .component {
    padding: 10px;
    background: #FFF;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    &.options {
      margin-bottom: 20px;
    }
  }
  .component-container {
    margin: 0 10px 20px 10px;
    padding: 20px;
    background: #FFF;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    min-width: 300px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    flex: 1 0 48%;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
    &.dark {
      background-color: darken(#424242, 10%);
      color: #FFF;
      textarea {
        background: #424242;
        color: dodgerblue;
      }
      .btn {
        &:hover {
          box-shadow: 0 0 8px 0 rgba(0,0,0,.6), 0 2px 4px 0 rgba(0,0,0,.5);
        }
        &.option {
          background-color: #424242;
          &:hover {
            background-color: lighten(#424242, 10%);
          }
        }
      }
    }
  }
  .dark {
    .component-container, .component {
      border: 1px solid #424242;
      background-color: darken(#424242, 10%);
      &:hover {
        box-shadow: 0 0 8px 0 rgba(0,0,0,.6), 0 2px 4px 0 rgba(0,0,0,.5);
      }
    }
    hr {
      border-color: #424242;
    }
  }
  @media screen and (max-width: 1024px) {
    .components-container.flex {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      flex-flow: column;
      -moz-flex-direction: column;
    }
  }
</style>