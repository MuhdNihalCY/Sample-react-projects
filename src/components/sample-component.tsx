import React,{useState} from "react";

function AnyFunction(){
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <h1>{count}</h1>
        </div>
    )

}

export default AnyFunction;