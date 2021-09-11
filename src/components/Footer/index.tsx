import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AppLink from '../../components/AppLink';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        width: '100vw',
        height: 50,
        bottom: 0,
    },
});

export default function Footer(): JSX.Element {
    const classes = useStyles();
    return (
        <BottomNavigation className={classes.root}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}

                <AppLink
                    label={process.env.NEXT_PUBLIC_NAME}
                    href="https://studium.blog.br"
                />
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </BottomNavigation>
    );
}
