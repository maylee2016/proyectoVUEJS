<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tipo asistencia</th>
      <th scope="col">Motivo permiso</th>
      <th scope="col">estado</th>
      <th scope="col">inmueble id</th>
      <th scope="col">Reunion id</th>
      <th scope="col">Opciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(asistencia, index) in asistencias">
      <th scope="row">{{index+1}}</th>
      <td>{{asistencia.tipo_asistencia}}</td>
      <td>{{asistencia.motivo_permiso}}</td>
      <td>{{asistencia.estado}}</td>
      <td>{{asistencia.inmueble_id}}</td>
      <td>{{asistencia.reunion_id}}</td>
      <td><button class="btn-primary">ver</button><button class="btn-success">editar</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'appTable',
  data() {
    return {

      asistencias: null,
      loading: true,
      errored: false
    }
  },
  methods: {},
  computed: {},
  mounted() {
    axios.get('http://localhost:4444/asistencias')
        .then(response => {
          this.asistencias = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  },
  components: {}
}
</script>

<style>

</style>