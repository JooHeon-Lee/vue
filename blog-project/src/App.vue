<template>
  <div>
    <h1>{{title}}</h1>

    <HomeComponent />
    <AppStatus />
  </div>

</template>

<script>
import HomeComponent from "./Home"

  export default {
    components : {
      HomeComponent
    },
    data() {
      return {
        title : "안녕하세요"
      } 
    }
  }
</script>
