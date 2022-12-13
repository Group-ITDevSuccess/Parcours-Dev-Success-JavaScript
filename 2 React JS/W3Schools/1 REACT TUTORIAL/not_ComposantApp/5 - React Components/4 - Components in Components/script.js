function Car() {
    return <h2>I am a Car !</h2>
}

function Garage(){
    return (
        <>
            <h1>Who lives in my Garage ?</h1>
            <Car />
        </>
    );
}

ReactDOM.render(<Garage />, document.getElementById("root"));