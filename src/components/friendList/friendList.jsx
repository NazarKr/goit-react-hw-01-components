import React from 'react';
import Box from '../profile/Box';
import { FriendListUl } from './friendList.styled';
import { FriendListItem } from './friendListItem';

export const FriendList = ({ friends }) => (
         <Box
           bg="backGround"
           ml="2"
           mr="2"
           width="100%"
           display="flex"
         >
           <FriendListUl>
             {friends.map(({ id, isOnline, avatar, name }) => (
               <FriendListItem
                 key={id}
                 avatar={avatar}
                 name={name}
                 isOnline={isOnline}
               />
             ))}
           </FriendListUl>
         </Box>
       );
