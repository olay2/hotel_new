<template>
  <v-container class="mt-5 mb-15">
    <v-row justify="center">
      <v-col lg="4">
        <v-card class="mx-auto my-5" max-width="350">
          <v-img
            class="img-hover"
            height="250"
            src="./../assets/ourRoom/duluxeRoom.png"
          ></v-img>

          <v-card-title>DELUXE ROOM</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Bed</strong>&nbsp;1 Double or 1 Twin
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Max</strong>&nbsp;2 People
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Room Size</strong>&nbsp;36 sqm
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Air Conditioning</strong>&nbsp;Yes
            </p>
            <v-row>
              <v-col lg="6" class="text-foot-card">Start From</v-col>
              <v-col lg="6" class="text-foot-card2">$68.00 / Night</v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="grey lighten-1" class="btn"
              ><router-link to="/viewDetails1">
                View Details<v-icon>mdi-arrow-right-thick</v-icon></router-link
              ></v-btn
            >
          </v-card-actions>
        </v-card></v-col
      >
      <v-col lg="4">
        <v-card class="mx-auto my-5" max-width="350">
          <v-img
            class="img-hover"
            height="250"
            src="./../assets/ourRoom/premierRoom.png"
          ></v-img>

          <v-card-title>PREMIER ROOM</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Bed</strong>&nbsp;1 Double or 1 Twin
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Max</strong>&nbsp;2 People
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Room Size</strong>&nbsp;60 sqm
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Air Conditioning</strong>&nbsp;Yes
            </p>
            <v-row>
              <v-col lg="6" class="text-foot-card">Start From</v-col>
              <v-col lg="6" class="text-foot-card2">$136.00 / Night</v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="grey lighten-1" class="btn"
              ><router-link to="/viewDetails2">
                View Details<v-icon>mdi-arrow-right-thick</v-icon></router-link
              ></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card class="mx-auto my-5" max-width="350">
          <v-img
            class="img-hover"
            height="250"
            src="./../assets/ourRoom/suiteRoom.png"
          ></v-img>

          <v-card-title>SUITE</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Bed</strong>&nbsp;1 King Bed
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Max</strong>&nbsp;2 People
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Room Size</strong>&nbsp;96 sqm
            </p>
            <p>
              <v-icon>mdi-checkbox-marked-outline</v-icon
              ><strong>&nbsp;&nbsp;&nbsp;Air Conditioning</strong>&nbsp;Yes
            </p>
            <v-row>
              <v-col lg="6" class="text-foot-card">Start From</v-col>
              <v-col lg="6" class="text-foot-card2">$197.00 / Night</v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="grey lighten-1" class="btn"
              ><router-link to="/viewDetails3">
                View Details<v-icon>mdi-arrow-right-thick</v-icon></router-link
              ></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RoomView",
};
</script>

<style lang="scss" scoped>
* {
  font-family: cursive;
  color: black;
}
.img-hover:hover {
  transform: scale(1.1);
  transition: 0.3s;
  border-radius: 5px;
}
.v-subheader {
  font-size: 32px;
  font-weight: bold;
  color: black;
}
.text-foot-card {
  font-size: 20px;
}
.text-foot-card2 {
  font-size: 17px;
  color: #4fc3f7;
  text-align: left;
  padding-left: 0%;
}
.btn a {
  color: black;
  text-decoration: none;
}
.btn a:hover {
  color: rgb(255, 255, 255);
  transition: 0.5s;
}
</style>