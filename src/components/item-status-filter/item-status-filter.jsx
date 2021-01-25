import React from 'react';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = 'button' + (isActive ? 'button__active' : 'button__unactive');

    return (
      <button key={name}
              type="button"
              onClick={() => onFilterChange(name)}
              className={classNames}>{label}</button>
    );
  });

  return (
    <div>
      { buttons }
    </div>
  );
};

export default ItemStatusFilter;
