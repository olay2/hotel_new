<template>
  <v-row class="row">
    <v-col class="col1" cols="12" md="6" lg="6">
      <v-img src="./../assets/restaurant-night.png" class="rounded img" />
    </v-col>
    <v-col class="col2" cols="12" md="6" lg="6">
      <h1>THE RESTAURANT</h1>
      <p>
        The Khop Chai Deu Thakhek restaurant: Think traditional Lao dishes like
        Chicken laab, fresh spring rolls, as well as yellow curry or fish in
        banana leaves, which are the specialty of Keolanee Thakhek. We also
        serve a wide range of comforting international food. A perfect
        reflection of our iconic Khop Chai Deu restaurant in Vientiane.
      </p>
      <p class=" mb-8">Enjoy our Draught beer happy hour every day from 4.00pm to 7.00pm.</p>
      <a href="/RestaurantPage" class="btn my-12"> Read More </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RestauranView",
};
</script>

<style scoped>
* {
  font-family: cursive;
  background-color: #f2f2f2;
}
.row {
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-top: 2rem;
  padding-right: 5rem;
  padding-left: 7rem;
  padding-bottom: 2rem;
}
.img {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.col2 {
  padding-left: 3rem;
}
.col2 h1 {
  margin-bottom: 1.5rem;
}
.btn {
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #6d6d6d9d;
  text-decoration: none;
  color: #000000;
}
.btn:hover {
  background-color: #212121;
  color: white;
  transition: 0.5s;
}
</style>