import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ArrowBackIosNew, ArrowForwardIos, Mail, Home } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import Clock from 'react-live-clock';

import MailList from './MailList';
import CenterContent from './CenterContent';

import './Main.css'
import ListHome from './ListHome';

const openedMixin = (theme) => ({
    width: 200,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    position: 'relative',
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    position: 'relative',
    width: 0,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Main = () => {
    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);

    const leftHandleDrawer = () => {
        if (leftOpen === true) {
            setLeftOpen(false);
        } else {
            setLeftOpen(true)
        }
    };

    const leftSideDrawer = () => {
        if (leftOpen === false) {
            setLeftOpen(true);
        };
    }

    const rightHandleDrawer = () => {
        if (rightOpen === true) {
            setRightOpen(false);
        } else {
            setRightOpen(true)
        }
    };

    return (
        <>
            <div className='container'>
                {/* 상단 바 */}
                <div className='topBar' >
                    <Clock
                        className="clockTop"
                        format={'YYYY/MM/DD HH:mm:ss'}
                        ticking={true}
                        timezone={'Asia/Seoul'} />
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', float: 'left' }}>
                        {/* 좌측 메뉴버튼 */}
                        <div className='sideMenu'>
                            <Divider />
                            <List>
                                {['Home', 'Mail'].map((text, index) => (
                                    <>
                                        {index % 2 === 0 ?
                                            <Link to='/'>
                                                <ListItem button key={text} onClick={leftSideDrawer}>
                                                    <ListItemIcon style={{ minWidth: 30, color: '#3177d5' }} >
                                                        <Home />
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItem>
                                            </Link>
                                            :
                                            <Link to='/mail'>
                                                <ListItem button key={text} onClick={leftSideDrawer}>
                                                    <ListItemIcon style={{ minWidth: 30, color: '#3177d5' }} >
                                                        <Mail />
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItem>
                                            </Link>
                                        }
                                        <Divider />

                                    </>
                                ))}
                            </List>
                        </div>
                        {/* 좌측 움직이는 사이드바 */}
                        <div className='leftBar'>
                            <Drawer variant="permanent" open={leftOpen}>
                                <Routes>
                                    <Route path='/' element={<ListHome />} exact />
                                    <Route path='/mail/*' element={<MailList />} />
                                </Routes>
                            </Drawer>
                        </div>
                    </div>
                    <Button
                        className='sideBarBut'
                        variant="contained"
                        onClick={leftHandleDrawer}
                    >
                        {leftOpen === true ? <ArrowBackIosNew /> : <ArrowForwardIos />}
                    </Button>
                    {/* 메인화면 */}
                    <div className='content'>
                        <CenterContent />
                    </div>
                    {/* 우측 움직이는 사이드바 */}
                    <div className='rightBar'>
                        <Button
                            className='sideBarBut'
                            variant="contained"
                            onClick={rightHandleDrawer}
                        >
                            {rightOpen === true ? <ArrowForwardIos /> : <ArrowBackIosNew />}
                        </Button>
                        <Drawer variant="permanent" anchor="right" open={rightOpen}>
                            <div>
                                여기는 우측 사이드바
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;