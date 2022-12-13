function Football() {
    const shoot = () => {
      alert("Great Shot");
    }

    return (
        <button onClick={shoot} type="button">Take the Shot!</button>
    );
}

ReactDOM.render(<Football />, document.getElementById("root"));