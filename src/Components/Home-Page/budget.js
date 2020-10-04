import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
    {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsmallbusiness.co.uk%2Fquick-way-boost-cash-flow-business-2535634%2F&psig=AOvVaw1_vyLIpCrlN_IgKlaajaRd&ust=1601846610081000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjl0eWtmewCFQAAAAAdAAAAABAD',
        title: 'Budget',
        width: '100%',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minWidth: 200,
        width: '100%',
    },
    // paper: {
    //     height: '50vh',
    //     width: 100,
    //     backgroundColor:
    // },
    image: {
        position: 'relative',
        height: 125,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                // border: '4px solid currentColor', Almost impossible to ratio on small screens -- Revisit
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        // position: 'relative',
        // padding: '2%',
    },
    imageMarked: {
        // height: 3,
        // width: 18,
        // backgroundColor: theme.palette.common.white,
        // position: 'absolute',
        // bottom: -2,
        // left: 'calc(50% - 9px)',
        // transition: theme.transitions.create('opacity'),
    },
    itemDivisor: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px'

    }
}));

export default function ButtonBases() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {images.map(image => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${image.url})`,
              }}
          />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
                </ButtonBase>
            ))}
        </div>
    );
}