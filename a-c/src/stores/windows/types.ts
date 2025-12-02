export type WindowsStore={
    windows:WindowT[]
    allOpen:boolean
    windowClosed:boolean
    dateIndex:number|null
    showArrow:boolean
    openWindow:(opts:{index?:number,toggleAll?:boolean})=>void
    resetDateIndex:()=>void
}

export type WindowT={
    open:boolean
}