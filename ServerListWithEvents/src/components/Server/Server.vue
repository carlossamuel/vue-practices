<template>
  <p><a @click="selectServer">Server #{{ server.id }}</a></p>
</template>

<script>
  import {eventBus} from '../../main';
  export default {
    props: {
      server: Object,
    },
    methods: {
      selectServer() {
        console.log("select server.");
        eventBus.$emit('selectServer', this.server)
      }
    }    
  }
</script>

<style>

</style>
