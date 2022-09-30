<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-row class="header">
        <v-col lg="12"><h1>STANDARD ROOM</h1></v-col>
      </v-row>
      <v-row class="content">
        <v-col class="col_L" cols="12" md="8" lg="8">
          <v-row>
            <v-col cols="12" md="12" lg="12"
              ><h4 class="text-center">Little description</h4></v-col
            >
            <v-col cols="12" md="12" lg="12"
              ><p>
                Make yourself comfortable in any of our serene guest rooms and
                spacious suites. Floor-to-ceiling soundproof windows afford
                striking views of the airport, the cityscape, or the Canadian
                Rockies. Work via wireless High Speed Internet Access at a large
                desk, then watch a 55-inch flat screen TV with a drink from a
                mini-refrigerator. Choose one king-size or two queen Heavenly®
                Beds for a revitalizing night’s sleep, and refresh with the
                Heavenly® Bath. Upgrade your stay with access to the Hotel Luxe
                Club Lounge, an exclusive facility with elevated benefits and
                amenities.
              </p></v-col
            >
          </v-row>
          <hr class="my-5 mx-10" />
          <!-- ຮູບສະແດງ -->
          <v-row>
            <v-col cols="12" md="12" lg="12"
              ><h4 class="text-center">Gallery of Elegance</h4></v-col
            >
            <v-col class="d-flex child-flex" cols="4">
              <v-img src="../../assets/viewDetails/Standard1.png" />
            </v-col>
            <v-col class="d-flex child-flex" cols="4">
              <v-img src="../../assets/viewDetails/Standard2.png" />
            </v-col>
            <v-col class="d-flex child-flex" cols="4">
              <v-img src="../../assets/viewDetails/Standard3.png" />
            </v-col>
            <v-col class="d-flex child-flex" cols="4">
              <v-img src="../../assets/viewDetails/Standard4.png" />
            </v-col>
            <v-col class="d-flex child-flex" cols="4">
              <v-img src="../../assets/viewDetails/Standard5.png" />
            </v-col>
            <v-col class="d-flex child-flex" cols="4">
              <v-img src="../../assets/viewDetails/Standard6.png" />
            </v-col>
          </v-row>
          <hr class="my-10 mx-10" />
          <!-- ແທບສະແດງລາຍລະອຽດ -->
          <v-row>
            <v-col cols="12">
              <v-tabs color="#212121" v-model="tabs">
                <v-tab> <p>Overview</p> </v-tab>
                <v-tab> <p>Features</p> </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
          <!-- ຄອນເທັນແທບ -->
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col lg="6">
                      <p>
                        <strong>Room Size:</strong> 41 – 45 sq m / 441 – 484 sq
                        ft
                      </p>
                      <p><strong>RegularOccupancy:</strong> Up to 3 adults</p>
                      <p><strong>View:</strong> Panama Sea view</p>
                      <p><strong>Smoking:</strong> Yes</p>
                    </v-col>
                    <v-col lg="6">
                      <p><strong>Bed Size:</strong> King or Regular</p>
                      <p>
                        <strong>Location:</strong> 2/F – 6/F (Original Building)
                      </p>
                      <p><strong>Bed:</strong>250 Thread Count Sheets</p>
                      <p><strong>Room Service:</strong> Yes</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col lg="6">
                      <p><v-icon>mdi-check-bold</v-icon> Indoor living room</p>
                      <p>
                        <v-icon>mdi-check-bold</v-icon> Open garden with a swing
                      </p>
                      <p><v-icon>mdi-check-bold</v-icon> Bonfire Facility</p>
                      <p><v-icon>mdi-check-bold</v-icon> Working Table</p>
                    </v-col>
                    <v-col lg="6">
                      <p><v-icon>mdi-check-bold</v-icon> Wooden veranda</p>
                      <p><v-icon>mdi-check-bold</v-icon> Wooden veranda</p>
                      <p><v-icon>mdi-check-bold</v-icon> Hammock</p>
                      <p><v-icon>mdi-check-bold</v-icon> A/C (Surfer Dude)</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <hr class="mb-5 mx-10" />
          <!-- ແທບສະແດງເຄື່ອງໃຊ້ທີ່ມີໃນຫ້ອງ -->
          <v-row class="text-center">
            <v-col lg="12"><h3 class="text-center mb-5">Amenities</h3></v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-wifi</v-icon><br />wifi</p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-television</v-icon><br />television</p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p>
                <v-icon>mdi-newspaper-variant-outline</v-icon><br />newspaper
              </p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-bathtub</v-icon><br />bathtub</p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-food</v-icon><br />Room Breakfast</p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-bed</v-icon><br />spa</p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-phone</v-icon><br />Wake Up Call</p>
            </v-col>
            <v-col cols="4" md="3" lg="3">
              <p><v-icon>mdi-glass-mug</v-icon><br />Mini Bar</p>
            </v-col>
          </v-row>
          <hr class="my-10 mx-10" />
          <!-- ຫ້ອງອື່ນໆ -->
          <v-row>
            <v-col lg="12"><h2 class="text-center">OUR ROOMS</h2></v-col>
          </v-row>
          <v-row class="card">
            <v-col lg="4">
              <v-card class="mx-auto my-5" max-width="350">
                <v-img
                  class="img-hover"
                  height="250"
                  src="../../assets/ourRoom/duluxeRoom.png"
                ></v-img>

                <v-card-actions>
                  <v-btn color="grey lighten-1" class="btn"
                    ><router-link to="/viewDetails1">
                      View Details<v-icon
                        >mdi-arrow-right-thick</v-icon
                      ></router-link
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
                  src="../../assets/ourRoom/premierRoom.png"
                ></v-img>

                <v-card-actions>
                  <v-btn color="grey lighten-1" class="btn"
                    ><router-link to="/viewDetails2">
                      View Details<v-icon
                        >mdi-arrow-right-thick</v-icon
                      ></router-link
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
                  src="../../assets/ourRoom/suiteRoom.png"
                ></v-img>
                <v-card-actions>
                  <v-btn color="grey lighten-1" class="btn"
                    ><router-link to="/viewDetails3">
                      View Details<v-icon
                        >mdi-arrow-right-thick</v-icon
                      ></router-link
                    ></v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col_R" cols="12" md="4" lg="4">
          <v-card class="card_form">
            <h3 class="text-center">Register Your Account</h3>

            <v-form
              class="form"
              v-for="(post, index) in posts.slice(0, 5)"
              :key="index"
            >
              <v-text-field
                label="Arrival Date"
                dense
                color="#212121"
                class="mt-16"
                type="date"
              />
              <v-text-field
                label="Departure Date"
                dense
                color="#212121"
                type="date"
              />
              <v-select :items="items" label="Room" color="#212121"></v-select>
              <v-select
                :items="items1"
                label="Adult"
                color="#212121"
              ></v-select>
              <v-select
                :items="items2"
                label="Children"
                color="#212121"
              ></v-select>
              <v-text-field label="Tel" dense color="#212121" />
              <v-btn color="blue" class="my-5 mr-4 align-self-center">
                Reserve
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <FooTer />
  </v-app>
</template>



<style scoped>
* {
  font-family: cursive;
}
.header {
  background-image: url(../../assets/bgHeader.png);
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.img-hover:hover {
  transform: scale(1.1);
  transition: 0.3s;
  border-radius: 5px;
  z-index: 1;
}
.btn a {
  color: black;
  text-decoration: none;
}
.btn a:hover {
  color: rgb(255, 255, 255);
  transition: 0.3s;
}
.content {
  margin: 5rem;
}
.col_L {
  padding-right: 2rem;
  padding-left: 2rem;
}
.card_form {
  padding: 4rem;
}
</style>