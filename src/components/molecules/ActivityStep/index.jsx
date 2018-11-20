import React, { Component } from 'react';

const Step = ({ step }) => {
  return (
    <div>
      <p>{step.text}</p>
      <pre>{step.javaScriptBlocks}</pre>
    </div>
  );
};

export default Step;
