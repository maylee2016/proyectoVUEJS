<template>
  <div class="container">
    <div class="abs-center">

      <form action="" @submit.prevent="guardar()">
        <div class="mb-3">
          <label class="form-label">Fecha Reunion</label>
          <input type="text" v-model="reunion.fecha_reunion" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Motivo</label>
          <input type="text" v-model="reunion.motivo" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Estado</label>
          <input type="text" v-model="reunion.estado" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">User ID</label>
          <input type="text" v-model="reunion.user_id" class="form-control">
        </div>
        
        <button type="submit" class="btn btn-primary m-2">Guardar</button>
        <button class="btn btn-light m-2">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editarReunionView',
  data() {
    return {
      reunion: {
        id:null,
        fecha_reunion: null,
        motivo: null,
        estado: null,
        user_id: null
      }
    }
  },
  methods: {
    getReunion() {
      axios({
        method: "get",
        url: process.env.VUE_APP_RUTA_API + "/reuniones/" + this.$route.params.id
      })
          .then(response => {
            this.reunion = response.data;
            console.log(response);
          })
          .catch(e => console.log(e));
    },
    guardar() {
      axios({
        method: "patch",
        url: process.env.VUE_APP_RUTA_API + "/reuniones/" + this.$route.params.id,
        data: this.reunion
      })
          .then(response => {
            this.$store.state.mensaje = {
              texto: "La reunion se edito exitosamente",
              tipo: "exito"
            };
            this.$store.dispatch('addMensajeAction');
            this.$router.push({name: 'reuniones'});
          })
          .catch(e => console.log(e));
    }
  },
  computed: {},
  mounted() {
    this.getReunion()
  },
  components: {}
}
</script>

<style scoped>
form {
  max-width: 400px;
}
</style>