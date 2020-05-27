<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      <GoldMined :total="goldStats.total"></GoldMined>
    </p>
    <p>Pick Level: {{goldStats.pickLevel}}</p>
    <button v-on:click="mineGold()">Mine for Gold(+{{goldStats.perClick}})</button>
    <button
      v-on:click="upgradeGoldPerClick()"
      v-if="goldStats.total >= goldStats.perClickCost"
    >Upgrade Pick (Cost: {{goldStats.perClickCost}})</button>
    <button v-on:click="resetAll()">RESET EVERYTHING</button>

    <UpgradeButton
      :buttonValue="500"
      :buttonId="0"
      :buttonUpgrade="6000"
      :buttonpickLevels="goldStats.pickLevels"
      v-on:whenClicked="handleClickInParent"
    ></UpgradeButton>

    <footer v-html="attributes"></footer>
  </div>
</template>

<script>
import GoldMined from "./GoldMined.vue";
import UpgradeButton from "./UpgradeButton.vue";


export default {
  name: "HelloWorld",
  data: function() {
    return {
      //  videos: this.$store.state.videos,
      // goldStats: {
      //   total: 10,
      //   perClick: 1,
      //   perClickCost: 10,
      //   pickLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // },
      goldStats: this.$store.state.goldStats,
      attributes:
        'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>'
    };
  },
  props: {
    msg: String
  },
  components: {
    GoldMined,
    UpgradeButton
  },
  methods: {
    resetAll: function() {
      this.goldStats = {
        total: 10,
        perClick: 1,
        perClickCost: 10,
        pickLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      };
    },
    handleClickInParent: function(addThisToTotal, buttonpickLevels) {
      // this.goldStats.total = this.goldStats.total + parseInt(buttonValue);
      // console.log("button clicked via child", buttonValue);
      this.pickLevels = buttonpickLevels;
      console.log("Parent: this pick levels", this.pickLevels);
      console.log("addThisToTotal", addThisToTotal);
      this.goldStats.perClick += addThisToTotal;
      console.log("per click", this.goldStats.perClick);

      //upgrade the Array

},
    mineGold: function() {
      this.goldStats.total += parseInt(this.goldStats.perClick);

      console.log("state: ", this.$store.state.goldStats);

    },
    upgradeGoldPerClick: function() {
      //pay for it
      this.goldStats.total = this.goldStats.total - this.goldStats.perClickCost;
      //increase the fee
      this.goldStats.perClickCost = Math.floor(this.goldStats.perClickCost * 2);
      //upgrade
      this.goldStats.perClick = Math.floor(
        (this.goldStats.perClick + this.goldStats.perClick) * 1.1
      );
      this.goldStats.pickLevel = this.goldStats.pickLevel + 1;
    },
    runEverySecond: function() {
      setInterval(
        function() {
          this.goldStats.total += this.goldStats.perClick;
        }.bind(this),
        1500
      );
    },
    savingTheGame: function() {
      setInterval(
        function() {
          const parsed = JSON.stringify(this.goldStats);
          localStorage.setItem("goldMinerSave", parsed);
          this.$toasted.show("Game saved!").goAway(2500);
        }.bind(this),
        30000
      );
      // setInterval(function() {
      // }.bind(this), 15000);
    }
  },
  mounted() {
    if (localStorage.getItem("goldMinerSave")) {
      try {
        this.goldStats = JSON.parse(localStorage.getItem("goldMinerSave"));
      } catch (e) {
        localStorage.removeItem("goldMinerSave");
      }
    }
  },
  created: function() {
    this.runEverySecond();
    this.savingTheGame();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
