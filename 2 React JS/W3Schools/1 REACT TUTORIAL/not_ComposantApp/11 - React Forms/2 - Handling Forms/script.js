import {useState} from "react";

function MyForm() {
    const [name, setName] = useState("");
    return (
        <form action="">
            <label htmlFor="">Enter your name :
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    );
}

ReactDOM.render(
    <MyForm />, document.getElementById('root')
);
