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
                                <ListItem button key={text}>
                                    <ListItemIcon style={{ minWidth: 30, }} >
                                        {index % 2 === 0 ? <Link to='/mail/airplane'><AirplanemodeActive /></Link> : <Link to='/mail/car'><DirectionsCarFilled /></Link>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                    <Divider />
                                </ListItem>
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