import React, { Component } from "react";
import "./Services.css";
export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <h3>Servicer</h3>
                <h2>What we offer</h2>
                <div className="row">
                    <div>
                        <span>
                            <i class="fas fa-mobile-alt"></i>
                        </span>
                        <h4>Responsive</h4>
                        <p>Looks great on the screen</p>
                    </div>
                    <div>
                        <span>
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                        <h4>Redesign</h4>
                        <p>Freshly redesign for bootstrap 4</p>
                    </div>
                    <div>
                        <span>
                            <i class="far fa-thumbs-up"></i>
                        </span>
                        <h4>Favourite</h4>
                        <p>Million of user</p>
                    </div>
                    <div>
                        <span>
                            <i class="fas fa-question"></i>
                        </span>
                        <h4>Question</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}
