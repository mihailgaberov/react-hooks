import { useState, useEffect } from 'react';
import MockedApi from "./api/mocks";

export default function useFriendName(friendName) {
  const [isPresent, setIsPresent] = useState(null);


  useEffect(() => {
    const data = MockedApi.fetchData();
    data.then((res) => {
      res.forEach((e) => {
        if (e.name === friendName) {
          setIsPresent(true);
        }
      });
    });
  });

  return isPresent;
}