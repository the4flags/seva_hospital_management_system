import React from 'react';

const doctors = [
  { name: "Dr. Debashish Majumder", specialty: "Oncologist", description: "Specialist in chemotherapy." },
  { name: "Dr. Disha Dey", specialty: "Psychiatrist", description: "Specialist in curing schizophrenia." },
  { name: "Dr. Silajit Deb", specialty: "Heart Specialist", description: "Specialist in treatment of heart strokes." },
];

const OurDoctors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
      {doctors.map((doctor, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={`doctor${index + 1}.jpg`}
            alt={doctor.name}
            className="w-full h-40 object-cover rounded-t-md"
          />
          <div className="mt-4">
            <h3 className="text-lg font-bold text-blue-600">{doctor.name}</h3>
            <p className="text-gray-700">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurDoctors;
