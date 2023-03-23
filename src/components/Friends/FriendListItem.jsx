import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ name, avatar, isOnline, id }) => (
    <li className={css.item} key={id}>
      {isOnline ? (
        <span className={css.statusBlue}></span>
      ) : (
        <span className={css.statusYellow}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
