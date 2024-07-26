import React from 'react';

function DynamicComponent() {
  // 1. Making the variable
  let name = "Omi";

  // 2. Making the functions
  let fullName = () => {
    return "Omkar Yogesh Tarle";
  };

  // Logging to the console
  console.log("OYT");

  return (
    <>
      <h2>{name} Dynamic Component {fullName()}</h2>
    </>
  );
}

export default DynamicComponent;
