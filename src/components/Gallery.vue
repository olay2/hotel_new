<template>
  <v-row class="row">
    <v-col class="col1 mt-6" lg="12"><h1>GALLERY</h1></v-col>
    <v-col class="col2" cols="12" md="6" lg="6">
      <v-row>
        <v-col class="col2_1">
          <v-carousel :show-arrows="true">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="col3" cols="12" md="6" lg="6">
      <v-row>
        <v-col class="d-flex" lg="6"><v-img class="img-hover" src="./../assets/Gallery/Gallery11.png" /></v-col>
        <v-col class="d-flex" lg="6"><v-img class="img-hover" src="./../assets/Gallery/Gallery12.png" /></v-col>
        <v-col class="d-flex" lg="6"><v-img class="img-hover" src="./../assets/Gallery/Gallery13.png" /></v-col>
        <v-col class="d-flex" lg="6"><v-img class="img-hover" src="./../assets/Gallery/Gallery14.png" /></v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "GalleryView",
  data() {
    return {
      items: [
        {
          src: require("./../assets/Gallery/Gallery1.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery2.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery3.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery4.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery5.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery6.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery7.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery8.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery9.png"),
        },
        {
          src: require("./../assets/Gallery/Gallery10.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: cursive;
  background-color: #f2f2f2;
}
.row {
  margin-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
}
.col1 {
  text-align: center;
  margin-bottom: 2rem;
}
.col2_1 {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.col3 {
  margin-top: 2rem;
}
.img-hover{
   border-radius: 5px;
}
.img-hover:hover {
  transform: scale(1.1);
  transition: 0.3s;
 }
</style>