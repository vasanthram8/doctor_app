import {useEffect, useState} from 'react'
import { token } from '../config'

const useFetchData = url => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=> {
            setLoading(true);
            try{
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                
                if (!res.ok) {
                    // Handle non-2xx HTTP status codes
                    const errorDetails = await res.json();
                    throw new Error(errorDetails.message || 'Error fetching data');
                }
                const result = await res.json();
                setData(result.date);
                console.log(result)
            } catch (err) {
                setError(err.message); // Set the error message
            } finally {
                setLoading(false); // Ensure loading state is turned off
            }
        };

        fetchData();
    }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
