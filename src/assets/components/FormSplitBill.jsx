import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    // check who to who the money
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill-value">💰 Bill value</label>
      <input
        type="number"
        id="bill-value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="my-expense">🙍‍♂️ Your expense</label>
      <input
        type="number"
        id="my-expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))
        }
      />

      <label htmlFor="friend-expense">🙍‍♀️ {selectedFriend.name} expense</label>
      <input type="text" id="friend-expense" value={paidByFriend} disabled />

      <label htmlFor="who-pay">🤑 Who is paying the bill?</label>
      <select id="who-pay" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object,
  onSplitBill: PropTypes.func,
};

export default FormSplitBill;
