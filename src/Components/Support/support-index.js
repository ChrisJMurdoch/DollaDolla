import React, {Component} from "react";

// Create AI
import AI from '../../AI.js';
const HAL = new AI(
    2000, // Balance
    2300, // Goal
    { // Spending breakdown
        netflix:7.99,
        amazon:19.21,
        tesco: 54.32
    }
);

class SupportIndex extends Component {
    
    constructor(props) {
        super(props);

        this.state = { query: '', reply: "Hello, I'm your financial assistant, how can I help?" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState( { query: event.target.value } );
      }
    
      handleSubmit(event) {
        this.setState( { reply: HAL.ask(this.state.query) } );
        this.setState( { query: '' } );
        event.preventDefault();
      }
    
      render() {

        const bodyStyle = {
            paddingLeft: "25vw",
            paddingRight: "25vw",
            paddingTop: "25vh",
            fontFamily: "Helvetica",
        };

        const replyStyle = {
            color: "grey",
            fontSize: "2rem",
            fontFamily: "Helvetica",
        };

        const formStyle = {
            width: "100%",
            padding: "10%",
        };

        const labelStyle = {
            width: "100%",
        };

        const queryStyle = {
            borderBottomWidth: "2px",
            width: "100%",
        };

        return (
            <div style={bodyStyle}>

                <div style={replyStyle}>{this.state.reply}</div>

                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <label style={labelStyle}>
                        <input style={queryStyle} type="text" value={this.state.query} onChange={this.handleChange} />
                    </label>
                </form>

            </div>
        );
      }
}

export default SupportIndex;