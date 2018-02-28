<template>
    <div id="app">
        <PersonalForm/>
        <Grid :models="models"/>
    </div>
</template>

<script>
import PersonalForm from './components/PersonalForm'
import Grid from './components/Grid'
import bus from './bus'

export default {
    name: 'App',
    data () {
        return {
            models: JSON.parse(localStorage.getItem('models') || '[]')
        }
    },
    created () {
        bus.$on('models-push', (data) => {
            this.models.push(Object.assign({}, data));
            localStorage.setItem('models', JSON.stringify(this.models));
        })
    },
    components: {
        PersonalForm,
        Grid
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