import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface'; 

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);

  const fetchCandidates = async () => {
    try {
      const data = await searchGithub();
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);
  

  const handleSaveCandidate = () => {
    console.log("Saved candidate:", candidates[currentCandidateIndex]);
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
  };

  const handleRejectCandidate = () => {
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
  };

  if (candidates.length === 0) {
    return <h1>Loading candidates...</h1>;
  }

  if (currentCandidateIndex >= candidates.length) {
    return <h1>No more candidates available.</h1>;
  }

  const currentCandidate = candidates[currentCandidateIndex];

  return (
    <div>
      <h1>Candidate Search</h1>
      <h2>{currentCandidate.name}</h2>
      <p>Email: {currentCandidate.email}</p>
      <p>Phone: {currentCandidate.phone}</p>
      <p>GitHub: <a href={currentCandidate.github}>{currentCandidate.github}</a></p>
      <p>Skills: {Array.isArray(currentCandidate.skills) ? currentCandidate.skills.join(', ') : 'No skills available'}</p>
      <p>Company: {currentCandidate.company}</p>
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={handleRejectCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;