import { Component, createContext,useContext } from "react";

const countContext = createContext(111)

function Aaa(){
    return <div>
        <countContext.Provider value={222}>
            <Bbb></Bbb>
        </countContext.Provider>
    </div>
}

function Bbb(){
    return <div>
        <Ccc></Ccc>
        {/* <countContext.Consumer>
            {(count)=> <Ccc2 count={count}></Ccc2>}
            </countContext.Consumer> */}
        </div>
}

function Ccc(){
    const count  = useContext(countContext)
    return <h2>context 的值为: {count}</h2>
}

// class Ccc2 extends Component{
//     render() {
//       return <h2>context的值为 {this.props?.count}</h2> 
//     }
// }
export default Aaa;