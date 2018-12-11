<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server">Server #{{ server.id }} status is {{server.status}}</p>
        <p v-else>Select a server to see the details.</p>
        <hr/>
        <button @click="changeStatus">Change to normal</button>
    </div>

</template>

<script>
  import {eventBus} from '../../main';
  export default {
    data: function () {
      return {
        server: null,
      }
    },
    methods: {
      changeStatus: function () {
        this.server.status = "Normal";
      }
    },
    created() {
      eventBus.$on('selectServer', (server) => {
        console.log("id: " + server.id);
        this.server = server;
      });
    },
    destroyed () {    
      eventBus.$off('selectServer');
    }        
  }
</script>

<style>
  
</style>
