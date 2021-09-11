import { Grid } from '@material-ui/core'
import React from 'react'
import Post from '../Post'

export default function ListPost(): JSX.Element {
    return (
        <Grid container direction="column" spacing={3}>
            <Grid container item>
                <Grid item xs={12} sm={6}>
                    <Post />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Post />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Post />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Post />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Post />
                </Grid>
            </Grid>
        </Grid>
    )
}
