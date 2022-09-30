<template>
  <v-app>
   
    <v-main class="bg-color">
           <video autoplay loop muted plays-inline class="bg-video">
          <source src="../../assets/bg.mp4">
          </video>
          <v-card class="elevation-6 mx-auto text-center " max-width="700">
            <h2 class="pt-10">Register Your Account</h2>
            <v-form class="form">
              <v-text-field
                label="First Name"
                outlined
                dense
                color="blue"
                autocomplete="false"
                class="mt-16"
              />
              <v-text-field
                label="Last Name"
                outlined
                dense
                color="blue"
                autocomplete="false"
                type="password"
              />
              <v-text-field
                label="Email"
                outlined
                dense
                color="blue"
                autocomplete="false"
                type="email"
              />
              <v-text-field
                label="Label Text"
                type="date"
              ></v-text-field>
              <v-row>
                <v-col cols="12" md="8" lg="8"
                  ><v-text-field
                    label="Tel Number"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                /></v-col>
                <v-col cols="12" md="4" lg="4"
                  ><v-text-field
                    label="Age"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                    type="number"
                /></v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    label="Province"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                  />
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    label="district"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                  />
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    label="Village"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" lg="6"
                  ><v-text-field
                    label="Password"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                    type="password"
                /></v-col>
                <v-col cols="12" md="6" lg="6"
                  ><v-text-field
                    label="Confirm Password"
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                    type="password"
                /></v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="8" lg="8">
                  <p>Have already an account?</p>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <router-link class="link" to="/Login">Login</router-link>
                </v-col>
              </v-row>
            </v-form>

            <v-btn class="elevation-5 mb-10 mt-5 btn"> Register </v-btn>
          </v-card>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "SigninView",
};
</script>

<style scoped>
* {
  font-family: cursive;
}
.v-app{
 padding: 0;
}
.bg-color{
  background-color: #000000;
  opacity: 0.7;
}
.v-card{
  margin-top: 5rem;
  margin-bottom: 5rem;
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
  color: #ffffff;
  background-color: rgb(100, 101, 101);
  transition: 0.5s;
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
  z-index: 0;
}
</style>