import React, {Component} from "react";
import axios, {LOCAL_SESSION_TOKEN} from "../../Axios";
import LayoutTextFields3 from "./line";
import ButtonBases from "./budget";
import CustomizedSteppers from "./new-stepper";

/* Someone working from the home page can work from here
*
* Strong urge to use Material UI components
* https://material-ui.com/components/tabs/#tabs - Example
* This makes life so much easier if we can plug and play and just focus on the features we want to have
* rather than the design
* */


class HomeIndex extends Component {

    state = {
        ourContextData: {},
        profile: null
    };

    componentDidMount() {

        // Working example of data being retrieved from the API.
        /* Breaking it down:
        * axios - We are using our generic axios request we built in ../../Axios
        * thirdPartyMemberapi - This is where we should add more api calls -- all we're doing is passing in the action and the token
        * getMemberAccounts - We are accessing the first method which has 2 parameters
        * Basic js shiz to get the data -- We could save the data as a state -- which means we can use it within this home context:
        * for example //// const ourContextData = res.data >> Have a look at the console for more info
        * More examples - https://www.digitalocean.com/community/tutorials/react-axios-react
        * */
        axios.thirdPartyMemberAPI.login("true")
            .then(res => {
                axios.thirdPartyMemberAPI.getMemberAccounts("accounts", res.data.token)
                    .then(res => {
                            console.log(res.data);
                            this.setState({
                                ourContextData: res.data,
                            })
                        }
                    );
            });
    }

    handleChangeState = (profile) => {
        return this.setState({
            profile
        });
    };

    render() {
        if (this.state.profile) {
            return (
                <div>
                    <div>
                        <LayoutTextFields3 profile={this.state.profile} active={2}/>
                    </div>
                    <div style={{paddingTop: '3%'}}>
                        <ButtonBases/>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <CustomizedSteppers finishedStepper={this.handleChangeState}/>
                    </div>
                    {/*<React.Fragment>*/}
                    {/*    <HorizontalLabelPositionBelowStepper showGraph={this.state.intialisedProfile} handleChange={this.handleChangeState} />*/}
                    {/*</React.Fragment>*/}
                    {/*<div>*/}
                    {/*    <Line/>*/}
                    {/*</div>*/}


                </div>
            )
        }
    }
}

export default HomeIndex;