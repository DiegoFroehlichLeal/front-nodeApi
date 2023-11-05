import React, { useState, useEffect } from 'react';
import FuturisticDataTable from './components/FuturisticDataTable';

const initialData = [];
const initialDateFilter = '';
const initialFeatureFilter = '';

function App() {
  const [data, setData] = useState(initialData);
  const [dateFilter, setDateFilter] = useState(initialDateFilter);
  const [featureFilter, setFeatureFilter] = useState(initialFeatureFilter);
  const [originalData, setOriginalData] = useState(initialData);

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        return response.json();
      })
      .then(newData => {
        setData([...newData]);
        setOriginalData([...newData]);
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  function filterByDate(items, date) {
    if (!date) {
      return items;
    }
    return items.filter(item => item.Data.includes(date));
  }

  function filterByFeature(items, feature) {
    if (!feature) {
      return items;
    }
    feature = feature.toLowerCase();
    return items.filter(item => item.Feature.toLowerCase().includes(feature));
  }
  

  useEffect(() => {
    const filteredDataByDate = filterByDate(originalData, dateFilter);
    const finalFilteredData = filterByFeature(filteredDataByDate, featureFilter);

    if (!dateFilter && !featureFilter) {
      setData([...originalData]);
    } else {
      setData([...finalFilteredData]);
    }
  }, [dateFilter, featureFilter, originalData]);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Filtrar por Data"
          value={dateFilter}
          onChange={e => setDateFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por Feature"
          value={featureFilter}
          onChange={e => setFeatureFilter(e.target.value)}
        />
      </div>
      <FuturisticDataTable data={data} />
    </div>
  );
}

export default App;
