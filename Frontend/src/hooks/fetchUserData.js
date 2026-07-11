import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetchUserData = (endpoint) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(endpoint);
      console.log(res.data);
      
      setData(res.data);
    };
    fetchUserData()
  }, [endpoint]);
  return data;
};

export default useFetchUserData
