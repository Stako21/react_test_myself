import { useState } from 'react';
import { Header } from './components/Header'
import { ProductList } from './components/ProductList';
import './App.scss';
import goods from './api/googs.json';
import { SORT_FIELD } from './constants'

function getPreparedGoods(goods, { sortField, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter(good => good.product.toLowerCase().includes(query.toLowerCase()));
  }

  switch (sortField) {
    case SORT_FIELD.ID:
    case SORT_FIELD.PRICE:
      preparedGoods.sort((good1, good2) => good1[sortField] - good2[sortField])
      break;

    case SORT_FIELD.NAME:
      preparedGoods.sort((good1, good2) => good1[sortField].localeCompare(good2[sortField]))
      break;

    default:
      break;
  }

  return preparedGoods
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(
    goods,
    { sortField, query }
  );

  return (
    <div className='App'>
      <Header
        sortField={sortField}
        sortBy={(field) => setSortField(field)}
        query={query}
        filterBy={(newQuery) => {
          console.log(newQuery);
          setQuery(newQuery);
        }}
      />
      <hr />
      <ProductList goods={visibleGoods} />
    </div>
  );
}
