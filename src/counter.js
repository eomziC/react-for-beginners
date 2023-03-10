import {useEffect, useState} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() => {
        console.log("I run only once.")
    }, []);

    useEffect(() => {
        console.log("I run when 'keyword' changes.");
    }, [keyword]);

    useEffect(() => {
        if (counter > 10) {
            console.log("I 10 run when 'counter' changes.");
        } else {
            console.log("I run when 'counter' changes111.");
        }

    }, [counter]);

    useEffect(() => {
        console.log("I run when keyword & counter change")
    }, [keyword, counter]);

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
            <h1>{counter}</h1>
            <p>{counter > 10 ? '10이상' : '10이하'}</p>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
