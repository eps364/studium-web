import BottomNavigation from '@material-ui/core/BottomNavigation'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles({
    root: {},
})

export default function Footer(): JSX.Element {
    const classes = useStyles()

    return (
        <BottomNavigation className={classes.root}>
            <Typography variant="h6" color="inherit">
                Teste
            </Typography>
        </BottomNavigation>
    )
}
