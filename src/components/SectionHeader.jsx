import React from "react";

function SectionHeader({ Title, Text }) {
  return (
    <div className="section-header text-center">
      <h2>{Title}</h2>
      <p>{Text}</p>
    </div>
  );
}

export default SectionHeader;
