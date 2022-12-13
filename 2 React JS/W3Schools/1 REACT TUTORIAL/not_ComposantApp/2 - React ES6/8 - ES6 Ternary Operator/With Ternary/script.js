function renderApp() {
    document.getElementById("demo").innerHTML = "Welcome!";
}

function renderLogin() {
    document.getElementById("demo").innerHTML = "Please log in";
}

let authenticated = false;

authenticated ? renderApp() : renderLogin();