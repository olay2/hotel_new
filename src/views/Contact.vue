<template>
  <v-app>
    <v-main>
      <v-row class="header">
        <v-col lg="12"><h1>THE RESTAURANT</h1></v-col>
      </v-row>
      <v-row class="row1">
        <v-col cols="12" md="6" lg="8">
          <h2>Getting there</h2>
          <hr />
          <p>Thakhek is located 375 km from Vientiane.</p>
          <p>
            By Car: Drive along Road 13 passing Pakgum and Paksan provinces.
            Alternatively it is possible to travel via Nakhon Panom.
          </p>
          <p>
            By Bus and VIP Bus: Departure from Southern Bus Terminal in
            Vientiane. Duration: 5/6 hours.
          </p>
          <p>
            The hotel is located right in the city center , close to the Mekong.
          </p>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <h2>Contact Details</h2>
          <hr />
          <p>Keolanee Hotel Thakhek</p>
          <p>
            <v-icon>mdi-map-marker</v-icon>79, Unit 4 – Anou Road, Ban Thakhek
            Kang, Thakhek District, Khammouane Province, Lao PDR
          </p>
          <p><v-icon>mdi-phone</v-icon>(+856)2052497424</p>
          <p>
            <a target="_blank" href="https://wa.me/85602052497424"
              ><v-icon>mdi-whatsapp</v-icon>Whatsapp</a
            >
          </p>
          <p><v-icon>mdi-email</v-icon>KeolaneeHotel@gmail.com</p>
        </v-col>
      </v-row>
      <v-row class="row2">
        <v-col class="col1" cols="12" md="12" lg="12">
          <h2>Get in Touch</h2>
          <hr />
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-form ref="form">
            <v-text-field
              v-model="contactInfo.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="contactInfo.email"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea label="Massage" v-model="contactInfo.massage">
            </v-textarea>
            <v-btn color="grey lighten-1" class="btn"
              ><v-icon>mdi-send</v-icon>Send</v-btn
            >
          </v-form>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3807.347086876044!2d104.80262703013523!3d17.39512309356921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7351ec7805686d20!2sInthira+Thakhek!5e0!3m2!1sfr!2s!4v1478169297154"
            width="600"
            height="450"
            frameborder="0"
            style="border: 0px; pointer-events: none"
            allowfullscreen=""
          ></iframe>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      contactInfo: {},
    };
  },
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
hr {
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
  border: solid 1px rgb(218, 110, 110);
  border-radius: 1rem;
  background-color: rgb(218, 110, 110);
  width: 12rem;
}
.row1 {
  margin-right: 5rem;
  margin-left: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.row1 p a {
  text-decoration: none;
  color: black;
}
.row2 {
  padding-right: 5rem;
  padding-left: 5rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  margin-bottom: 4rem;
  background-color: #f2f2f2;
}
.row2 .col1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>