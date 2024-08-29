* useEffect
* useLayoutEffect
    - 它的effect都是同步的,也是在同一个任务里。 可能 effect逻辑要执行很久。
    - useEffect 有可能在下次渲染完,就能执行完这个effect
    - 也有可能下次渲染前，没时间执行这个effect,所以就在渲染之后执行了。
    - 这样就导致有的时候页面会出现闪动，因为第一次渲染的时候state是之前的值,渲染完之后执行effect改了state,再次渲染就是新的值了。
    - 绝大多数情况下，用 useEffect，它能避免因为 effect 逻辑执行时间长导致页面卡顿（掉帧）。 但如果你遇到闪动的问题比较严重，那可以用 useLayoutEffect，但要注意 effect 逻辑不要执行时间太长。



* 在react里 只要涉及到 state的修改，就必须返回新的对象，不管是 useState 还是 useReducer
* 复杂的深层对象的修改，可以用 immer来优化。

* useRef

* forwardRef + useImperativeHandle

* useContext

* 用 createContext创建context对象，用 Provider 修改其中的值
* function 组件使用 useContext的hook来取值， class组件使用 Consumer来取值。

* memo  + useMemo  + useCallback

* memo 是防止 props没变时重新渲染
* useMemo 和 useCallback 是防止props不必要的变化


* 如果子组件用了 memo 那给它传递的对象，函数类的props就需要用 useMemo  useCallback包裹 否则每次props都会变，memo就没有用了。

* 反之 如果 props使用 useMemo useCallback 但是子组件没有被 memo包裹，那也没有意义，因为不管props变没变都会重新渲染，只是做了无用功。