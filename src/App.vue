<template>
  <div id="app">
    <PersonalForm/>
  </div>
</template>

<script>
import PersonalForm from './components/PersonalForm'
import bus from './bus'

export default {
  name: 'App',
  components: {
    PersonalForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
