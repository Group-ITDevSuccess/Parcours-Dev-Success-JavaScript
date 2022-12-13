function Football() {
    const shoot = (a, b) => {
      alert(b.type);
    }

    return (
        <button onClick={(event) => shoot("Goal !", event)} type="button">Take the Shot!</button>
    );
}

ReactDOM.render(<Football />, document.getElementById("root"));