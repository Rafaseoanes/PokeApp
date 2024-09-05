import React from 'react';

function InfoCard({ label, value, color }) {
  return (
    <div
      className="bg-white p-3 rounded-md mr-3 mb-4 transition-colors"
      style={{
        boxShadow: `5px 5px 12px -3px ${color}`,
      }}
    >
      <h5 className="font-medium">{label}:</h5>
      <p>{value}</p>
    </div>
  );
}

export default InfoCard;
