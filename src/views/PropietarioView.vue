<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
  <propietarios-table title="Lista de propietarios"></propietarios-table>
</template>

<script>
import PropietariosTable from '@/components/PropietariosTable.vue';

export default {
  name: 'propietarioView',
  data() {
    return {
      titulo: "Propietarios"
    }
  },
  methods: {},
  mounted() {

  },
  components: {
    PropietariosTable
  }
}
</script>