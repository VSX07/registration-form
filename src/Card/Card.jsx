import React from 'react';
import './Card.css'; 

function Card({ details, index }) {
  if (!details) {
    return <div>Error: Details not found</div>;
  }

  return (
    <div className="card">
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      <p><strong>Vacancy:</strong> {details.vacancy}</p>
      <p><strong>Eligibility:</strong> {details.eligibility}</p>
      <p><strong>Registration Deadline:</strong> {new Date(details.registrationDeadline * 1000).toLocaleDateString()}</p>
      <p><strong>Total Marks:</strong> {details.totalMarks}</p>
      <p><strong>Duration:</strong> {details.examDuration} minutes</p>
      <p><strong>Exam Date:</strong> {details.examDate}</p>
      <p><strong>Salary:</strong> {details.salary}</p>
      <p><strong>Creator:</strong> {details.creator}</p>
      <a href={`/exam/${index}`} className="register-button">Register</a>
    </div>
  );
}

export default Card;
