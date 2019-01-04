<template>
  <div class="form-inline">
    <div class="form-group">
      <label for="first-name">First Name:</label>
      <input type="text" class="form-control" id="first-name" v-model.lazy="firstName">
    </div>
    <div class="form-group">
      <label for="last-name">Last name:</label>
      <input type="text" class="form-control" id="last-name" v-model.lazy="lastName">
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        value: {firstName:String, lastName:String},
      },
      data() {
        return {
         firstName: this.value.firstName,
         lastName: this.value.lastName
        }
      },
      watch: {
        firstName (newValue) {
          this.value.firstName = newValue;  
          this.emitFullName();
        },
        lastName (newValue) {
          this.value.lastName = newValue;  
          this.emitFullName();
        },
      },
      methods: {
        emitFullName() {
          this.$emit('input', this.value);
        }
      }     
    }
</script>

<style scoped>    
</style>