import { useReducer } from "react"

type CounterAction = {
    type: "increase" | "decrease" | "multiply";
    payload: number;
}
const reducer = (prevState:number, action: CounterAction) => {
    switch(action.type) {
        case "increase" :
            return prevState + action.payload;
        case "decrease" :
            return prevState - action.payload;
        case "multiply" :
            return prevState * action.payload;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer (reducer, 0);
    // const [count1, setCount] = useState<number>(0);

    // const hadleIncrease = () => {
    //     setCount((prev) => prev +1);
    // }
    // const hadleIncrease2 = () => {
    //     setCount((prev) => prev +2);
    // }
    // const hadleDecrease = () => {
    //     setCount((prev) => prev -1);
    // }
    // const hadleDecrease2 = () => {
    //     setCount((prev) => prev -2);
    // }
    // const handleMultiply = () => {
    //     setCount((prev) => prev *2 );
    // }
    // const handleMultiply2 = () => {
    //     setCount((prev) => prev *4 );
    // }

    return (
        <>
            {count}
            {/* <button onClick={hadleIncrease}>increase</button>
            <button onClick={hadleDecrease}>decrease</button>
            <button onClick={handleMultiply}>multiply</button>
            <button onClick={hadleIncrease2}>increase2</button>
            <button onClick={hadleDecrease2}>decrease2</button>
            <button onClick={handleMultiply2}>multiply2</button> */}
            <button onClick={() => dispatch({type: "increase", payload:1})}>increase</button>
            <button onClick={() => dispatch({type: "decrease", payload:1})}>decrease</button>
            <button onClick={() => dispatch({type: "multiply", payload:2})}>multiply</button>
        </>
    );
};

export default Counter;