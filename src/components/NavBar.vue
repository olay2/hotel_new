<template>
  <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <v-icon>mdi-menu</v-icon>
    </label>
    <label class="logo">Keolanee Hotel</label>
    <ul class="nav">
      <li><router-link tag="a" to="/">Home</router-link></li>
      <li><router-link tag="a" to="/Roompage">Room</router-link></li>
      <li><router-link tag="a" to="/RestaurantPage">Restaurant</router-link></li>
      <li><router-link tag="a" to="/Activities">Activities</router-link></li>
      <li><router-link tag="a" to="/Contact">Contact</router-link></li>
      <li><router-link tag="a" to="/Login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: cursive;
}
nav {
  z-index: 10000000000;
  background: #e0e0e0;
  height: 80px;
  width: 100%;
  box-shadow: #e0e0e0 0px 3px 20px;
  position: sticky;
  top: 0;
}
label.logo {
  color: #424242;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
nav ul {
  white-space: nowrap;
  float: right;
  max-width: 100%;
  margin-right: 3rem;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: #555555;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  /* text-transform: uppercase; */
}
a:hover {
  background: #424242;
  color: #ffffff;
  transition: 0.5s;
}
.checkbtn .v-icon {
  font-size: 30px;
  color: #424242;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 1100px) {
  label.logo {
    font-size: 25px;
    padding-left: 20px;
  }
  nav ul li a {
    font-size: 16px;
  }
  nav ul {
    margin-right: 5rem;
  }
}
@media (max-width: 952px) {
  nav ul {
    margin-right: 8rem;
  }
}
@media (max-width: 858px) {
  .checkbtn .v-icon {
    display: block;
  }
  ul {
    position: fixed;
    margin-right: 0;
    width: 100%;
    z-index: 100000000;
    height: 100vh;
    background: #e0e0e0;
    opacity: 0.9;
    top: 80px;
    right: -100%;
    text-align: center;
    transition: all 0.3s;
  }
  nav ul {
    margin-right: 0rem;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a:hover {
    color: #ffff;
  }
  #check:checked ~ ul {
    right: 0;
  }
}
</style>