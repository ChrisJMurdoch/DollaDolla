import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Fade from "@material-ui/core/Fade";


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

// Model of profile
let buildProfile = {
    name: 'Aidan Test',
    age: 25,
    degree: 'Acturial Science',
    goals: [
        {
            targetDate: '2018',
            targetAmount: 800,
            moneyToSplashOn: 'Trip To Paris'
        },
        {
            targetDate: '2019',
            targetAmount: 2000,
            moneyToSplashOn: 'Macbook Pro 2020 Edition'
        }
    ],

};


export default function LayoutTextFields(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setChecked(false);
    };

    return (
        <Fade in={checked} timeout={1000}>
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <div style={{paddingTop: '3%'}}>
                        <Typography
                            component="span"
                            variant="caption"
                            color="secondary"
                            className={classes.imageTitle}
                        >
                            Enter Some Details About Yourself
                        </Typography>
                        <TextField
                            id="name"
                            label="Name"
                            placeholder="Chris Vechellia"
                            fullWidth
                            color="secondary"
                            style={{margin: 8}}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="age"
                            label="Age"
                            type="number"
                            placeholder="21"
                            color="secondary"
                            fullWidth
                            style={{margin: 8}}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="degree"
                            label="Degree"
                            placeholder="Computer Science"
                            fullWidth
                            style={{margin: 8}}
                            color="secondary"
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Typography
                            component="span"
                            variant="caption"
                            color="secondary"
                            className={classes.imageTitle}
                        >
                            Set Your Goals
                        </Typography>

                        <div style={{paddingTop: '2%'}}>

                            <TextField
                                id="date"
                                label="Target Date"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                onChange={handleChange}
                                color="secondary"
                                fullWidth
                                style={{margin: 8}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="goalAmount"
                                label="Target Amount"
                                type="number"
                                placeholder="£1000"
                                color="secondary"
                                fullWidth
                                style={{margin: 8}}
                                className={classes.textField}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <TextField
                            id="moneyToSplash"
                            label="What Would You Spend Your Saved Money On"
                            style={{margin: 8, paddingBottom: '5%'}}
                            placeholder="A Trip to France"
                            onChange={handleChange}
                            color="secondary"

                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>


                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        type="submit"
                        label="Intialise Profile"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                    >
                        Initialise Profile
                    </Button>

                </div>
            </form>
        </Fade>
    );
}
