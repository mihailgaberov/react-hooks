import React, { useState, useEffect } from 'react';
import MockedApi from "../../api/mocks";
import useFriendName from '../../useFriendName';

export default function DataFetcherHooked() {
  const [ names, setNames ] = useState([]);
  const isNickHere = useFriendName('Nikolaos');

  useEffect(() => {
    const data = MockedApi.fetchData();
    data.then((res) => {
      setNames(res);
    });
  });


  console.log('>>> is nick here: ', isNickHere);

  return (
    <div>
      <ul>{names.map((element, idx) => (<li key={idx}>{element.name + ' ' + element.surname}</li>))}</ul>
    </div>
  );
}