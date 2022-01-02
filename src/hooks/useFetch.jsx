import { useCallback, useEffect, useState } from 'react';
import axios from "axios";


export const useFetch = () => {

  // States for controlling fetch details:
	const [url, setUrl] = useState(null);
	const [method, setMethod] = useState(null);
	const [data, setData] = useState(null);

  // Response data:
  const [response, setResponse] = useState({data: null});

  // Function for triggering useEffect by changing state (activating the fetch):
  const fetchData = useCallback(
    (fetchedUrl, fetchedMethod = "GET", fetchedData = null) => {
      setUrl(fetchedUrl);
      setMethod(fetchedMethod);
      setData(fetchedData);
    },
    [],
  )

  useEffect(() => {

    if (!url) { return; }
    setResponse(state => ({data: state.data}));

    axios.request({
        method: method,
        url: url,
        data: data
      }).then((result) => {
         setResponse({data: result.data});
      }).catch(error => {
        setResponse({error: error});
    });
  }, [url, method, data])
  
	return { response, fetchData }
}
