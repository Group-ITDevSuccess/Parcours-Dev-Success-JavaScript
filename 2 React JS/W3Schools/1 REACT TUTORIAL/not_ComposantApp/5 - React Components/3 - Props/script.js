function Car(props) {
    return <h2>I have a {props.color} Car !</h2>
}

ReactDOM.render(<Car color="red" />, document.getElementById("root"));