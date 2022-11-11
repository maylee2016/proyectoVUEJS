<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
  <reuniones-table title="Lista de Reuniones"></reuniones-table>
</template>

<script>
import ReunionesTable from '@/components/ReunionesTable.vue';

export default {
  name: 'reunionesView',
  data() {
    return {
      titulo: "Reuniones"
    }
  },
  methods: {},
  mounted() {

  },
  components: {
    ReunionesTable
  }
}
</script>