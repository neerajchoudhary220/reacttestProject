import moment from "moment/moment"
import { useState } from "react";

export function Clock(){
    const [ct,SetCt] = useState();
  const time = ()=>{
   return SetCt(moment().format('h:mm:ss a'))
  }

   setInterval(time,1000);
   return ct;
}