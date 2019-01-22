<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p><b>Original:</b> {{textEx01}} <b>Reversed:</b> {{textEx01 | reverse}}</p>
                <hr/>  
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p><b>Original:</b> {{textEx02}} <b>Length:</b> {{textEx02 | add-length}}</p>
                <hr/>  
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p><b>Original:</b> {{textEx03}} <b>Reversed:</b> {{reversed}} <b>Length:</b> {{addLength}}</p>
                <hr/>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p><b>Original:</b> {{textEx04}} <b>Length:</b> {{addLengthMixin}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {addLengthMixin} from './addLengthMixin'
    export default {
      mixins: [addLengthMixin],
      data () {
        return {
          textEx01: 'Reverse Text',
          textEx02: 'Shows length',
          textEx03: 'Reverse and Shows length with computed.',
        };
      },
      filters: {
        reverse (value) {
          let reversed = "";
          for (let char of value) {
            reversed = char + reversed;
          }
          return reversed;
        }
      },
      computed: {
        reversed() {
          let reversed = "";
          for (let char of this.textEx03) {
            reversed = char + reversed;
          }
          return reversed;
        }, 
        addLength () {
          return this.textEx03 + " (" +  this.textEx03.length + ")";
        }
      }
    }
</script>

<style>
</style>
