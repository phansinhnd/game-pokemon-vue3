<template>
  <div class="container">
    <div class="main-play-wrapper">
      <div class="main-play">
        <div class="main-play-audio">
          <audio ref="audioGame" controls loop autoplay>
            <source src="/audios/Pikachu.mp3" type="audio/ogg" />
            <source src="/audios/4.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <header-component
          @backHome="backHome"
          @playAudio="playAudio"
          @pauseAudio="pauseAudio"
          :isStopTimer="isStopTimer"
        />
        <ul :class="className[0]" class="card-list flex">
          <li
            :class="className[1]"
            class="card-item"
            v-for="(card, index) in arrCard"
            :key="index"
          >
            <div
              class="card-item__wrapper"
              :class="{ 'card-item-flip': card.isFlip }"
              @click="handleClickCard(index, card)"
            >
              <img
                class="card-item-img card-item-back"
                :src="card.src"
                alt="image"
              />
              <img
                class="card-item-img card-item-front"
                src="./images/icon_back.png"
                alt="image"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponet.vue";
export default {
  name: "PlayingScreen",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      arrCard: [],
      cardClick: null,
      isNoProcess: false,
      countCardMatch: 0,
      isStopTimer: false,
      arrSrc: [
        "./images/1.png",
        "./images/2.png",
        "/images/3.png",
        "./images/4.png",
        "./images/5.png",
        "./images/6.png",
        "./images/7.png",
        "./images/8.png",
        "./images/9.png",
        "./images/10.png",
        "./images/11.png",
        "./images/12.png",
        "./images/13.png",
        "./images/14.png",
        "./images/15.png",
        "./images/16.png",
        "./images/17.png",
        "./images/18.png",
        "./images/19.png",
        "./images/20.png",
        "./images/21.png",
        "./images/22.png",
        "./images/23.png",
        "./images/24.png",
        "./images/25.png",
        "./images/26.png",
        "./images/27.png",
        "./images/28.png",
        "./images/29.png",
        "./images/30.png",
        "./images/31.png",
        "./images/32.png",
        "./images/33.png",
        "./images/34.png",
        "./images/35.png",
        "./images/36.png",
        "./images/37.png",
        "./images/38.png",
        "./images/39.png",
        "./images/40.png",
        "./images/41.png",
        "./images/42.png",
        "./images/43.png",
        "./images/44.png",
        "./images/45.png",
        "./images/46.png",
        "./images/47.png",
        "./images/48.png",
        "./images/49.png",
        "./images/50.png",
        "./images/51.png",
        "./images/52.png",
        "./images/53.png",
        "./images/54.png",
        "./images/55.png",
        "./images/56.png",
        "./images/57.png",
        "./images/58.png",
        "./images/59.png",
        "./images/60.png",
        "./images/61.png",
        "./images/62.png",
        "./images/63.png",
        "./images/64.png",
      ],
    };
  },
  props: {
    numberCard: {
      type: Number,
    },
    className: {
      type: Array,
    },

    timeShowCard: {
      type: Number,
    },
  },
  methods: {
    playAudio() {
      this.$refs.audioGame.play();
      this.$refs.audioGame.currentTime = 0;
    },

    pauseAudio() {
      this.$refs.audioGame.pause();
    },

    backHome() {
      this.$emit("backHome");
    },

    getMultipleRandom: function (arr, num) {
      console.log(typeof num);
      let shuffled = [...arr].sort(() => 0.5 - Math.random());
      let result = shuffled.slice(0, num / 2);
      result = [...result, ...result];
      result = [...result].sort(() => 0.5 - Math.random());
      result = result.slice(0, num);
      for (let i = 0; i < result.length; i++) {
        this.arrCard.push({
          isFlip: true,
          src: result[i],
        });
      }
    },

    handleClickCard(index, card) {
      if (card.isFlip || this.isNoProcess) {
        return;
      }

      if (this.cardClick === null) {
        this.cardClick = { ...card, index: index };
        console.log(this.cardClick);
        card.isFlip = true;
        return;
      }

      if (this.cardClick !== null && this.cardClick.src === card.src) {
        card.isFlip = true;
        this.cardClick = null;
        this.countCardMatch++;
        if (this.countCardMatch == this.arrCard.length / 2) {
          this.isStopTimer = true;
        }
        return;
      }

      if (this.cardClick !== null && this.cardClick.src !== card.src) {
        card.isFlip = true;
        this.isNoProcess = true;
        setTimeout(() => {
          this.arrCard[this.cardClick.index].isFlip = false;
          card.isFlip = false;
          this.isNoProcess = false;
          this.cardClick = null;
        }, 1000);
      }
    },
  },
  computed: {},
  mounted() {
    console.log(typeof this.timeShowCard);
    console.log(typeof this.numberCard);
    this.getMultipleRandom(this.arrSrc, this.numberCard);
    setTimeout(() => {
      this.arrCard.forEach((value) => (value.isFlip = false));
    }, this.timeShowCard);
  },
};
</script>

<style scoped>
.container {
  background: linear-gradient(180deg, #000, #222, #333);
}

.main-play-wrapper {
  width: 100%;
  min-width: fit-content;
  background-image: url("~@/assets/images/super-star.gif");
  background-size: 150px;
  background-position: center;
  background-repeat: repeat;
}

.main-play {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  min-height: 100vh;
  font-size: 1.6rem;
  background: rgba(0, 0, 0, 0.5);
  border-left: 1px solid var(--color-primary-playScreen);
  border-right: 1px solid var(--color-primary-playScreen);
}

.main-play-audio {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: none;
}

.main__time__dot {
  position: absolute;
  color: white;
  top: 0;
  left: 38px;
}

.card-list--16 {
  --width: 500px;
}

.card-list--24 {
  --width: 800px;
}

.card-list--48 {
  --width: 1000px;
}

.card-list--100 {
  --width: 1200px;
}

.card-list {
  width: var(--width);
  margin-top: 40px;
}

.card-item--16 {
  width: calc(var(--width) / 4);
  height: calc(var(--width) * 1.1 / 4);
}

.card-item--24 {
  width: calc(var(--width) / 6);
  height: calc(var(--width) * 1 / 6);
}

.card-item--48 {
  width: calc(var(--width) / 8);
  height: calc(var(--width) * 1 / 11);
}

.card-item--100 {
  width: calc(var(--width) / 11);
  height: calc(var(--width) * 1 / 13);
}

.card-item {
  padding: 10px;
  perspective: 1000px;
}

.card-item-flip {
  transform: rotateY(180deg);
}

.card-item__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  box-shadow: 2px 4px var(--color-primary-playScreen);
}

.card-item-img {
  display: block;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: contain;
}

.card-item-front {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-item-back {
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
