class Car extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    render() {
        return (
            <div>
               <h1>Hi, I am a Car !</h1>
            </div>
        );
    }
}

ReactDOM.render(<Car />, document.getElementById("root"));