<template>
  <div>
    <h1>
      Component:
    </h1>
    <VueInputUi
      id="input1"
      v-model="value"
      clearable
    />
  </div>
</template>

<script>
  import VueInputUi from './../VueInputUi'
  export default {
    components: {
      VueInputUi
    },
    data () {
      return {
        value: null
      }
    }
  }
</script>