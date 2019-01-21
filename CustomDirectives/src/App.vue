<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p v-local-on:click="clickOn">Not Clicked</p>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'local-on' : {
          bind (el, binding, vnode) {
            const type = binding.arg;
            const myFunction = binding.value;
            el.addEventListener(type, myFunction);
          }
        }
      },
      methods: {
        clickOn (event) {
          event.target.innerText = "clicked."
        }
      }
    }
</script>

<style>
</style>
