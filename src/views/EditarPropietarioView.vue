<template>
  <div class="container">
    <div class="abs-center">
      <form action="" @submit.prevent="guardar()">
        <!-- <div class="mb-3">
          <label class="form-label">Avatar</label>
          <input type="text" v-model="propietario.avatar" class="form-control">
        </div> -->
        <h1>Editar Usuario</h1>
        <div class="mb-3">
          <label class="form-label">Nombres</label>
          <input type="text" v-model="propietario.nombres" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Apellido paterno</label>
          <input type="text" v-model="propietario.paterno" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Apellido materno</label>
          <input type="text" v-model="propietario.materno" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Celular</label>
          <input type="text" v-model="propietario.celular" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Dirección</label>
          <!-- <input type="text" v-model="propietario.domicilio" class="form-control"> -->
        
        <!-- <div class="mb-3">
          <label class="form-label">Genero</label>
          <input type="text" v-model="propietario.genero" class="form-control">
        </div> -->
        <textarea style="width: 100%" v-model="propietario.domicilio"></textarea>
        </div>
        <button type="submit" class="btn btn-primary m-2">Guardar</button>
        <button class="btn btn-light m-2">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editarPropietarioView',
  data() {
    return {
      propietario: {
        id:null,
        user_id: 1,
        avatar: null,
        nombres: null,
        paterno: null,
        materno: null,
        nro_documento: null,
        expedido: null,
        genero: null,
        telefono: null,
        celular: null,
        domicilio: null,
        estado: "a"
      }
    }
  },
  methods: {
    getPropietario() {
      axios({
        method: "get", 
        url: "http://localhost:4444/propietarios/" + this.$route.params.id
        // url: process.env.VUE_APP_RUTA_API + "/propietarios/" + this.$route.params.id
      })
          .then(response => {
            this.propietario = response.data;
            console.log(response);
          })
          .catch(e => console.log(e));
    },
    guardar() {
      axios({
        method: "patch",
        url: "http://localhost:4444/propietarios/" + this.$route.params.id,
        // url: process.env.VUE_APP_RUTA_API + "/propietarios/" + this.$route.params.id,
        data: this.propietario
      })
          .then(response => {
            this.$store.state.mensaje = {
              texto: "El propietario se edito exitosamene",
              tipo: "exito"
            };
            this.$store.dispatch('addMensajeAction');
            this.$router.push({name: 'propietarios'});
          })
          .catch(e => console.log(e));
    }
  },
  computed: {},
  mounted() {
    this.getPropietario()
  },
  components: {}
}
</script>

<style scoped>
form {
  max-width: 400px;
}
</style>