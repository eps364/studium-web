import {
    CardActions,
    CardContent,
    Collapse,
    Typography,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CommentIcon from '@material-ui/icons/Comment'
import EditIcon from '@material-ui/icons/Edit'
import EventNoteIcon from '@material-ui/icons/EventNote'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 20,
            padding: 20,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    })
)

const handleLike = () => {
    alert('Gostei')
}
const handleImprove = () => {
    alert('Melhorar')
}
const handleDenounce = () => {
    alert('Denunciar')
}
const handleRead = () => {
    alert('Ler')
}
const handleEdit = () => {
    alert('Editar')
}

export default function Post() {
    const classes = useStyles()

    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <CardActions disableSpacing>
                <IconButton aria-label="Gostei" onClick={handleLike}>
                    <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="Melhorar" onClick={handleImprove}>
                    <TrendingUpIcon />
                </IconButton>

                <IconButton aria-label="Denunciar" onClick={handleDenounce}>
                    <NotificationImportantIcon />
                </IconButton>

                <IconButton aria-label="Ler" onClick={handleRead}>
                    <EventNoteIcon />
                </IconButton>

                <IconButton aria-label="Editar" onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Comentarios"
                >
                    <CommentIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                    </Typography>
                </CardContent>
            </Collapse>
        </>
    )
}
