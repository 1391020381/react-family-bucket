import { useEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("xxxxxxx");
    queryData().then((data) => {
      setNum(data);
    });
  }, [1, 2, 3, "xxxx", Date.now()]);
  // 一般写依赖的 state,这样在state变了之后就会触发重新执行了。
  // 不传 deps 数组的时候也是每次都会重新执行 effect 函数
  // useEffect参数那个函数不支持 async
  return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>;
}

export default App;
