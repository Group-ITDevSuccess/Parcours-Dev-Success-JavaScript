const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
  return (
      <>
          <h1 style={{color: "red"}}>Hello Style!</h1>
          <p style={{backgroundColor:"lightblue"}}>Add a little style!</p>
          <p style={myStyle} >Another Style</p>
      </>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));