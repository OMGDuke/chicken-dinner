<template>
  <div class="center-align">
    <div v-show="!loading && playerFound" >
      <h1>RESULTS</h1>
      <h3><img id="player-avatar" :src="playerAvatar"> {{playerName}}</h3>
      <h5>{{wins}} Chicken Dinners</h5>
      <div >
        <img v-show="wins > 0" v-for="n in wins" id="chicken-image" src="https://www.pressurecookerpros.com/wp-content/uploads/2016/03/Chicken-Dinner.jpg?x64511">
        <img v-show="wins === 0" class="responsive-img" src="http://www.furrytips.com/wp-content/uploads/2015/09/can-cats-eat-chicken-bones.png">
      </div>
    </div>
    <div v-show="!loading && !playerFound">
      Player not found
    </div>
    <div v-show="loading" class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'results',
  data() {
    return {
      playerName: '',
      wins: 0,
      loading: true,
      playerFound: false,
      playerAvatar: '',
    };
  },
  created() {
    this.searchForPlayer();
  },
  watch: {
    $route() {
      this.searchForPlayer();
    },
  },
  methods: {
    searchForPlayer() {
      this.playerName = this.$route.params.playerName;
      this.loading = true;
      if (this.playerName) {
        const url = `https://pubgtracker.com/api/profile/pc/${this.playerName}`;
        this.httpRequest(url);
      }
    },
    httpRequest(url) {
      const API_KEY = this.$env.get('PUBG_TRACKER_API_KEY');
      this.$http.get(url, { headers: { 'TRN-API-KEY': API_KEY } })
        .then(this.calculateDinners);
    },
    calculateDinners(playerData) {
      this.loading = false;
      if (!playerData.body.error) {
        this.playerAvatar = playerData.body.Avatar;
        this.playerFound = true;
        this.wins = 0;
        playerData.body.Stats.forEach((league) => {
          if (league.Region === 'agg') {
            this.wins += +league.Stats[4].value;
          }
        });
      } else {
        this.playerFound = false;
      }
    },
  },

};
</script>

<style scoped>
    img#chicken-image {
    width: 10%;
  }  
</style>
