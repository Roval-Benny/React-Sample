import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url, options,callback) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            if (typeof(callback) == 'function')
                callback(data)
            else
                setData(data);
            });
    }, [url]);
    return [data];
}

export default useFetch;    