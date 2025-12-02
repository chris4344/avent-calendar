import { reactive } from "vue";
import type { WindowsStore, WindowT } from "./types";
import { canOpen } from "@/helpers/date/date";
import { AllAreOpen } from "./helpers/allAreOpen";
import { getLocalStorage, setLocalStorage } from "@/helpers/localStorage/localStorage";

  export  const windowStore=reactive<WindowsStore>({
    windows:getLocalStorage('windows')|| Array.from({length:24},()=>{
        return {open:false}
    }),
    allOpen:getLocalStorage<WindowT[]>('windows')?AllAreOpen(getLocalStorage<WindowT[]>('windows')||[]):false,
    dateIndex:null,
    windowClosed:false,
    showArrow:false,
    openWindow({index,toggleAll}){
     const allOpen= !this.allOpen
    if(toggleAll){
        this.allOpen=allOpen
    }
 const windows=this.windows.map((window,i)=>{
    const isIndex=typeof index==='number'&&i===index
    if(isIndex&& window.open){
       document.querySelector('.w23')?.scrollIntoView({behavior:'smooth'})
        this.dateIndex=index
        setTimeout(()=>{
        this.showArrow=true
        },1000)
    } 
    if(isIndex) return {open:true}
    if(toggleAll&&canOpen(i)){
       return {open:allOpen}
    }
    return window
   })
   this.windows=windows
   setLocalStorage('windows',windows)
   const allTrue=AllAreOpen(windows)
   if(allTrue)return this.allOpen=true
   this.allOpen=false
   
    },
    resetDateIndex() {
        this.windowClosed=true
        this.showArrow=false
        setTimeout(()=>{
            const index=this.dateIndex
            console.log(index)
          if(typeof index==='number'&&index<=5)  document.querySelector('.timmer')?.scrollIntoView({behavior:'smooth'})
            this.dateIndex=null
            this.windowClosed=false
        },500)
    },
})
  