import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
)

export default function Navbar(): JSX.Element {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="end"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h3" className={classes.title}>
                    <Button color="inherit" href="/">
                        {process.env.NEXT_PUBLIC_NAME}
                    </Button>
                </Typography>
                <Button color="inherit" href="login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}
