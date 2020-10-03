import React, {Component} from "react";
import { PieChart } from 'react-minimal-pie-chart';
/* Someone working for the account page can work from here*
* Strong urge to use Material UI components
* https://material-ui.com/components/tabs/#tabs - Example
* This makes life so much easier if we can plug and play and just focus on the features we want to have
* rather than the design
* */
class AccountBreakdownIndex extends Component {
    render() {

        const s1 = {
            height:'500px'
        }

        return (
            <div>
                <PieChart
                    animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    data={[
                        {
                        color: "#E38627",
                        title: "One",
                        value: 10,
                        },
                        {
                        color: "#C13C37",
                        title: "Two",
                        value: 15,
                        },
                        {
                        color: "#6A2135",
                        title: "Three",
                        value: 20,
                        },
                    ]}
                    labelPosition={50}
                    lengthAngle={360}
                    lineWidth={15}
                    paddingAngle={0}
                    radius={50}
                    rounded
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                />
            </div>
        )
    }
}

export default AccountBreakdownIndex;