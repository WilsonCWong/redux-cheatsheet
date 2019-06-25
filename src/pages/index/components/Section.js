import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs'
import { Code } from 'src/components/Code';

const Heading = styled.h3`
  color: #764ABC;
  font-size: 1.4em;
`

function CodeSectionContainer(props) {
  
  useEffect(() => {
    Prism.highlightAll();
  }, [])

  return (
    <div className={props.className}>
      <Heading>{props.heading}</Heading>
      <Code 
        language={props.language}
        snippet={props.snippet} 
      />
    </div>
  )
}

export const Section = styled(CodeSectionContainer)`
  margin: 20px;
  flex-grow: 1;
`