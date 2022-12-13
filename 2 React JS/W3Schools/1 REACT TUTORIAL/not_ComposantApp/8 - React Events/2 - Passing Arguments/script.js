function Football() {
    const shoot = (a) => {
      alert(a);
    }

    return (
        <button onClick={() => shoot("Goal !")} type="button">Take the Shot!</button>
    );
}

ReactDOM.render(<Football />, document.getElementById("root"));