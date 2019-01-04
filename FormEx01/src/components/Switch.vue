<template>
    <div>
        <div
                id="on"
                @click="switched(trueValue)"
                :class="{active: value == trueValue}">{{trueValue}}</div>
        <div
                id="off"
                @click="switched(falseValue)"
                :class="{active: value == falseValue}">{{falseValue}}</div>
    </div>
</template>

<script>
    export default {
      props: {
        value: String,
        trueValue: String,
        falseValue: String
      },
      methods: {
        switched (newValue) {
          this.$emit('input', newValue);
        }
      }      
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>
