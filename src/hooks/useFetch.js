import { useState, useEffect, useCallback } from "react";
import axios from "axios";


export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [res, setRes] = useState([]);
    console.log(url)

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const { data } = await axios.get(url);

            if (!!data.results) await setRes(data.results);
            else await setRes(data)
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }, [url]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, url]);

    return { loading, error, res };
}