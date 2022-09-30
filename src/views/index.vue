<template>
  <v-app>
    <v-main>
      <Welcome />
      <KeolaneeHotel />
        <v-subheader class="justify-center">ROOMS</v-subheader>
      <RoomView />
      <Recommended />
      <Restaurant />
      <Gallery />
    </v-main>
  </v-app>
</template>

<script>
import Welcome from "@/components/welcome.vue";
import KeolaneeHotel from "@/components/KeolaneeHotel.vue";
import RoomView from "@/components/RoomView.vue";
import Recommended from "@/components/Recommended.vue";
import Restaurant from "@/components/Restaurant.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    Welcome,
    KeolaneeHotel,
    RoomView,
    Recommended,
    Restaurant,
    Gallery,
  },
};
</script>
<style scoped>

.v-subheader {
  font-size: 32px;
  font-weight: bold;
  color: black;
}

</style>
