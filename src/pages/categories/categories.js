import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';


const categories = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button">
        Check Status
      </button>
    </div>
  );
}

export default categories;
