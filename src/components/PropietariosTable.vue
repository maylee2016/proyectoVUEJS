<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellido paterno</th>
      <th scope="col">Apellido materno</th>
      <th scope="col">Celular</th>
      <th scope="col">Dirección</th>
      <th scope="col">Opciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(propietario, index) in propietarios">
      <th scope="row">{{index+1}}</th>
      <td>{{propietario.nombres}}</td>
      <td>{{propietario.paterno}}</td>
      <td>{{propietario.materno}}</td>
      <td>{{propietario.celular}}</td>
      <td>{{propietario.domicilio}}</td>
      <td><app-acciones @onAccion="irA($event, propietario.id)"></app-acciones>
      </td>
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

      propietarios: null,
      loading: true,
      errored: false
    }
  },
  methods: {
    irA(opcion, propietario_id) {
      if (opcion === 'editar') {
        this.$router.push({ name: 'editarPropietarioView', params: { id: propietario_id } });
      } else {
        if (confirm("Esta seguro de eliminar propietario")) {
          axios({
            method: "delete",
            url: "http://localhost:4444/propietarios/" + propietario_id
            // url: process.env.VUE_APP_RUTA_API+"/propietarios/" + propietario_id
          })
              .then(response => {
                this.getPropietarios();
                console.log(response);
              })
              .catch(e => console.log(e));
        }
      }
    },
    getPropietarios() {
      axios({
        method: "get",
        url: "http://192.168.104.211:85/cobros/propietarios/"
        // url: process.env.VUE_APP_RUTA_API+"/propietarios"
      })
          .then(response => {
            this.propietarios = response.data;
            console.log(response);
          })
          .catch(e => console.log(e));
    },
  },
  computed: {},
  mounted() {
    // axios.get(process.env.VUE_APP_RUTA_API+'/propietarios')
    axios.get("http://192.168.104.211:85/cobros/propietarios/")
        .then(response => {
          this.propietarios = response.data
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