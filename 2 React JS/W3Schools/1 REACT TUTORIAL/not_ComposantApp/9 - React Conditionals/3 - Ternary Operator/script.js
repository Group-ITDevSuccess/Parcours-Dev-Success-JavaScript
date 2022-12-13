function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>GOAL!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;

    return (
        <>
            {isGoal? <MadeGoal /> : <MissedGoal />}
        </>
    )
}


ReactDOM.render(
    <Goal isGoal={true} />, document.getElementById('root')
);
