import React, { useMemo } from 'react';

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => list.filter(item => item.age > 18), [list]);

  return (
    <div>
      <h2>Personas mayores de 18 años:</h2>
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
