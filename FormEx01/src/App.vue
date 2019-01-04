<template>
    <div class="container">
        <form v-if="!isSubmitted">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Signup</h1>
              <hr>
              <app-full-name v-model="fullName"></app-full-name>
              <div class="form-group">
                  <label for="email">Email</label>
                  <input  type="email"
                          id="email"
                          class="form-control"
                          v-model="email">
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input  type="password"
                          id="password"
                          class="form-control"
                          v-model="password">
              </div>
            </div>
          </div>
          
          <div class="row">       
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                Store Data? 
                <app-switch v-model="storeData" true-value="Yes" falseValue="No"></app-switch>
            </div>
          </div>
          <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <button class="btn btn-primary" @click.prevent="submitted">Submit</button>
              </div>
          </div>
          
          
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
        </form>

        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName.firstName}} {{fullName.lastName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Switch from './components/Switch.vue';
  import FullName from './components/FullName.vue';
    export default {
      data () {
        return {
          fullName:{firstName:'', lastName:''},
          email: '',
          password:'',
          storeData:'No',
          isSubmitted: false,
        }
      },
      components: {
        appSwitch: Switch,
        appFullName: FullName
      },
      methods: {
        submitted() {
          this.isSubmitted = true;
        }
      }
    }
</script>

<style>
</style>
