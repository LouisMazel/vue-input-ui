<template>
  <div
    id="VueInputUi"
    class="vue-input-ui"
  >
    <img
      src="./assets/logo.png"
      alt="Ctk logo"
    >
    <div id="VueInputUiContainerDiv">
      <h1>VueCtkInputText</h1>
      <h3>A VueJs component : Beautiful Input</h3>
      <VueInputUi
        v-model="value2"
        label="Initial input"
      />
      <br>
      <VueInputUi
        v-model="value"
        label="Input with value"
      />
      <br>
      <VueInputUi
        v-model="value2"
        :error-hint="true"
        label="Input with error-hint: true + text hint"
        hint="Error text"
      />
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
        value: 'Hello world!',
        value2: null
      }
    }
  }
</script>

<style lang="scss">
  #VueInputUiContainerDiv, html, body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #VueInputUiContainerDiv {
    width: 80%;
    margin: 0 auto;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
</style>
