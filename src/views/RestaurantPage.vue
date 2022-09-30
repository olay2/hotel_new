<template>
  <v-app>
    <v-main>
      <v-row class="header">
        <v-col lg="12"><h1>THE RESTAURANT</h1></v-col>
      </v-row>

      <v-row class="row">
        <v-col class="col1" cols="12" md="6" lg="6">
          <v-img src="./../assets/restaurant-night.png" class="rounded img" />
        </v-col>
        <v-col class="col2" cols="12" md="6" lg="6">
          <h2>RestaurantPage</h2>
          <hr />
          <p>
            The Khop Chai Deu Thakhek restaurant: Think traditional Lao dishes
            like Chicken laab, fresh spring rolls, as well as yellow curry or
            fish in banana leaves, which are the specialty of Keolanee Thakhek.
          </p>
          <p>
            Our traditional dishes include: A Lao Traditional Set Menu to
            discover the iconic local dishes , Appetizers such as Spring rolls,
            Chicken wings, Salads and Soups, Laab (minced meat), Whole fish,
            Spicy salad, Tom Yum Soup, curries…
          </p>
          <p>
            If you are looking for comfort food, choose amongst our Steaks,
            Burgers, Pizza, Pasta and Home made desserts.
          </p>
          <v-row class="row-menu">
            <v-col cols="12" md="6" lg="4">
              <p>Our restaurant menu :</p>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <div>
                <v-col lg="12"
                  ><a
                    target="black"
                    href="https://drive.google.com/file/d/1U_3XY3biLb57VPiG8wHunomsJxKo-W7Y/view?usp=sharing"
                    ><img src="./../assets/menu-icon1.png" alt="" /></a
                ></v-col>
                <v-col lg="12"><p>Food Menu</p></v-col>
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <div>
                <v-col lg="12"
                  ><a
                    target="black"
                    href="https://drive.google.com/file/d/17lCSWoYfDvN2uvC3aBOR_TjVDpLe7QgY/view?usp=sharing"
                    ><img src="./../assets/menu-icon1.png" alt="" /></a
                ></v-col>
                <v-col lg="12"><p>Drinks Menu</p></v-col>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "RestaurantView",
  components: {  },
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
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.row {
  margin-top: 3rem;
  padding-top: 2rem;
  padding-right: 5rem;
  padding-left: 7rem;
}
.img {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.col2 {
  padding-left: 3rem;
}
.col2 hr {
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  border: solid 1px rgb(218, 110, 110);
  border-radius: 1rem;
  background-color: rgb(218, 110, 110);
  width: 12rem;
}
.row-menu {
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>