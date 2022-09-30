<template>
  <v-app>
    <v-main>
      <v-row class="header">
        <v-col lg="12"><h1>ACTIVITIES AROUND THAKHEK</h1></v-col>
      </v-row>

      <v-row class="content">
        <v-col class="col_img" cols="12" md="6" lg="6">
          <v-img
            max-width="440px"
            max-height="305"
            src="../assets/Activities/Activities1.png"
          />
        </v-col>
        <v-col class="col_text" cols="12" md="6" lg="6">
          <h2>Kayaking</h2>
          <p>
            Khammouane province is a paradise for kayaking and rafting as a
            massive network of clean and unspoilt rivers and streams awaits you!
            Have an amazing time kayaking amongst the beautiful scenery of
            towering limestone peaks! Enjoy the crystal clear water and remote
            villages which are only accessible by the river.
          </p>
          <a class="btn" target="black" href="https://greendiscoverylaos.com/">
            Discover more
          </a>
        </v-col>
      </v-row>
      <v-divider class="mx"></v-divider>
      <v-row class="content">
        <v-col class="col_text" cols="12" md="6" lg="6">
          <h2>Rock Climbing</h2>
          <p>
            The climbing area near Thakhek called “Pha Tam Kam” is hidden in a
            small valley which ends in the backside of the beautiful Xiengliab
            Cave (12 km outside from Thakhek).
          </p>
          <p>
            You will find wonderful routes with tufas, sintering and face
            climbing. The gigantic roof with routes ranging from 6b+ to around
            8a is unique. So far there is a total of 150 routes ranging from 4
            to around 8b.Whether advanced climbers or beginners, you will have a
            lot of challenge and amusement!
          </p>
          <a class="btn" target="black" href="https://greendiscoverylaos.com/">
            Discover more
          </a>
        </v-col>
        <v-col class="col_img" cols="12" md="6" lg="6">
          <v-img
            max-width="540px"
            max-height="360"
            src="../assets/Activities/Activities2.png"
          />
        </v-col>
      </v-row>
      <v-divider class="mx"></v-divider>
      <v-row class="content">
        <v-col class="col_img" cols="12" md="6" lg="6">
          <v-img
            max-width="540px"
            max-height="359"
            src="../assets/Activities/Activities3.png"
          />
        </v-col>
        <v-col class="col_text" cols="12" md="6" lg="6">
          <h2>Trekking around Thakhek</h2>
          <p>
            Explore this stunning area of Khammouane that has truly stunning
            scenery of towering mountains and thick forests! Trek through the
            Phou Hin Boun Protected Area, learn about the wildlife and the
            people who live in the forest while staying overnight in a remote
            village.
          </p>
          <a class="btn" target="black" href="https://greendiscoverylaos.com/">
            Discover more
          </a>
        </v-col>
      </v-row>
      <v-divider class="mx"></v-divider>
      <v-row class="content">
        <v-col class="col_text" cols="12" md="6" lg="6">
          <h2>Cycling</h2>
          <p>
            Enjoy cycling with Green Discovery in the stunning scenery of
            limestone mountains in Khammouane province. Cycling is great way
            explore the province, interact with the friendly local people and
            learn about local stories and traditional beliefs.
          </p>
          <a class="btn" target="black" href="https://greendiscoverylaos.com/">
            Discover more
          </a>
        </v-col>
        <v-col class="col_img" cols="12" md="6" lg="6">
          <v-img
            max-width="440px"
            max-height="360"
            src="../assets/Activities/Activities4.png"
          />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ActivitiesView",
  components: {  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: cursive;
}
.header {
  background-image: url(./../assets/bgHeader.png);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.content {
  text-align: center;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.col_img {
  display: flex;
  justify-content: center;
}
.col_text p {
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.btn {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem;
  border: #424242 solid 2px;
  border-radius: 0.5rem;
  background-color: #424242;
}
.btn:hover {
  border: #bdbdbd solid 2px;
  background-color: #bdbdbd;
  color: rgb(0, 0, 0);
  transition: 0.5s;
}
.mx {
  margin-left: 9rem;
  margin-right: 9rem;
}
</style>