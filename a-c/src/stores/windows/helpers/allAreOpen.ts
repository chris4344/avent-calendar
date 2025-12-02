import { getDay } from "@/helpers/date/date";
import type { WindowT } from "../types";

export function AllAreOpen(windows:WindowT[]){
return windows.filter((_,i)=>i<=getDay()-1).every(({open})=>open)
}