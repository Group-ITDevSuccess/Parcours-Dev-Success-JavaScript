const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'Car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

// old way :
function myVehicle(vehicle) {
    const message = `My ${vehicle.type} is a ${vehicle.color} ${vehicle.brand} ${vehicle.model} .`
    document.write(message);
}