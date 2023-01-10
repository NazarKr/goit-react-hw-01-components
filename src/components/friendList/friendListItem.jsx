import React from 'react';
import { FriendImg, FriendItemLi, FriendName, FriendStatusSpan } from './friendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => (
         <FriendItemLi>
           <FriendStatusSpan type={isOnline.toString()}></FriendStatusSpan>
           <FriendImg src={avatar} alt="User avatar" width="48" />
           <FriendName>{name}</FriendName>
         </FriendItemLi>
       );
