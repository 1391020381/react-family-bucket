import { useEffect,useRef } from "react";

function App(){
    const innputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        innputRef.current?.focus()
    })
    return (
        <div>
            <input ref={innputRef}/>
        </div>
    )
}

export default App