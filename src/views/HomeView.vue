<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>
    <button @click="getToDaybook" class="btn btn-primary">Primary</button>
    <button @click="getToDaybook" class="btn btn-secondary">secondary</button>
    <button @click="getToDaybook" class="btn btn-success">success</button>
  </div>
</template>

<script>
export default {
  methods: {
    getToDaybook() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>