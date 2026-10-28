// import { useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import Countries from './assets/components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {

  return (
    <>

      <Suspense fallback={<p>Waiting to load....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

      <h1>React World to Go...</h1>

    </>
  )
}

export default App
