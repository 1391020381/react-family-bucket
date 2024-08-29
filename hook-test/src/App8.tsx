import { memo,useCallback,useEffect,useState} from 'react'


interface BbbProps {
    count:number,
    callback:Function
}
function Bbb(props:BbbProps){
    console.log('bbb render')
    return <h2>{props.count}</h2>
}
const MemoBbb = memo(Bbb);
function Aaa(){
    const [,setNum] = useState(1)
    const [count,setCount] = useState(2)
    useEffect(()=>{
        setInterval(()=>{
            setNum(Math.random())
        },2000)
    },[])
    useEffect(()=>{
        setInterval(()=>{
            setCount(Math.random())
        },2000)
    },[])
    const bbbCallback = useCallback(function(){
        console.log('bbbCallback')
    },[])
    return <div>
        {/* <Bbb count={2}></Bbb> */}
        <MemoBbb count={count} callback={bbbCallback}></MemoBbb>
    </div>
}


export default Aaa;