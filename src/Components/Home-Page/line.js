import React from 'react';
import {
    ArgumentAxis,
    Chart,
    CommonSeriesSettings,
    Export,
    Grid,
    Legend,
    Margin,
    Series,
    Subtitle,
    Title,
    Tooltip
} from 'devextreme-react/chart';
import Slide from "@material-ui/core/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";


const types = ['line', 'stackedline', 'fullstackedline'];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    textButtonRoot: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const energySources = [{value: "amountSaved", name: "Balance"}, {value: "amountProjected", name: "Savings projection"}];


let countriesInfo = [
    {
        month: "Jan",
        amountSaved: 314,
        amountProjected: 0,
    },
    {
        month: "Feb",
        amountSaved: 187,
        amountProjected: 70,
    },
    {
        month: "Mar",
        amountSaved: 194,
        amountProjected: 140,
    },
    {
        month: "Apr",
        amountSaved: 169,
        amountProjected: 210,
    },
    {
        month: "May",
        amountSaved: 222,
        amountProjected: 280,
    },
    {
        month: "June",
        amountSaved: 312,
        amountProjected: 350,
    }
];

class LayoutTextFields3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'line'
        };
        this.handleChange = this.handleChange.bind(this);



    }

    render() {
        return (
            <React.Fragment>
                <Slide direction="up" in={this.props.active === 2} mountOnEnter unmountOnExit>
                    <Chart
                        palette="ocean"
                        dataSource={countriesInfo}
                    >
                        <CommonSeriesSettings
                            argumentField="month"
                            type={this.state.type}
                        />
                        {
                            energySources.map(function (item) {
                                return <Series key={item.value} valueField={item.value} name={item.name}/>;
                            })
                        }
                        <Margin bottom={20}/>
                        <ArgumentAxis
                            valueMarginsEnabled={false}
                            discreteAxisDivisionMode="crossLabels"
                        >
                            <Grid visible={true}/>
                        </ArgumentAxis>
                        <Legend
                            verticalAlignment="bottom"
                            horizontalAlignment="center"
                            itemTextPosition="bottom"
                        />
                        <Title text={`${this.props.profile.name}'s Dashboard`}>
                            <Subtitle text="Here's your current balance:"/>
                        </Title>
                        <Tooltip enabled={true}/>
                    </Chart>
                </Slide>
            </React.Fragment>
        );
    }

    handleChange(e) {
        this.setState({type: e.value});
    }
}

export default LayoutTextFields3;
