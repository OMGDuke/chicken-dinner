<template>
  <div id="app">
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">🍗</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">About</a></li>
        </ul>
        <ul id="nav-mobile" class="side-nav">
          <li><a href="#">About</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      </div>
    </nav>

    <div class="container">
      <div class="section">
        <search></search>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Search from './components/Search';

export default {
  name: 'app',
  components: {
    Search,
  },
};
</script>

<style>
</style>
