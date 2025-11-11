import  counter  from "./hello";

const hello = () => {

    let count = 1;
 

    return(
        <>
            <h1>Hello, world!</h1>
            <button onClick={() => counter(count)}>Click</button>
            <p>{count}</p>
        </>
    )
}
export default hello;