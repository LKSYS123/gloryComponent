import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AirplanemodeActive, DirectionsCarFilled } from '@mui/icons-material';

const MailList = () => {
    return (
        <>
            <div>
                <div style={{ height: '100vh', backgroundColor: 'white' }}>
                    <List>
                        {['Airplane', 'Car'].map((text, index) => (
                            <>
                                {index % 2 === 0 ?
                                    <Link to='/mail/airplane'>
                                        <ListItem button key={text}>
                                            <ListItemIcon style={{ minWidth: 30, color: '#3177d5' }} >
                                                <AirplanemodeActive />
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Link>
                                    :
                                    <Link to='/mail/car'>
                                        <ListItem button key={text}>
                                            <ListItemIcon style={{ minWidth: 30, color: '#3177d5' }} >
                                                <DirectionsCarFilled />
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
            </div>
        </>
    )
}

export default MailList;