import React from 'react';
import user from './profile/user.json';
import friend from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';
import { Profile } from './profile/profile';
import { Container } from './App.styled';
import { Statistic } from './statistics/statistics';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './transactionHistory/transactionHistory';
import Counter from './Counter/counter';
import Dropdown from './Dropdown/dropdown';

export const App = () => {
  return (
    <Container>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />

      <Counter />
      <Dropdown />
      
    </Container>
  );
};
