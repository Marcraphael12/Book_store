import './categories.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  // consume status state
  const status = useSelector((state) => state.categoriesReducer);

  // dispatch action
  const CheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h3>{status}</h3>
      <button type="button" onClick={CheckStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
