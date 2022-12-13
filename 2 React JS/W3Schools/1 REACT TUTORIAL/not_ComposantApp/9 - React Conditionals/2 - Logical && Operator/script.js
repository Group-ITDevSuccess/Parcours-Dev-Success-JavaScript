function Garage(props) {
    const cars = props.cars;

    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    You have {cars.length} car in your garage.
                </h2>
            }
        </>
    );
}

const cars = ['Ford', 'DMW', 'Audi'];

ReactDOM.render(
    <Garage cars = {cars} />, document.getElementById('root')
);
