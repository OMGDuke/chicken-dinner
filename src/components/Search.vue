<template>
  <div id="search">
    <form class="col s12" v-on:submit.prevent="goToResults">
      <div class="row"></div>
        <div class="input-field col offset-l2 l8 m12 s12">
          <input id="username" name="search-box" type="text" v-model="playerName"></input>
          <label for="username">Enter Steam username</label>
        </div>
      <div class="row center-align">
          <button type="submit" class="waves-effect waves-light btn"><i class="material-icons left">search</i>Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      playerName: '',
    };
  },
  methods: {
    goToResults() {
      if (this.playerName) {
        const params = { playerName: this.playerName };
        this.$router.push({ name: 'results', params });
      }
    },
  },
};
</script>

<style scoped>

</style>
