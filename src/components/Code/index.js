import React from 'react';

export const Code = (props) => {
  return (
    <pre className={props.className} data-line={props.highlighted || ''}>
      <code className={`language-${props.language}`}>
        {props.snippet}
      </code>
    </pre>
  )
}

