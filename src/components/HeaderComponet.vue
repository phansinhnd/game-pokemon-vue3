<template>
  <div class="header" :style="{ background: isBgHeader ? bgHeader : '' }">
    <div
      @click="onClickHome"
      class="btn-primary main-icon-wrapper flex flex-center"
      :class="{ 'color-primary-change': isColorOrange }"
      title="home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </div>
    <div
      class="btn-primary main-icon-wrapper main-icon-wrapper--audio flex flex-center"
    >
      <ion-icon
        v-if="isAudio"
        @click="onToggleAudio"
        name="volume-high-outline"
      ></ion-icon>
      <ion-icon
        v-if="!isAudio"
        @click="onToggleAudio"
        name="volume-mute-outline"
      ></ion-icon>
    </div>
    <div @click="onToggleDropDown" class="main-theme-wrapper">
      <div class="main-theme btn-primary main-icon-wrapper flex flex-center">
        Themes<span> > </span>
      </div>
      <ul v-if="isDropDown" class="main-theme-list">
        <li
          v-for="(theme, index) in themes"
          class="main-theme-item"
          :key="index"
          @click="onClickItem(theme.title, theme.color)"
        >
          {{ theme.title }}
        </li>
      </ul>
    </div>

    <div class="main__time">
      Time
      <span v-if="isShow" class="main__time__dot">: </span>
      &ensp;{{ time }} s
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerComponent",
  components: {},
  data() {
    return {
      time: 0,
      isShow: true,
      isAudio: true,
      isDropDown: false,
      isColorOrange: false,
      isBgHeader: false,
      bgHeader: "",
      themes: [
        {
          title: "Default",
          color: "",
        },
        {
          title: "Orange",
          color: "#f05123",
        },
      ],
    };
  },
  props: {
    isStopTimer: {
      type: Boolean,
    },
  },
  methods: {
    onToggleAudio() {
      this.isAudio = !this.isAudio;
      if (this.isAudio) {
        this.$emit("playAudio");
      } else {
        this.$emit("pauseAudio");
      }
    },
    onClickHome() {
      console.log(this.isBgHeader);
      this.$emit("backHome");
    },
    onToggleDropDown() {
      this.isDropDown = !this.isDropDown;
      console.log(this.isBgHeader);
    },
    onClickItem(title, color) {
      let r = document.querySelector(":root");
      if (title === "Default") {
        this.isBgHeader = false;
        r.style.setProperty("--color-primary-playScreen", "#1877f2");
      } else {
        this.isBgHeader = true;
        this.bgHeader = color;
        r.style.setProperty("--color-primary-playScreen", color);
      }
    },
    timer() {
      if (this.isStopTimer) {
        return;
      }
      ++this.time;
    },
    handeleShow: function () {
      if (this.isStopTimer) {
        this.isShow = true;
        return;
      }
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    setInterval(this.timer, 1000);
    setInterval(this.handeleShow, 500);
  },
};
</script>
<style scoped>
.header {
  position: absolute;
  z-index: 100;
  padding: 6px 10px;
  top: 0px;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #4a94f5, #1877f2, #4a94f5);
}
.main__time {
  font-size: 2rem;
  position: absolute;
  top: 10px;
  left: 50%;
  color: white;
  text-shadow: 1px 0 black, 0px 1px black, -1px 0 black, 0px -1px black;
  text-align: center;
  font-family: "DS-Digital", sans-serif;
  transform: translateX(-50%);
  width: fit-content;
}
.main__time__dot {
  position: absolute;
  color: white;
  top: -1px;
  left: 38px;
  font-size: 20px;
}
.main-icon-wrapper {
  width: 2.8rem;
  height: 2.8rem;
  background: transparent;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2), -1px 2px 3px rgba(0, 0, 0, 0.2);
}
.main-icon-wrapper:hover {
  opacity: 0.7;
}
.main-icon-wrapper svg {
  color: white;
  font-size: 20px;
  width: 2rem;
}
.main-icon-wrapper--audio {
  position: absolute;
  right: 12rem;
  top: 50%;
  transform: translateY(-50%);
}
.main-icon-wrapper--audio ion-icon {
  color: white;
  font-size: 20px;
}
.main-theme-wrapper {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.main-theme-wrapper .main-theme {
  width: fit-content;
  padding: 0 10px;
}
.main-icon-wrapper span {
  display: block;
  transform: rotate(90deg);
  margin-left: 10px;
}
.main-theme-list {
  position: absolute;
  left: 0;
  bottom: -1px;
  transform: translateY(100%);
  width: 100%;
  padding: 2px 0;
  color: white;
  background: var(--color-primary-playScreen);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.main-theme-item {
  width: 100%;
  padding: 2px 0;
  text-align: center;
}
.main-theme-item:hover {
  opacity: 0.8;
  cursor: pointer;
}
.wrapper-btn-audio {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: 2.8rem;
  height: 2.8rem;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: all linear 0.2s;
}
</style>
