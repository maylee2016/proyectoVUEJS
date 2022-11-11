<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellido paterno</th>
      <th scope="col">Apellido materno</th>
      <th scope="col">Genero</th>
      <th scope="col">Domicilio</th>
      <th scope="col">Opciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(propietario, index) in propietarios">
      <th scope="row">{{index+1}}</th>
      <td>{{propietario.nombres}}</td>
      <td>{{propietario.paterno}}</td>
      <td>{{propietario.materno}}</td>
      <td>{{propietario.genero}}</td>
      <td>{{propietario.domicilio}}</td>
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

      propietarios: null,
      loading: true,
      errored: false
    }
  },
  methods: {},
  computed: {},
  mounted() {
    axios.get('http://localhost:4444/propietarios')
        .then(response => {
          this.propietarios = response.data
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