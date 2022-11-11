<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
  <propietarios-table title="Lista de assitencias"></propietarios-table>
</template>

<script>
import AsistenciasTable from '@/components/AsistenciasTable.vue';

export default {
  name: 'propietarioView',
  data() {
    return {
      titulo: "Asistencias"
    }
  },
  methods: {},
  mounted() {

  },
  components: {
    AsistenciasTable
  }
}
</script>