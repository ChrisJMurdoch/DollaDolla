import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: '50%',
    },
    textButtonRoot: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// Model of profile


export default function LayoutTextFields2(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.preventDefault();
        props.profile[event.target.id] = event.target.value;
        console.log(props.profile);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setChecked(false);
    };

    return (
        <Slide direction="right" in={props.active === 1} mountOnEnter unmountOnExit>
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <div style={{paddingTop: '3%'}}>
                        <div style={{paddingBottom: '5%',}}>
                            <TextField className={classes.textField} label="Monthly Income(£)" type="number"
                                       id="startingCash" placeholder="7000" color="secondary"
                                       onChange={handleChange}/>

                            <TextField
                                id="targetDate"
                                label="Target Date"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                onChange={handleChange}
                                color="secondary"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="targetAmount"
                                label="Target Amount"
                                type="number"
                                placeholder="£1000"
                                color="secondary"
                                fullWidth
                                className={classes.textField}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="moneyToSplash"
                                label="Your Goal From Saving"
                                placeholder="A Trip to France"
                                onChange={handleChange}
                                color="secondary"
                                className={classes.textField}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>


                </div>
            </form>
        </Slide>
    );
}
