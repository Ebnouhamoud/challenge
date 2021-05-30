import React from 'react';

export default function ErrorFallback(props) {
  const { error } = props;
  return (
    <div className="ErrorFallback">
      <p>Something went wrong! {error? error.message:'Something went wrong'}</p>
    </div>
  );
};
