import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useState 返回一个数组，包含 state setXxx 的 api 一般我们都是用解构语法取
  // setXxx的api也有两种参数
  // 可以直接传新的值，或者传一个函数 返回新的值，这个函数的参数就是上一次的的state
  const [num,setNum] = useState(()=>{
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2 // 不支持异步
  })
  return (
    <div onClick={()=> setNum(num+1)}>{num}</div>
  );
}

export default App;
