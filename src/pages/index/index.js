import React from 'react';
import styled from 'styled-components';
import { Section }  from './components/Section'
import logo from 'public/img/logo.svg'

import hooksSnippet from './snippets/hooks';
import storeSnippet from './snippets/store';
import providerSnippet from './snippets/provider';
import combineReducersSnippet from './snippets/combineReducers';
import thunkSnippet from './snippets/reduxThunk';
import reducerSnippet from './snippets/reducer';
import actionCreatorSnippet from './snippets/actionCreator';
import connectSnippet from './snippets/connect';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 75px auto;
  color: #764ABC;
  font-size: 3em;

  @media screen and (max-width: 499px) {
    font-size: 1.5em;
    margin-bottom: 35px;
  }
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  @media screen and (max-width: 499px) {
    width: 25px;
    height: 25px;
  }
`


const Container = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
`

const CodeSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function Index(props) {
  return (
    <Container>
      <Title>
        <Logo src={logo} alt="Redux logo"></Logo>
        Redux Cheatsheet
      </Title>
      <CodeSection>
        <Section 
          heading='Action Creators'
          language='jsx' 
          snippet={actionCreatorSnippet} 
        />
        <Section
          heading='Thunk'
          language='jsx'
          snippet={thunkSnippet} 
        />
        <Section
          heading='Reducers'
          language='jsx'
          snippet={reducerSnippet} 
        />
        <Section
          heading='Combine Reducers'
          language='jsx'
          snippet={combineReducersSnippet} 
        />
        <Section
          heading='Store'
          language='jsx'
          snippet={storeSnippet} 
        />
        <Section
          heading='Provider'
          language='jsx'
          snippet={providerSnippet} 
        />
        <Section
          heading='React-Redux Connect'
          language='jsx'
          snippet={connectSnippet} 
        />
        <Section
          heading='Hooks'
          language='jsx'
          snippet={hooksSnippet} 
        />
      </CodeSection>
    </Container>
  )
}