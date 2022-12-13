class Car extends React.Component{
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return (
            <h2>
               Hi, I am a {this.state.color} Car !
            </h2>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById("root"));