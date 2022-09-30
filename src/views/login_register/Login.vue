<template>
  <v-app >
   
    <v-main class="bg-color">
          <video autoplay loop muted plays-inline class="bg-video">
          <source src="../../assets/bg.mp4">
          </video>
          <v-card class="mx-auto text-center" max-width="700">
            <h2 class="pt-10">Login in to Your Account</h2>
            <v-form class="form">
              <v-text-field
                label="Email"
                outlined
                dense
                color="blue"
                autocomplete="false"
                class="mt-16"
              />
              <v-text-field
                label="Password"
                outlined
                dense
                color="blue"
                autocomplete="false"
                type="password"
              />
              <v-row>
                <v-col cols="12" md="6" lg="6"
                  ><v-checkbox label="Remember Me" class="mt-n1" color="blue">
                  </v-checkbox
                ></v-col>
                <v-col cols="12" md="6" lg="6">
                  <router-link class="link" to="/Sigin">Sign up</router-link>
                </v-col>
              </v-row>
            </v-form>

            <v-btn class="elevation-6 mb-10 mt-5 btn"> Log in </v-btn>
          </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style scoped>
* {
  font-family: cursive;
  margin: 0;
  padding: 0;
}
.bg-color{
  background-color: #000000;
  opacity: 0.8;

}
.v-card{
  position: absolute;
  left: 25%;
  right: 25%;
  top: 20%;
  z-index: 1;
  border-top-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
}
.form {
  margin-right: 10rem;
  margin-left: 10rem;
}
.link {
  text-decoration: none;
  color: rgb(35, 173, 223);
}
.btn {
  border-radius: 1rem;
}
.btn:hover {
  color: #e0e0e0;
  background-color: #212121;
  transition: 0.7s;
}
@media (max-width: 858px) {
  .form {
    margin-right: 5rem;
    margin-left: 5rem;
  }
}
.bg-video{
  position: fixed;
  width: 100%;
  z-index: -1;
}
</style>