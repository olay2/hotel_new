<template>
  <div class="row">
    <div class="col1">
      <img class="img-hover" src="./../assets/Recommended/Recommended1.png" />
      <h2>Middle of downtown</h2>
      <p>
        Located in the very centre of Thakhek, close to the River Mekong and
        local markets.
      </p>
    </div>
    <div class="col2">
      <img class="img-hover" src="./../assets/Recommended/Recommended2.png" />
      <h2>Great Restaurant</h2>
      <p>Nice and modern restaurant to enjoy your stay in the city</p>
    </div>
    <div class="col3">
      <img class="img-hover" src="./../assets/Recommended/Recommended3.png" />
      <h2>Middle of downtown</h2>
      <p>
        Traditional food like chicken lab, fresh spring rolls or fish in banana
        leaves are our specialties
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendedView",
};
</script>

<style scoped>
* {
  color: aliceblue;
  font-family: cursive;
}
.row {
  background-image: url(./../assets/Recommended/background3.jpg);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  display: flex;
  flex-direction: row;
  padding-left: 200px;
  padding-right: 200px;
}
.col1,
.col2,
.col3 {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 10px;
  flex: 1;
}
.col1 img,
.col2 img,
.col3 img {
  border-radius: 5rem;
  margin-bottom: 2rem;
}
.img-hover:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
.col1 h2,
.col2 h2,
.col3 h2 {
  margin-bottom: 1rem;
}
.col1 p,
.col2 p,
.col3 p {
  padding: 1rem;
}
</style>