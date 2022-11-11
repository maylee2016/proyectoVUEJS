<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
  <asistencias-table title="Lista de assitencias"></asistencias-table>
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