import React, { useEffect, useState } from 'react'

function userEffectTimer() {
    
    const[count,setCount]= useState(0);
  useEffect(()=>{
    setTimeout(() => {
    setCount((count)=>count +1);
    },1000);
  });
    return (
    <div>
      i have render{count}times
    </div>
  )
}

export default userEffectTimer
