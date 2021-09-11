import { Card, CardContent, CardHeader } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React from 'react'
import Actions from '../ActionsPost'

const useStyles = makeStyles({
    root: {},
})

export default function Comments(): JSX.Element {
    const classes = useStyles()

    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card>
            <CardHeader
                avatar={<Avatar aria-label=""></Avatar>}
                action={
                    <IconButton aria-label="">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Fulano de Tal"
                subheader="September 14, 2021"
            />
            <CardContent>
                Este artigo é um exemplo de como criar um componente de
                comentários.
            </CardContent>
            <Actions />
        </Card>
    )
}
