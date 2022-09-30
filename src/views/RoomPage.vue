<template>
  <v-app>
    <v-main class="card">
      <v-row class="header">
        <v-col lg="12"><h1>OUR ROOMS</h1></v-col>
      </v-row>
      <v-row>
        <RoomView />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import RoomView from '@/components/RoomView.vue';
export default {
  name: "RoomPage",
  components: { RoomView },
};
</script>

<style scoped>
* {
  font-family: cursive;
}
.header {
  background-image: url(./../assets/bgHeader.png);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.card {
  background-image: url(./../assets/Slide/Slide2.png);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
</style>