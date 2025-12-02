export function getLocalStorage<T>(key:string){
    const rawData= localStorage.getItem(key)
    if(rawData) return JSON.parse(rawData) as T
        return
}

export function setLocalStorage<T>(key:string,data:T){
localStorage.setItem(key,JSON.stringify(data))
}