import React from 'react';
import { FriendImg, FriendItemLi, FriendName, FriendStatusSpan } from './friendList.styled';

interface FriendListItemProps {
  isOnline: boolean;
  avatar: string;
  name: string;
}

export const FriendListItem: React.FC<FriendListItemProps> = ({ isOnline, avatar, name }) => (
         <FriendItemLi>
           <FriendStatusSpan type={isOnline.toString()}></FriendStatusSpan>
           <FriendImg src={avatar} alt="User avatar" width="48" />
           <FriendName>{name}</FriendName>
         </FriendItemLi>
       );
