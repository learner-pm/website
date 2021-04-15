<template lang="html">
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    ul {
        list-style: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    #app {
        height: 100%;
    }
    
    body {
        height: 100%;
        font-size: 1rem;
    }
    
    html {
        height: 100%;
        font-size: 16px;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
    
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>