// import React from 'react';
import './App.css';
import user from './components/profile/user.json';
import friend from './components/friendList/friends.json';
import transactions from './components/transactionHistory/transactions.json';
import { Profile } from './components/profile/profile';
import { Statistic } from './components/statistics/statistics';
import { FriendList } from './components/friendList/friendList';
import { TransactionHistory } from './components/transactionHistory/transactionHistory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <TransactionHistory items={transactions}/>
      </header>
    </div>
  );
}

export default App;
