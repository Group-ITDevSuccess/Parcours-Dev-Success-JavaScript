function Car(props) {
    return <h2>I am a {props.brand} !</h2>;
}

function Garage() {
    const carName = "Ford";
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand = {carName} />
        </>
    );
}


ReactDOM.render(<Garage />, document.getElementById("root"));