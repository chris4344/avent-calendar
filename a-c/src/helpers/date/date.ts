

function getDate(){
    return new Date("December 30, 1975 23:15:30")
}

 function getDaysLeft(targetDay:number){
const start = new Date(getDate().getFullYear(), 0, 0)
const diff =getDate().getTime() - start.getTime()
const oneDay = 1000 * 60 * 60 * 24;
const day = Math.floor(diff / oneDay);
return targetDay- day
}

const CHRISTMAS_DAY=359

export function getDaysLeftUntilChristmas(){
    return getDaysLeft(CHRISTMAS_DAY)
}



export function getDaysLeftUnitlStart(){
    return getDaysLeft(CHRISTMAS_DAY-24)
}

export function getTimeLeft(unit:'hour'|'minute'|'second'){
const UNITS={
    hour:24,
    minute:60,
    second:60
}
const METHODS={
    hour:getDate().getHours(),
    minute:getDate().getMinutes(),
    second:getDate().getSeconds()
}

return UNITS[unit]-METHODS[unit]
}

export function canOpen(index:number){
    console.log(getDate().getDate(),index)
    return getDate().getMonth()===11&&getDate().getDate()-1>=index
}
export function getMonth(){
    return getDate().getMonth()
}

export function getDay(){
    return getDate().getDate()
}