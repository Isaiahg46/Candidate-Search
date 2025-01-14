import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Candidate {
    id: number;
    name: string;
    position: string;
    email: string;
}

const PotentialCandidates: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('/api/saved-candidates');
                setCandidates(response.data);
            } catch (err) {
                setError('Failed to fetch candidates');
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Potential Candidates</h1>
            <ul>
                {candidates.map(candidate => (
                    <li key={candidate.id}>
                        <h2>{candidate.name}</h2>
                        <p>Position: {candidate.position}</p>
                        <p>Email: {candidate.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PotentialCandidates;