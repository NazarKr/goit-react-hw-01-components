import React from 'react';
import { FriendListUl } from './friendList.styled';
import { FriendListItem } from './friendListItem';

interface FriendListProps {
    friends: Array<{
        id: number;
        isOnline: boolean;
        avatar: string;
        name: string;
    }>
}

export const FriendList: React.FC<FriendListProps> = ({ friends }) => (
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
       );
