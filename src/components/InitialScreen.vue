<template>
  <div class="main flex flex-center bg-primary" v-if="tab_Index === 0">
    <div class="main__wrapper">
      <div class="main__h1__wrapper">
        <h1 class="text-h1 text-h1--heading">pokemon card</h1>
      </div>
      <img class="main__image" src="./pokemonbg.gif" alt="image" />
      <h2 class="text-h2 text-h2--heading">Select mode to play game</h2>
      <div class="card-list-wrapper">
        <ul class="card-list">
          <li
            class="card-item btn-primary"
            v-for="card in cards"
            :key="card.id"
            @click="
              () => {
                gettotal(card.totalCard, card.className, card.timeShowCard);
              }
            "
          >
            <h4 class="text-h4">{{ card.dir }}</h4>
            <p class="text-p">{{ card.mode }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <playing-screen
    v-if="tab_Index === 1"
    :numberCard="totalCard"
    :className="className"
    @backHome="backHome"
    :timeShowCard="timeShowCard"
  />
  <footer-screen v-if="tab_Index === 0" />
</template>

<script>
import PlayingScreen from "./PlayingScreen.vue";
import FooterScreen from "./FooterScreen.vue";
export default {
  name: "InitialScreen",
  components: {
    PlayingScreen,
    FooterScreen,
  },
  data() {
    return {
      tab_Index: 0,
      totalCard: 0,
      className: [],
      timeShowCard: 0,
      cards: [
        {
          id: 0,
          mode: "4x4",
          dir: "Easy",
          totalCard: 16,
          className: ["card-list--16", "card-item--16"],
          timeShowCard: 1200,
        },
        {
          id: 1,
          mode: "6x4",
          totalCard: 24,
          dir: "Norm",
          className: ["card-list--24", "card-item--24"],
          timeShowCard: 3000,
        },
        {
          id: 2,
          mode: "8x6",
          totalCard: 48,
          dir: "Hard",
          className: ["card-list--48", "card-item--48"],
          timeShowCard: 4000,
        },
        {
          id: 3,
          mode: "11x6",
          totalCard: 66,
          dir: "Very Hard",
          className: ["card-list--100", "card-item--100"],
          timeShowCard: 5000,
        },
      ],
    };
  },
  methods: {
    backHome() {
      this.tab_Index = 0;
    },
    gettotal(totalCard, className, timeShowCard) {
      this.totalCard = totalCard;
      this.className = className;
      this.timeShowCard = timeShowCard;
      this.tab_Index = 1;
    },
  },
  mounted() {
    // test
  },
};
</script>

<style scoped>
.main {
  flex-direction: column;
  width: fit-content;
  margin: auto;
  padding: 0 2rem;
  min-width: 500px;
  min-height: 100vh;
}
.bg-primary {
  background: var(--color-bg-blue);
}
.main__image {
  display: block;
  margin: auto;
  width: 15rem;
}
.main__h1__wrapper {
  background-color: white;
  border-radius: 5px;
}
.text-h1--heading {
  margin-bottom: 3rem;
  padding: 0 4px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(315deg, #0f9f5e 25%, #647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 0.4rem;
}
.text-h2--heading {
  margin-bottom: 2rem;
  padding-top: 2rem;
  text-align: center;
}
.card-list-wrapper {
  display: flex;
}
.card-list {
  display: flex;
  margin: auto;
}
.card-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
}
.card-item:hover {
  transform: scale(1.05);
}
.card-item + .card-item {
  margin-left: 2rem;
}
</style>
