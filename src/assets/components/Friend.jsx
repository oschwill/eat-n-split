import PropTypes from 'prop-types';
import Button from './Button';

const Friend = ({ friend, onSelectedFriends, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe{friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectedFriends(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
};

export default Friend;

Friend.propTypes = {
  friend: PropTypes.object,
  onSelectedFriends: PropTypes.func,
  selectedFriend: PropTypes.object,
};
