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
    <tr v-for="(reuniones, index) in reuniones">
      <th scope="row">{{index+1}}</th>
      <td>{{reuniones.fecha_reunion}}</td>
      <td>{{reuniones.motivo}}</td>
      <td>{{reuniones.estado}}</td>
      <td>{{reuniones.user_id}}</td>
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

      reuniones: null,
      loading: true,
      errored: false
    }
  },
  methods: {},
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
  components: {}
}
</script>

<style>

</style>