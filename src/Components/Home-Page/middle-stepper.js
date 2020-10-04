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
                            <TextField
                            style={{marginBottom: '5%', marginTop: '5%'}}
                                id="moneyToSplash"
                                label="What's your spending goal?"
                                placeholder="A Trip to France"
                                onChange={handleChange}
                                color="secondary"
                                className={classes.textField}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                            style={{marginBottom: '5%', marginTop: '5%'}}
                                id="targetAmount"
                                label="How much will it cost? (£)"
                                type="number"
                                placeholder="350"
                                color="secondary"
                                fullWidth
                                className={classes.textField}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                            style={{marginBottom: '5%', marginTop: '5%'}}
                                id="targetDate"
                                label="And when would you like to have it by?"
                                type="date"
                                defaultValue="2020-25-12"
                                className={classes.textField}
                                onChange={handleChange}
                                color="secondary"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField className={classes.textField} label="Finally, what's your monthly budget? (£)" type="number"
                                       id="startingCash" placeholder="2000" color="secondary"
                                       onChange={handleChange}/>

                        </div>
                    </div>


                </div>
            </form>
        </Slide>
    );
}
