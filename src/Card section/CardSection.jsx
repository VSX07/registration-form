import React from 'react';
import './CardSection.css'; // Import the CSS file
import Card from '../Card/Card'; // Ensure this path is correct

function CardsSection() {
  const paperDetailsList = [
    {
      name: "Exam 1",
      description: "This is the description for Exam 1",
      vacancy: 50,
      eligibility: "Graduate",
      registrationDeadline: 1715462400,
      totalMarks: 100,
      examDuration: 120,
      examDate: "2024-10-15",
      salary: "50000",
      creator: "0x123456789abcdef"
    },
    {
      name: "Exam 2",
      description: "This is the description for Exam 2",
      vacancy: 60,
      eligibility: "Postgraduate",
      registrationDeadline: 1715462400,
      totalMarks: 200,
      examDuration: 180,
      examDate: "2024-11-20",
      salary: "60000",
      creator: "0xabcdef123456789"
    },
    {
      name: "Exam 3",
      description: "This is the description for Exam 3",
      vacancy: 70,
      eligibility: "PhD",
      registrationDeadline: 1715462400,
      totalMarks: 300,
      examDuration: 240,
      examDate: "2024-12-10",
      salary: "70000",
      creator: "0x789abcdef123456"
    }
  ];

  return (
    <div className="cards-container">
      {paperDetailsList.map((details, index) => (
        <Card key={index} details={details} index={index} />
      ))}
    </div>
  );
}

export default CardsSection;
