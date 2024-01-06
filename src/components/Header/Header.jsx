import { useState } from 'react';
import cn from 'classnames';
import './Header.scss';
import { SORT_FIELD } from '../../constants';

export const Header = ({
  sortField,
  sortBy,
  query,
  filterBy,
}) => {
  const [color, setColor] = useState('black');

  return (
    <header>
      <h1
        style={{ color: color }}
      >
        My Shop
      </h1>
      <div>
        <button onClick={() => {
          setColor('red')
        }}
        >
          RED
        </button>
        <button onClick={() => {
          setColor('blue')
        }}
        >
          BLUE
        </button>
        <button onClick={() => {
          setColor('green')
        }}
        >
          GREEN
        </button>
      </div>

      <div className="sort">
        <button onClick={() => {
          sortBy('');
          filterBy('');
        }}
        >
          Reset
        </button>

        <input
          value={query}
          type="text"
          onChange={(event) => {
            filterBy(event.target.value)
          }}
        />

        <div>
          Sort by:
          <button onClick={() => sortBy(SORT_FIELD.ID)} className={cn({ active: sortField === SORT_FIELD.ID })}>id</button>
          <button onClick={() => sortBy(SORT_FIELD.NAME)} className={cn({ active: sortField === SORT_FIELD.NAME })}>name</button>
          <button onClick={() => sortBy(SORT_FIELD.PRICE)} className={cn({ active: sortField === SORT_FIELD.PRICE })}>price</button>
        </div>
      </div>
    </header>
  )
}
