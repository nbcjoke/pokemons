import { useState, useEffect } from "react";

export const useFetching = (asyncCallback) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const {data} = await asyncCallback();
                setResponse(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return { response, isLoading, error };
};