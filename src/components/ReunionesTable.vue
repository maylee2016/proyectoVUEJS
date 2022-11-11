<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
      <th scope="col">Motivo</th>
      <th scope="col">Estado</th>
      <th scope="col">Usuario reg.</th>
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

      reuniones: null,
      loading: true,
      errored: false
    }
  },
  methods: {
    irA(opcion, reunion_id) {
      if (opcion === 'editar') {
        this.$router.push({ name: 'editarReunionView', params: { id: reunion_id } });
      } else {
        if (confirm("Esta seguro de eliminar la reunion")) {
          axios({
            method: "delete",
            url: process.env.VUE_APP_RUTA_API+"/reuniones/" + reunion_id
          })
              .then(response => {
                this.getReuniones();
                console.log(response);
              })
              .catch(e => console.log(e));
        }
      }
    },

    getReuniones() {
      axios({
        method: "get",
        url: process.env.VUE_APP_RUTA_API+"/reuniones"
      })
          .then(response => {
            this.reuniones = response.data;
            console.log(response);
          })
          .catch(e => console.log(e));
    },
  },
  computed: {},
  mounted() {
    axios.get('http://localhost:4444/reuniones')
        .then(response => {
          this.reuniones = response.data
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