import React from 'react'
//import PropTypes from 'prop-types'
import styles from './styles.module.css'
import * as  contactsActions from '../../redux/contacts/contacts-actions'
import { useSelector,  useDispatch} from 'react-redux';
import {getValueFilter} from '../../redux/contacts/contacts-selectors'


export default function Filter() {
  const value = useSelector(getValueFilter);
  const dispatch = useDispatch(getValueFilter);

  const onChange = (e) =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

   return (
    <div className={styles.filtr}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

/*const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filtr}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  value: getValueFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
*/