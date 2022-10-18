<script setup>
  import ikawyungnasataas from '@/components/nasataas.vue';
</script>

<template>
  <v-app>
    <v-main>
      <ikawyungnasataas />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
