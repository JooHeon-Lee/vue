<template>
    <div>
        <h1>Welcome to {{title}}!</h1> <!--텍스트 데이터 바인딩 -->
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData()">Get</button>
        <button type="button" @click="setData()">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <!-- v-if는 false이면 렌더링 자체를 안함 (반복되면 렌더링을 반복하게됨) -->
        <!-- <table class="table table-bordered" v-if="tableShow"> -->
        <!-- v-show는 false이면 렌더링은 하지만 안보임 (display:none) -->
        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>    
</template>
<script>
export default {
 data() { // 각종 데이터
     return {
         title : "개발자의 품격",
         title2 : "Daegu",
         input1 : "abcd",
         options : [
             {v : "S", t : "Seoul"},
             {v : "D", t : "Daegu"},
             {v : "U", t : "Ulsan"},
         ],
         region : "U",
         tableShow : true
     };
 },
 watch: {
     input1() { // input1 변수의 변동되는것을 catch해냄 즉 실시간 모니터링함
        console.log(this.input1);
     }
 },
 methods : { // 각종 함수
    getData() {
        alert(this.input1);
    },
    setData() {
        this.input1 = 5555;
    },
    changeRegion() {
        alert(this.region);
    }
 },
 //라이프 사이클
 beforeCreat() {
     console.log("beforeCreat");
 },
 created() {
     console.log("created");
 },
 beforeMount() {
     console.log("beforeMount");
 },
 mounted() {
     console.log("mounted");
 },
 beforeUpdate() {
     console.log("beforeUpdate");
 },
 updated() {
     console.log("updated");
 },
 beforeDestroy() {
     console.log("beforeDestroy");
 },
 destroyed() {
     console.log("destroyed");
 }
};
</script>