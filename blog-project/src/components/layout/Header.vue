<template>
    <div>
        <!-- dark 추가시 어두워짐 -->
    <v-app-bar color="deep-purple accent-4" dense> 
            <v-btn @click="mv('/')" text>
            Home
            </v-btn>
            <v-btn @click="mv('/about')" text>
            About
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text>
            Log in
            </v-btn>
            <v-btn text>
            Sign in
            </v-btn>
    </v-app-bar>
    </div>    
</template>
<script>
export default {
    methods : {
        mv(url) {
            this.$router.push(url)
        }
    }
    
};
</script>