import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { VscThreeBars } from 'react-icons/vsc';
import { FaSearch } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import { TbGift } from 'react-icons/tb';
import { FaToolbox } from 'react-icons/fa6';
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { GiMightySpanner } from "react-icons/gi";
import { SiBuzzfeed } from "react-icons/si";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('OrangeHRM');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };

  const secondListIcons = [
    <RiAdminFill />,
    <TbGift />,
    <FaToolbox />,
    <LuCalendarClock />,
    <BiSolidUserDetail />,
    <IoHomeOutline />,
    <FaAddressBook />,
    <GiMightySpanner />,
    <SiBuzzfeed />,
  ];

  const DrawerList = (
    <Box sx={{ width: 230,backgroundColor:'white' }} role="presentation">
    
       <Box role="presentation">
          <Typography
            variant="contained"
           className='typo-container typo-container-2'
          >
            <img src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1712736242/orangeLogo_p1vcvp.png" alt="orange" className="logo" /> 
            <p>Orange <span className='hrm-text'>HRM</span></p>
          </Typography>
          <br/>
          <Typography
            className='typo-container'
          >
            <FaSearch/>
           <p className='search-text'>Search</p>
          </Typography>
        </Box>
      <Divider />

      <List>
        {[
          'Admin',
          'PIM',
          'Leave',
          'Time',
          'My Info',
          'Dashboard',
          'Directory',
          'Maintenance',
          'Buzz',
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            className="list-item"
            selected={activeTab === text}
            onClick={() => handleTabClick(text)}
          >
            <ListItemButton
              sx={{
                backgroundColor: activeTab === text ? 'rgb(250, 109, 21)' : 'transparent',
                borderRadius: activeTab === text ? '0 28px 28px 0' : '0 28px 28px 0',
                marginRight: '20px',
                '&:hover': {
                  backgroundColor: activeTab !== text ? 'rgb(250, 109, 21)' : 'rgb(250, 109, 21)',
                },
              }}
            >
              <ListItemIcon className='list-item'>{secondListIcons[index]}</ListItemIcon>
              <ListItemText className='list-item' primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <VscThreeBars onClick={toggleDrawer(true)}  className='menu'/>
      <Drawer open={open} 
      onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
      
    </div>
  );
}
