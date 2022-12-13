function MyForm() {
    return (
        <form action="">
            <label htmlFor="">Enter your name :
                <input type="text"/>
            </label>
        </form>
    );
}

ReactDOM.render(
    <MyForm />, document.getElementById('root')
);
