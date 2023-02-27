<template>
  <div class="container">
    <div>
      <center>
      <v-img 
        src="http://fiddlersgreensandiego.com/fidbutn2.jpg"
        max-height="250"
        max-width="150"
        position="center"
      ></v-img>
      </center>
      <h2 class="subtitle">Fiddler's Green Restaurant</h2>
      <div class="links">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/events">Book an Event</NuxtLink>
        <v-btn href="/menu">Menu</v-btn>
        <NuxtLink to="/reservations">Reservations</NuxtLink>
        <NuxtLink to="/team">Our Team</NuxtLink>
      </div>
      <br><br>
      <v-btn href="/createOrder"></v-btn>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.subtitle {
  font-family:'Times New Roman', Times, serif;
  -webkit-text-stroke: 3px darkgreen;
  font-weight: 300;
  font-size: 100px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
