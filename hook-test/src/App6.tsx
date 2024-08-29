import { useRef,useEffect } from "react";
import React from "react";
const Guang:React.ForwardRefRenderFunction<HTMLInputElement> = (props,ref)=>{
    return <div>
        <input ref={ref}/>
    </div>
}

const  WrapedGuang = React.forwardRef(Guang)

function App() {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        console.log('ref:',ref.current)
        ref.current?.focus()
    },[])
    return (
        <div>
            <WrapedGuang ref={ref}></WrapedGuang>
        </div>
    )
}

export default App