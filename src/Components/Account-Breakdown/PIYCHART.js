import React from 'react';

import PieChart, {Connector, Export, Label, Series, Size} from 'devextreme-react/pie-chart';
import Paper from "@material-ui/core/Paper";
import LinearProgressWithLabel from "./Loading-bar";

export const areas = [{
    buckets: 'Rent',
    area: 1364
}, {
    buckets: 'Savings',
    area: 1200
}, {
    buckets: 'Debt Repayment',
    area: 958
}, {
    buckets: 'Food/Groceries',
    area: 479
}, {
    buckets: 'Transportation',
    area: 148
}, {
    buckets: 'Utilities + Wi-Fi',
    area: 109
}, {
    buckets: 'Phone/s',
    area: 105
}, {
    buckets: 'Insurance/s',
    area: 216
}];


class PIYCHART extends React.Component {
    constructor(props) {
        super(props);

        this.pointClickHandler = this.pointClickHandler.bind(this);
        this.legendClickHandler = this.legendClickHandler.bind(this);
    }

    render() {
        return (
            <Paper elevation={3}>
                <div>
                    <PieChart
                        id="pie"
                        dataSource={areas}
                        palette="Bright"
                        title="Your Spending Patterns (£)"
                        onPointClick={this.pointClickHandler}
                        onLegendClick={this.legendClickHandler}
                    >
                        <Series
                            argumentField="buckets"
                            valueField="area"
                        >
                            <Label visible={true}>
                                <Connector visible={true} width={1}/>
                            </Label>
                        </Series>

                        <Size width={500}/>
                    </PieChart>
                </div>

                <div>
                    <LinearProgressWithLabel value={38}/>
                </div>
            </Paper>
        );
    }

    pointClickHandler(e) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e) {
        let arg = e.target;
        let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    toggleVisibility(item) {
        item.isVisible() ? item.hide() : item.show();
    }
}

export default PIYCHART;
