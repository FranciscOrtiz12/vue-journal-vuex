<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  <h1>Hola Mundo</h1>

  <button @click="goToDayBook" class="btn btn-primary">primary</button>
  <button @click="goToDayBook" class="btn btn-secondary">secondary</button>
  <button @click="goToDayBook" class="btn btn-success">success</button>

  </div>
</template>

<script>
export default {

  methods: {

    goToDayBook() {

      /* Navegar hacia una ruta por el nombre de esta */
      this.$router.push({ name: 'no-entry' })
    }

  }
  
}
</script>
