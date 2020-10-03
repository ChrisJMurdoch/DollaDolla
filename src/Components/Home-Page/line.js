import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';

const format = () => tick => tick;
const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
const legendLabelStyles = theme => ({
    label: {
        paddingTop: theme.spacing(1),
        whiteSpace: 'nowrap',
    },
});
const legendItemStyles = () => ({
    item: {
        flexDirection: 'column',
    },
});

const data = [
    { date: new Date(2017, 0, 8), price: 991 },
    { date: new Date(2017, 1, 9), price: 1028 },
    { date: new Date(2017, 2, 9), price: 1251 },
    { date: new Date(2017, 3, 6), price: 1103 },
    { date: new Date(2017, 4, 4), price: 1392 },
    { date: new Date(2017, 5, 11), price: 2747 },
    { date: new Date(2017, 6, 19), price: 2203 },
    { date: new Date(2017, 7, 18), price: 4114 },
    { date: new Date(2017, 8, 19), price: 3840 },
    { date: new Date(2017, 9, 19), price: 5591 },
    { date: new Date(2017, 10, 14), price: 6716 },
    { date: new Date(2017, 11, 22), price: 17905 },
    { date: new Date(2018, 0, 23), price: 11438 },
    { date: new Date(2018, 1, 10), price: 8125 },
    { date: new Date(2018, 2, 6), price: 11079 },
    { date: new Date(2018, 3, 7), price: 6913 },
    { date: new Date(2018, 4, 9), price: 9511 },
    { date: new Date(2018, 5, 6), price: 7553 },
    { date: new Date(2018, 6, 18), price: 6400 },
];

// const data = [
//
//     {
//         year: 1995, tvNews: 13000, church: 32, military: 33,
//     }, {
//         year: 1997, tvNews: 14000, church: 35, military: 30,
//     }, {
//         year: 1999, tvNews: 15000, church: 32, military: 34,
//     }, {
//         year: 2001, tvNews: 16000, church: 28, military: 32,
//     }, {
//         year: 2003, tvNews: 17000, church: 27, military: 48,
//     }, {
//         year: 2006, tvNews: 18000, church: 28, military: 41,
//     }, {
//         year: 2008, tvNews: 22000, church: 26, military: 45,
//     }, {
//         year: 2010, tvNews: 25000, church: 25, military: 44,
//     }, {
//         year: 2012, tvNews: 29000, church: 25, military: 43,
//     }, {
//         year: 2014, tvNews: 33000, church: 25, military: 39,
//     }, {
//         year: 2018, tvNews: 34000, church: 20, military: 41,
//     }, {
//         year: 2019, tvNews: 35000, church: 20, military: 43,
//     },
// ];

const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
    chart: {
        paddingRight: '20px',
    },
    title: {
        whiteSpace: 'pre',
    },
});

const ValueLabel = (props) => {
    const { text } = props;
    return (
        <ValueAxis.Label
            {...props}
            text={`£${text}`}
        />
    );
};

const titleStyles = {
    title: {
        whiteSpace: 'pre',
    },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
    <Title.Text {...props} className={classes.title} />
));

class Line extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;
        const { classes } = this.props;

        return (
            <Paper elevation={3}>
                <Chart
                    data={chartData}
                    className={classes.chart}
                >
                    <ArgumentAxis tickFormat={format} />
                    <ValueAxis
                        max={50000}
                        labelComponent={ValueLabel}
                    />

                    <LineSeries
                        name="Buying a House"
                        valueField="price"
                        argumentField="date"
                    />


                    <Animation />
                </Chart>
            </Paper>
        );
    }
}

export default withStyles(demoStyles, { name: 'Line' })(Line);
