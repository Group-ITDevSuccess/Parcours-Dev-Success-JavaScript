class Car extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>
               Hi, I am a {this.props.model} Car !
            </h2>
        );
    }
}

ReactDOM.render(<Car model="Mustang" />, document.getElementById("root"));