<script>
import axios from 'axios'
let API_URL = `https://rickandmortyapi.com/api/character`
export default {
  data() {
    return {
      info: [],
      personajes: [],
      cont:2
    }
  },
  mounted() {
    axios.get(API_URL)
      .then((response) => {
        this.info = response.data.info;
        this.personajes = response.data.results;
      })
  },
  methods: {
    pag(num) {
      API_URL='https://rickandmortyapi.com/api/character/?page='+num
      console.log(API_URL)
      axios.get(API_URL)
      .then((response) => {
        console.log(response.config)
        this.info = response.data.info;
        this.personajes = response.data.results;
      })
      this.cont++
    },
    buscador(buscar) {
      API_URL='https://rickandmortyapi.com/api/character/?page='+buscar
      console.log(API_URL)
      axios.get(API_URL)
      .then((response) => {
        console.log(response.config)
        this.info = response.data.info;
        this.personajes = response.data.results;
      })
      this.cont++
    }
  },
}
</script>

<template>
  
  <div>
    <div class="flow-root justify-center mt-5 bg-green-500 shadow-lg h-90 w-1/2 py-5 items-center m-auto rounded-lg">
      <div class="border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 text-center">
        <h2>Hay {{ info.count }} personajes en el programa de Rick & Morty</h2>
      </div>
      <div class="border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 text-center">
        <button @click="pag(cont)">página {{ cont }}</button>
      </div>
      <div class="border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 text-center">
        <h1>
          Aquí va el buscador
        </h1>
      </div>
    </div>
    <div class="flex justify-center mt-5 bg-green-500 shadow-lg h-90 w-1/2 py-5 items-center m-auto rounded-lg">
    <ul>
    <li v-for="p in personajes" class="border-double border-4 rounded-lg border-current  mb-6 ml-6 mr-6">
        <div class="text-center mb-6 ml-6 mr-6">
          <img v-bind:src=" p.image " alt="Personajes_Rick_Morty" width="200" height="100" class="my-5">
        {{ p.name }} <br>
        id:{{ p.id }} <br>
        Especie: {{ p.species }}<br>
        </div>
    </li>
  </ul>
  </div>
  </div>
</template>