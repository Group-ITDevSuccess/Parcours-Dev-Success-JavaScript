const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'Car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);


function myVehicle({type, color, brand, model}) {
    const message = `My ${type} is a ${color} ${brand} ${model} .`
    document.write(message);
}