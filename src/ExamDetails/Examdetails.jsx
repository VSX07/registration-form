import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ExamDetails.css';

const examDetailsList = [
  {
    examId: 0,
    name: "Exam 1",
    description: "This is the description for Exam 1",
    vacancy: 50,
    eligibility: "Graduate",
    registrationDeadline: 1715462400,
    totalMarks: 100,
    examDuration: 120,
    examDate: "2024-10-15",
    salary: "50000",
    creator: "0x123456789abcdef",
    examPattern: [
      { section: "General Knowledge", marks: 50 },
      { section: "Mathematics", marks: 50 }
    ]
  },
  {
    examId: 1,
    name: "Exam 2",
    description: "This is the description for Exam 1",
    vacancy: 50,
    eligibility: "Graduate",
    registrationDeadline: 1715462400,
    totalMarks: 100,
    examDuration: 120,
    examDate: "2024-10-15",
    salary: "50000",
    creator: "0x123456789abcdef",
    examPattern: [
      { section: "General Knowledge", marks: 50 },
      { section: "Mathematics", marks: 50 }
    ]
  },
  {
    examId: 2,
    name: "Exam 3",
    description: "This is the description for Exam 3",
    vacancy: 50,
    eligibility: "Graduate",
    registrationDeadline: 1715462400,
    totalMarks: 100,
    examDuration: 120,
    examDate: "2024-10-15",
    salary: "50000",
    creator: "0x123456789abcdef",
    examPattern: [
      { section: "General Knowledge", marks: 50 },
      { section: "Mathematics", marks: 50 }
    ]
  },
  // More exams can go here...
];

function ExamDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const examId = parseInt(id);
  const examDetails = examDetailsList.find(exam => exam.examId === examId);

  if (!examDetails) {
    return <div>Exam not found</div>;
  }

  const handleRegisterClick = () => {
    navigate(`/register/${examId}`); 
  };

  return (
    <div className="exam-details-container">
    <h1>{examDetails.name}</h1>
    <p><strong>Description:</strong> {examDetails.description}</p>
    <p><strong>Eligibility:</strong> {examDetails.eligibility}</p>
    <p><strong>Vacancy:</strong> {examDetails.vacancy}</p>
    <p><strong>Registration Deadline:</strong> {new Date(examDetails.registrationDeadline * 1000).toLocaleDateString()}</p>
    <p><strong>Total Marks:</strong> {examDetails.totalMarks}</p>
    <p><strong>Exam Duration:</strong> {examDetails.examDuration} minutes</p>
    <p><strong>Exam Date:</strong> {examDetails.examDate}</p>
    <p><strong>Salary:</strong> {examDetails.salary}</p>
    <p><strong>Creator:</strong> {examDetails.creator}</p>

    <h2>Exam Pattern</h2>
    <ul>
      {examDetails.examPattern.map((pattern, index) => (
        <li key={index}>
          {pattern.section}: {pattern.marks} Marks
        </li>
      ))}
    </ul>
    <button className="register-button" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
}

export default ExamDetails;
