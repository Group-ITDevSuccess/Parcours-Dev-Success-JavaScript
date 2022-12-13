class Header extends React.Component{
    render() {
        return (
            <h1>
               My Favorite Color is Red.
            </h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById("root"));