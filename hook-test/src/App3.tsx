import { Reducer, useReducer } from "react";
interface Data {
  result: number;
}
interface Action {
  type: "add" | "minus";
  num: number;
}
// 直接修改原来的 state返回 是触发不了重新渲染的，要返回一个新的值
// 当对象复杂  使用 immutable 相关的库了。
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return {
        result: state.result + action.num,
      };
    case "minus":
      return {
        result: state.result - action.num,
      };
  }
  return state
}

function App (){
    const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});
    return (
        <div>
           <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
        <div>{res.result}</div> 
        </div>
    )
}

export default App