<script>
import axios from 'axios'
let API_URL = `https://rickandmortyapi.com/api/character`
export default {
  data() {
    return {
      info: [],
      personajes: [],
      cont: 2,
      siguiente:null,
      anterior:null,
      pagina:1
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
      API_URL = 'https://rickandmortyapi.com/api/character/?page=' + num
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
      API_URL = 'https://rickandmortyapi.com/api/character/?name=' + buscar
      axios.get(API_URL)
        .then((response) => {
          this.info = response.data.info;
          this.personajes = response.data.results;
        })
    },
        navpag(num){
          API_URL='https://rickandmortyapi.com/api/character/?page='+this.pagina
          //console.log(API_URL)
          axios.get(API_URL)
          .then((response) => {
            //console.log(response.config)
            this.info= response.data.info;
            //console.log(response.data.info.next)
            this.personajes = response.data.results;
          })
          
        }
  },
}
</script>

<template>
  <div>
    <div class="flow-root justify-center mt-5 bg-green-500 shadow-lg h-90 w-3/4 py-5 items-center m-auto rounded-lg">
      <div class="rounded-lg border-current mb-6 ml-6 mr-6 text-center rounded-lg px-5 my-2 text-white">
        <h2>Hay {{ info.count }} personajes en el programa de Rick & Morty</h2>
      </div>
      
      <div class="rounded-lg border-current mb-6 ml-6 mr-6 text-center space-x-9">
        <input type="text" v-model="buscar" placeholder="Escribir Nombre"  class="border border-white rounded-lg my-2">
        <button @click="buscador(buscar)" class="boton bg-green-800 text-orange-800 rounded-lg px-5 my-2 text-white"><b>Buscar</b></button>
      </div>
      <div class="rounded-lg border-current mb-6 ml-6 mr-6 text-center space-x-52">
        <button class="boton bg-green-800 rounded-lg px-5 my-2 text-white" v-if="pagina!==1" @click="$event => navpag(pagina--)" > Anterior</button>
        <button class="boton bg-green-800 rounded-lg px-5 my-2 text-white" v-if="pagina!==this.info.pages" @click="$event => navpag(pagina++)" > Siguiente</button>
      </div>
    </div>

    <!-- Imprime los personajes de la página -->
    <div class="flex justify-center mt-5 bg-green-500 shadow-lg h-90 w-3/4 py-5 items-center m-auto rounded-lg">
      <ul>
        <li v-for="p in personajes" class="border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 mt-6 border-white">
          <div class="flex mb-6 ml-6 mr-6 text-white">
            <div>
              <img v-bind:src="p.image" alt="Personajes_Rick_Morty" width="200" height="100" class="my-5">
            </div>
            <div class="my-5 mx-5 text-center items-center space-x-10">
              <h1 class="text-xl font-mono">
              {{ p.name }}
              </h1>
              <ol class="list-disc">
                <li>
                  {{ p.status }} - {{ p.species }} - {{ p.species }}<br>
                </li>
               <li>
                Origen: {{ p.origin.name }}
               </li> 
               <li>
                Locación: {{ p.location.name }}
               </li> 
               <li>
                Creado: {{ p.created }}
               </li> 
              </ol>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>