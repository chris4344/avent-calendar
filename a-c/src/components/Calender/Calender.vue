<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import {SHOWS} from '../../data/shows/shows'
import {windowStore} from '../../stores/windows/windows'
import {getDaysLeftUnitlStart,getTimeLeft,canOpen,getDaysLeftUntilChristmas,getMonth} from '../../helpers/date/date'
import Button from '../../components/Button/Button.vue'
const timeLeft=ref('')
onMounted(()=>{
    if(getDaysLeftUntilChristmas()-1>=1){
        setInterval(()=>{
    const days=getDaysLeftUnitlStart()
    const hours=getTimeLeft('hour')
    const minutes=getTimeLeft('minute')
    const seconds=getTimeLeft('second')
    timeLeft.value=`${days>1?`${days-1}D`:''} ${hours}H ${minutes}M ${seconds}S`
},1000)
    }else{
        timeLeft.value='Advent Complete'
    }
})
function isDateIndex(){
  return typeof windowStore.dateIndex!=='number'
}

</script>


<template>
    <div :class="[!isDateIndex()?'opacity-15':'']" class="flex justify-center p-5 timmer">
     <div class="flex flex-col items-center mt-5 gap-5">
        <div class="w-full sx-flex flex justify-center gap-5 items-center">
        <div class="bg-white p-3 rounded-md w-9/12 sm:w-6/12 h-12 sx-width flex justify-center">
            <div class="flex gap-2" v-if="timeLeft">
              <div>{{timeLeft}}</div>
              <div v-if="getDaysLeftUntilChristmas()-1>=1">Until next window</div>
            </div>
            <div v-else>
               ...loading
            </div>
        </div>
        <Button @click="windowStore.openWindow({toggleAll:true})">{{windowStore.allOpen?'Close':'Open'}} all</Button>
      </div>
    <div class="w-fit grid grid-cols-4 sm:grid-cols-6 sx gap-5">
      <button @click="()=>windowStore.openWindow({index:i})" :disabled="!canOpen(i)" :class="[`w${i}`]" class="w-[100px] h-[100px] border-white border-2 text-xl text-white relative"  :key="i"  v-for="window,i in windowStore.windows">

      <div v-if="!window.open" lass="bg-red-500 absolute top-2 left-2 h-fit w-8 rounded-full">
        <div class="flex justify-center items-center">
          {{i+1}}
        </div>
      </div>
        <img v-else-if="SHOWS[i]" :src="SHOWS[i].image"/>
      </button>
    
    </div>
</div>

</div>
</template>