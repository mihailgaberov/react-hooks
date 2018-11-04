import React, { useState, useEffect } from 'react';
import MockedApi from "../../api/mocks";

export default function DataFetcherHooked() {
  const [ names, setNames ] = useState([]);

  useEffect(() => {
    const data = MockedApi.fetchData();
    data.then((res) => {
      setNames(res);
    });
  });

  return (
    <div>
      <ul>{names.map((element, idx) => (<li key={idx}>{element.name + ' ' + element.surname}</li>))}</ul>
    </div>
  );
}