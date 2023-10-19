import Friend from './Friend';
import PropTypes from 'prop-types';

const FriendList = ({ friends, onSelectedFriends, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectedFriends={onSelectedFriends}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
  onSelectedFriends: PropTypes.func,
  selectedFriend: PropTypes.object,
};

export default FriendList;
