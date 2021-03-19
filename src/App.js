import Profile from './Profile';
import user from './Profile/user.json';

import Stats from './Statistic';
import statisticalData from './Statistic/statistical-data.json';

import FriendList from './FriendList';
import friends from './FriendList/friends.json';

import TableList from './Table';
import transactions from './Table/transactions.json';

function App() {
  return (
    <div>
        <Profile avatar={user.avatar} name={user.name} location={user.location} tag={user.tag} stats={user.stats}/>
        <Stats data={statisticalData}/>
        <FriendList data={friends}/>
        <TableList data={transactions}/>
    </div>
  );
}

export default App;
