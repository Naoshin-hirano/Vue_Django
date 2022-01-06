<template>
    <v-app>
        <v-app-bar color="success" dark app>
            <v-toolbar-title>求人情報</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text to="/">ホーム</v-btn>
                <v-btn text to="/add">仕事追加</v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
        <v-footer color="success" dark app class="justify-center">
            Django Startup - Step3
        </v-footer>
    </v-app>
</template>

<script>
export default {

};
</script>