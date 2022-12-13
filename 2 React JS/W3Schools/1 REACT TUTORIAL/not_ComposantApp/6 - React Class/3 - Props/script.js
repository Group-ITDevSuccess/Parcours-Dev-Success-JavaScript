class Car extends React.Component{
    render() {
        return (
            <h2>
               Hi, I am a {this.props.color} Car !
            </h2>
        );
    }
}

ReactDOM.render(<Car color="red" />, document.getElementById("root"));