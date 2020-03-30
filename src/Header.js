import React, { Component } from "react";
import Background from "./img/heroImage.jpg";
import "./Header.css";
const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: "400px",
    backgroundSize: "cover"
};
class Header extends Component {
    render() {
        return (
            <header style={myStyles}>
                <h1 className="heroSection">{this.props.title}</h1>
                <p>
                    lorem ipsome to work offline and load faster, you can change
                </p>
        <a href="#button">{this.props.button}</a>
            </header>
        );
    }
}
export default Header;

// export default class Header extends Component {
//     render() {
//         return <img src={Background} alt="home"></img>;
//     }
// }
