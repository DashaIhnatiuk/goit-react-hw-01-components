import Profile from "./Profile/Profile";
import user from "./Profile/user.json";

import Stats from "./Statistic/Stats";
import statisticalData from "./Statistic/statistical-data.json";

import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";

import TableList from "./Statistics/TableList";
import transactions from "./Statistics/transactions.json";

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Stats data={statisticalData} />
      <FriendList data={friends} />
      <TableList data={transactions} />
    </div>
  );
}

export default App;
