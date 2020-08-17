import React from 'react';
import "./sidebar.css";
import { sidebarState } from '../../store';
import { useRecoilValue } from 'recoil';
import { pages } from '../../utils';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/Listitem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Link, useRouteMatch } from 'react-router-dom';


export default () => {
    let { url } = useRouteMatch();
    const state = useRecoilValue(sidebarState)
    const getPages = () => {
        return pages.map(page => {
            return (
                <ListItem component={Link} to={`${url}${page.uri}`} key={page.id} button>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>
                    <ListItemText primary={page.name} />
                </ListItem>
            )
        })
    }

    return (
        <Box id="sidebar" className={`${state ? "open" : "hide"}`}>
            <List>
                {getPages()}
            </List>
        </Box>
    )
}
