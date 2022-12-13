class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description: 'The component of a textarea goes in the value attribute'
        };
    }

    render() {
        return (
            <form>
                <textarea name="" id="" cols="30" rows="10" value={this.state.description} />
            </form>
        );
    }

}
ReactDOM.render(
    <MyForm />, document.getElementById('root')
);
