import React from 'react';
import Box from './Box';
import { Card, Description, UserAvatar, UserName, UserTag, UserLocation, UserStatsList, UserStatsItem, UserLabel, UserQuantity, } from './profile.styled';
import PropTypes from 'prop-types';


export const Profile = ({ username, tag, location, avatar, stats }) => (
         <Box
           bg="backGround"
           ml="2"
           mr="2"
           width="100%"
           display="flex"
         >
           <Card>
             <Description>
               <UserAvatar src={avatar} alt="User avatar" />
               <UserName>{username}</UserName>
               <UserTag>@{tag}</UserTag>
               <UserLocation>{location}</UserLocation>
             </Description>

             <UserStatsList>
               <UserStatsItem>
                 <UserLabel>Followers</UserLabel>
                 <UserQuantity>{stats.followers}</UserQuantity>
               </UserStatsItem>
               <UserStatsItem>
                 <UserLabel>Views</UserLabel>
                 <UserQuantity>{stats.views}</UserQuantity>
               </UserStatsItem>
               <UserStatsItem>
                 <UserLabel>Likes</UserLabel>
                 <UserQuantity>{stats.likes}</UserQuantity>
               </UserStatsItem>
             </UserStatsList>
           </Card>
         </Box>
       );


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}