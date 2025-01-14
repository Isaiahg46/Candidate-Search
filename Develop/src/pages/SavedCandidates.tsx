import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Fetch saved candidates from local storage
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setCandidates(savedCandidates);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <ul>
          {candidates.map((candidate, index) => (
            <li key={index}>
              <h2>{candidate.name}</h2>
              <p>ID: {candidate.id}</p>
              <p>Email: {candidate.email}</p>
              <p>Phone: {candidate.phone}</p>
              <p>GitHub: <a href={candidate.github}>{candidate.github}</a></p>
              <p>Skills: {candidate.skills.join(', ')}</p>
              <p>Company: {candidate.company}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SavedCandidates;