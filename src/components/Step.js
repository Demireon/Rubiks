import React from 'react';
import ReactMarkdown from 'react-markdown';

function Step({ step }) {
  return (
    <div className="step">
      <h2>{step.title}</h2>
      <ReactMarkdown>{step.description}</ReactMarkdown>
    </div>
  );
}

export default Step;