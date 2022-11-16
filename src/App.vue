<template>
  <center>

    <h1>Tarea #2 Carlos Luis Parraga Vera</h1>
    <h2>Automatizacion de Procesos</h2>
    <br>
  </center>

  <center>
    <div style="width:500px;">
      <div class="card" v-for="item in info.rooms">
        <img v-bind:src="item.Foto" class="card-img-top" :alt="item.Titulo" />
        <div class="card-body">
          <h5 class="card-title">{{ item.Titulo }} de {{ item.ApellidosNombres }}</h5>
          <h5 class="card-title"></h5>
          <p class="card-text">{{ item.Descripcion }}</p>
          <p class="card-text">{{ item.Direccion }}</p>
          <p class="card-text">${{ item.Precio }}</p>
        </div>
      </div>
    </div>
  </center>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  components: {

  }, data() {
    return {
      info: null,
      fulldatetime: ''
    }
  },
  methods: {
    printFullDate: function () {
      return new Date();
    }
  },
  mounted() {
    this.fulldatetime = this.printFullDate();
  },
  async created() {
    /* fetch("http://200.24.152.69:8095/api/room_rental/v0/room_rental/ConsultaHabitaciones")
      .then(response => response.json())
      .then(data => (this.info = data)); */
    try {
      await axios.get("http://200.24.152.69:8095/api/room_rental/v0/room_rental/ConsultaHabitaciones")
        .then(response => (this.info = response.data));
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>
#app {

  color: #2c3e50;

}
</style>
