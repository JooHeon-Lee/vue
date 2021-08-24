<template>

  <div>
    <Header />
    <h1>{{title}}</h1>

    <HomeComponent />
    <AppStatus />
  </div>

</template>

<script>
import HomeComponent from "./Home"
import Header from "./components/layout/Header.vue"

  export default {
    components : {
      HomeComponent,
      Header
    },
    data() {
      return {
        title : "안녕하세요"
      } 
    }
  }
</script>
