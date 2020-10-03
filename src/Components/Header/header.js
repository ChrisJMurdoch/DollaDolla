import React, {Component} from "react";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import axios from "../../Axios";



class Header extends Component {

    state = {
        activeTab: 0,
        navBarRouting: false
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        /* Depending on the route -- We're switching  */
        switch (nextProps.location.pathname) {
            case "/home":
                return {
                    activeTab: 0,
                    navBarRouting: true
                };
            case "/accountbreakdown":
                return {
                    activeTab: 1,
                    navBarRouting: true
                };
            case "/support":
                return {
                    activeTab: 2,
                    navBarRouting: true
                };

            default:
                return {
                    activeTab: 0,
                    navBarRouting: true
                }
        }
    };


    getStyle = () => {
        return {
            flexGrow: 1,
        }
    };

    handleChange = (e, newValue) => {
        if (this.state.activeTab === newValue) {
            return;
        }
        this.setState({activeTab: newValue});
        this.setState({navBarRouting: true})
    };



    render() {
        return (
            <React.Fragment>
                <Paper style={this.getStyle()}>
                    <Tabs
                        value={this.state.activeTab}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered
                    >
                        <Tab label="Home" component={Link} to="/home" index={0}/>
                        <Tab label="Accounts" component={Link} to="/accountbreakdown" index={1} />
                        <Tab label="Support" component={Link} to="/support" index={2} />
                    </Tabs>
                </Paper>
            </React.Fragment>
        );
    }
}

export default Header;