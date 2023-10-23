import Button from './assets/components/Button';
import FormAddFriend from './assets/components/FormAddFriend';
import FriendList from './assets/components/FriendList';
import FormSplitBill from './assets/components/FormSplitBill';
import { useState } from 'react';

/* DATA */
import { initialFriends } from './assets/data/friendsData';
import Background from './assets/components/Background';

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriend();
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <>
      <h1>Eat and split the bill</h1>
      <Background />
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelectedFriends={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
        </div>

        {selectedFriend && (
          <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
        )}
      </div>
    </>
  );
};

export default App;
