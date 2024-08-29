import { useEffect,useState } from "react";

function App() {
    const [num,setNum] = useState(0);
    useEffect(()=>{
        console.log('effect');
        const timer = setInterval(()=>{
            console.log(num)
        },1000)
        // 可以看到 当 deps数组变了，重新执行 effect之前，会先执行清理函数，打印了 clean up
        // 组件销毁时,也会调用 clean up函数来进行清理。
        return ()=>{
            console.log('clean up')
            clearInterval(timer)
        }
    },[num])
    return (
        <div onClick={()=> setNum((prevNum)=> prevNum + 1)}>
            {num}
        </div>
    )
}
export default App