import { useEffect, useState } from "react";

export default function useProperties() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function dataFetch() {
            setLoading(true)
            try {
                const reponse = await fetch(`http://localhost:8080/api/properties`)
                const result = await reponse.json();
                setData(result)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }

        }
        dataFetch()

    }, []);

    return {
        data, loading, error
    }
}