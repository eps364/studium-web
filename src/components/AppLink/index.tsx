/* eslint-disable no-use-before-define */
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface AppLinkProps extends LinkProps {
    href: string
    label: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 2,
            padding: 2,
            textDecoration: 'none',
            color: 'inherit',
            all: 'inherit',
        },
    })
)

const AppLink: React.FC<AppLinkProps> = ({ href, label }: AppLinkProps) => {
    const classes = useStyles()
    return (
        <Button className={classes.root} variant="text" color="inherit">
            <Link href={href}>
                <a>{label}</a>
            </Link>
        </Button>
    )
}

export default AppLink
