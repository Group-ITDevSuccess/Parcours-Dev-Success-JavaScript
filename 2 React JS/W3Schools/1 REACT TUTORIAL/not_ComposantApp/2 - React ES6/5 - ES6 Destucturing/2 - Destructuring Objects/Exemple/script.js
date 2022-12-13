const vehiculeOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle(vehiculeOne)

function myVehicle({model, registration: {state}}) {
    const message = `My ${model} is registered in ${state}.`;
    document.getElementById("demo").innerHTML = message;
}