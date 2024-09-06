import React from 'react';

function InfoCard({ label, value, color }) {
  return (
    <div
      className="bg-slate-50 p-3 rounded-md mr-3 mb-4 transition-colors text-center"
      style={{
        boxShadow: `5px 5px 12px -3px ${color}`,
      }}
    >
      <h5 className="font-medium">{label}:</h5>
      <p style={{textTransform: "capitalize"}}>{value}</p>
    </div>
  );
}

export default InfoCard;
