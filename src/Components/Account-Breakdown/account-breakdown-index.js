import React, {Component} from "react";
import PIYCHART from "./PIYCHART";
import BasicTable from "./table";

/* Someone working for the account page can work from here*
* Strong urge to use Material UI components
* https://material-ui.com/components/tabs/#tabs - Example
* This makes life so much easier if we can plug and play and just focus on the features we want to have
* rather than the design
* */
class AccountBreakdownIndex extends Component {
    render() {
        return (
            <div>
                <div>
                    <PIYCHART/>
                </div>

                <div style={{paddingTop: '5%'}}>
                    <BasicTable/>
                </div>
            </div>
        )
    }
}

export default AccountBreakdownIndex;