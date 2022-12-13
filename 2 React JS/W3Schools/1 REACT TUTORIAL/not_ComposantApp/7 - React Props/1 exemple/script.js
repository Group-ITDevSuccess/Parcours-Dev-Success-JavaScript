function Car(props) {
    return <h2>I am a {props.brand} !</h2>;
}

const myelement = <Car brand = "Ford" />;

ReactDOM.render(myelement, document.getElementById("root"));