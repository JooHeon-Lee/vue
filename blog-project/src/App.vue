<template>

  <div>
    <Header />
<!-- 
    <HomeComponent />
    <AppStatus /> -->
    <router-view></router-view>
  </div>

</template>

<script>
// import HomeComponent from "./Home"
import Header from "./components/layout/Header.vue"

  export default {
    components : {
      // HomeComponent,
      Header
    },
    data() {
      return {
        title : "안녕하세요"
      } 
    }
  }
</script>
