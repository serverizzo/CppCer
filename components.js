import React from "react";
import ReactDOM from 'react-dom';


class Title extends React.Component{

    render(){
        return(
            <h1>Hello World! I am from the components</h1>
        )
    }

}
ReactDOM.render(<Title />, document.getElementById("Title"));