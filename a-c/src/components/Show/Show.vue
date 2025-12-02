<script setup lang="ts">
import {windowStore} from '../../stores/windows/windows'
import ArrowButton from '../ArrowButton/ArrowButton.vue'
import {SHOWS} from '../../data/shows/shows'

</script>

<template>
    <div :class="[windowStore.windowClosed?'move-down':'']" class="absolute move-up -bottom-20 right-0 left-0" v-if="typeof windowStore.dateIndex==='number'">
        <ArrowButton @click="()=>windowStore.resetDateIndex()"/>
        <section class="w-full relative mt-[120px]" :class="[SHOWS[windowStore.dateIndex]?.bgColor]">
            <img style="transform: translate( -50%);" class="w-[150px] absolute -top-[75px] left-[50vw]" :src="SHOWS[windowStore.dateIndex]?.image"/>
            <div class="pt-[90px] flex flex-col items-center gap-3">
                <div class="text-white text-3xl">{{SHOWS[windowStore.dateIndex]?.title}}</div>
                <div class="text-white text-xl p-5">{{SHOWS[windowStore.dateIndex]?.fact}}</div>
                <iframe class="w-[80vw] sm:w-[50vw] h-50 sm:h-80 ml-10 mr-10 mb-10 " :src="`https://www.youtube.com/embed/${SHOWS[windowStore.dateIndex]?.vidio.id}`" :title="SHOWS[windowStore.dateIndex]?.vidio.id" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    </div>
</template>