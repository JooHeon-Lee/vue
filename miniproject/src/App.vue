<template>
  <Header />

  <div class="black-bg" v-if="modalState">
    <div class="white-bg">
      <h4>모달창 제목임</h4>
      <p> 모달창 내용임 </p>
      <button @click="modalState = false">닫기</button>
    </div>
  </div>


  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="(n,i) in 3" :key="i">
    <img class="room-img" :src="imgPath[i]" />
    <h4 @click="modalState = true"> {{products[i]}} </h4>
    <p>50 만원</p>
    <button @click="singo(i)">허위매물 신고</button>
    <span> 신고수 : {{singoCnt[i]}} </span>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue"

export default {
  name: 'App',
  methods: {
    singo(i) {
      this.singoCnt[i]++
    }
  },  
  data() {
    return {
      modalState : false, // false - 닫힘, true - 열림
      singoCnt : [0,0,0],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      imgPath : [require("./assets/room0.jpg"),require("./assets/room1.jpg"),require("./assets/room2.jpg")],

    }
  },
  components: {
    Header
  },
}
</script>

<style>

body {
  margin : 0
}

div {
  box-sizing : border-box;
}

.black-bg {
  width: 100%; height : 100%;
  background: rgba(0,0,0,0.5);
  position : fixed; padding : 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius : 8px;
  padding : 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.room-img {
  width: 100%;
  margin-top : 40px;
}
</style>
