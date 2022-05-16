<template>
  <div>
  <v-app>
   <v-app-bar
      app
      color="black"
      dark
    >
    <v-spacer></v-spacer>
    <v-btn v-if="!auth" @click="goSignin()"
        text
      >
        <span class="mr-2">Sign in</span>
      </v-btn>
      <v-btn v-if="!auth" @click="goLogin()"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn v-if="auth" @click="edit()"
        text
      >
        <span class="mr-2">Edit profile</span>
      </v-btn>
      <v-btn v-if="auth" @click="goLogout()"
        text
      >
        <span class="mr-2">Log out</span>
      </v-btn>
    </v-app-bar>
    <br><br><br>
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome!
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Here you can:
        </h2>
<br>
      </v-col>
    </v-row>
  </v-container>
</v-app>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home-component',
  created () {
    if (sessionStorage.getItem('auth_token')) {
      $.ajaxSetup({
        headers: { Authorization: 'Token ' + sessionStorage.getItem('auth_token') }
      })
      this.findUser()
    }
  },
  computed: {
    auth () {
      let auth
      if (sessionStorage.getItem('auth_token')) {
        auth = true
      }
      return auth
    }
  },
  data () {
    return {
      userid: ''
    }
  },
  methods: {
    goLogin () {
      this.$router.push({ name: 'Login-component' })
    },
    edit () {
      this.$router.push({ name: 'Edit-component' })
    },
    goSignin () {
      this.$router.push({ name: 'SignIn-component' })
    },
    goLogout () {
      sessionStorage.removeItem('auth_token')
      window.location = '/'
    },
    findUser () {
      $.ajax({
        url: 'http://127.0.0.1:8000/war/auth/users/me/',
        headers: { Authorization: 'Token ' + sessionStorage.getItem('auth_token') },
        type: 'GET',
        success: (response) => {
          this.userid = response.id
        },
        error: (response) => {
          alert('Something went wrong, please, try again')
        }
      })
    }
  }
}
</script>
