<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">Usuario</th>
      <th scope="col">Consumo</th>
      <th scope="col">Total a pagar</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(reunion, index) in reuniones">
      <th scope="row">{{index+1}}</th>
      <td>{{reunion.fecha_reunion}}</td>
      <td>{{reunion.motivo}}</td>
      <td>{{reunion.estado}}</td>
      <td>{{reunion.user_id}}</td>
      <td><app-acciones @onAccion="irA($event, reunion.id)"></app-acciones></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import AppAcciones from '@/components/AppAcciones.vue';


export default {
  name: 'appTable',
  data() {
    return {

      consumos: null,
      loading: true,
      errored: false
    }
  },
  methods: {
    irA(opcion, consumo_id) {
      if (opcion === 'editar') {
        this.$router.push({ name: 'editarConsumoView', params: { id: consumo_id } });
      } else {
        if (confirm("Esta seguro de eliminar el consumo")) {
          axios({
            method: "delete",
            url: "http://localhost:4444/consumos/" + consumo_id
            // url: process.env.VUE_APP_RUTA_API+"/consumos/" + consumo_id
          })
              .then(response => {
                this.getConsumos();
                console.log(response);
              })
              .catch(e => console.log(e));
        }
      }
    },

    getConsumos() {
      axios({
        method: "get", 
        url: "http://localhost:4444/consumos"
        // url: process.env.VUE_APP_RUTA_API+"/consumos"
      })
          .then(response => {
            this.consumos = response.data;
            console.log(response);
          })
          .catch(e => console.log(e));
    },
  },
  computed: {},
  mounted() {
    axios.get('http://localhost:4444/consumos')
        .then(response => {
          this.consumos = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  },
  components: {
    AppAcciones
  }
}
</script>

<style>

</style>