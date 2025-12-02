<script setup lang="ts">
import Calender from "./components/Calender/Calender.vue"
import Show from "./components/Show/Show.vue"
import {SHOWS} from "./data/shows/shows"
import {getDaysLeftUntilChristmas} from './helpers/date/date'
import {windowStore} from './stores/windows/windows'

</script>

<template>
  <div class=" w-screen relative">
    <div class="text-center w-full justify-center flex  sticky top-0 z-10 text-white  bg-white/25 backdrop-blur-lg p-5">
        <div>
          <h1 class=" text-4xl">Kids Advent Calender </h1>
          <div v-if="getDaysLeftUntilChristmas()>=1" class="text-2xl">{{getDaysLeftUntilChristmas()}} sleeps left to go</div>
        </div>
    </div>
    <Calender/>
    <Show/>
</div>
    

 
</template>

