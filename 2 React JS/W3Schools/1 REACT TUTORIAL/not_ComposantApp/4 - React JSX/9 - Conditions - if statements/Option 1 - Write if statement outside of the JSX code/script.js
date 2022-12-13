const x = 5;
let text = "Salam Alaikum Muriel";

if (x < 10){
    text = text.toUpperCase();
}

const myelement = <h1>{text}</h1>;

    ReactDOM.render(myelement, document.getElementById("root"));