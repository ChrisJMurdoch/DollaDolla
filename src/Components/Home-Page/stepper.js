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


export default function LayoutTextFields1(props) {
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
        <Slide direction="right" in={props.active === 0} mountOnEnter unmountOnExit>
            <form onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <div style={{paddingTop: '3%', width:'100%'}}>
                        <div style={{marginBottom: '5%', marginTop: '5%'}}>
                            <TextField
                            style={{marginBottom: '5%', marginTop: '5%'}}
                                id="name"
                                label="What's your name?"
                                className={classes.textField}
                                color="secondary"
                                fullWidth
                                placeholder="John Smith"
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                            style={{marginBottom: '5%', marginTop: '5%'}}
                             className={classes.textField} label="Where do you live?"
                                       id="addr" placeholder="Edinburgh " color="secondary"
                                       onChange={handleChange}                                InputLabelProps={{
                                shrink: true,
                            }}/>
                        </div>

                    </div>

                </div>
            </form>
        </Slide>
    );
}
