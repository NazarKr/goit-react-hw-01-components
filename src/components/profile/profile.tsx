import React from 'react';
import {
  Card,
  Description,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  UserLabel,
  UserQuantity,
} from './profile.styled';

interface ProfileProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export const Profile: React.FC<ProfileProps> = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) => (
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
);
