<template>
  <v-carousel :show-arrows="true">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "WelComeView",
  data() {
    return {
      items: [
        {
          src: require("./../assets/Slide/Slide1.png"),
        },
        {
          src: require("./../assets/Slide/Slide2.png"),
        },
        {
          src: require("./../assets/Slide/Slide3.png"),
        },
        {
          src: require("./../assets/Slide/Slide4.png"),
        },
        {
          src: require("./../assets/Slide/Slide5.png"),
        },
      ],
    };
  },
};
</script>

<style>
    
</style>