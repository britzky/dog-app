import { useState, useEffect } from 'react';

export const Dog = () => {
    const [dog, setdog] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getDog = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost:3000/dog');

            if (!response.ok) {
                throw new Error("failed to fetch dog");
            }

            const data = await response.json();
            setdog(data);
        } catch (error) {
            setError(error.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return(
        <>
            <h1>Welcome to dog page!</h1>
            <button onClick={getDog} disabled={loading}>
                {loading ? 'Loading...' : 'Get dog!'}
            </button>

            {error && <p>Error: {error}</p>}

            {dog && (
                <div>
                    <img 
                        src={dog.url} 
                        alt="Random dog" 
                        style={{ maxWidth: '500px', marginTop: '20px' }} 
                    />
                </div>
            )}
        </>
    )
}