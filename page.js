'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [name,Setname]=useState("Shrey")
  const apple=()=>{
    Setname("X-rey")
  }

  const InnerComp=()=>{
    return(
      <h2>InnerComp</h2>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <div>
          <User name="Shrey"/>
          <User name="Lala"/>
      </div>

      <div>
        <h1>Events, Function and Sate {name}</h1>
          <button onClick={()=>apple()}>Click me</button>
          <InnerComp/>
          {InnerComp()}
      </div>

     
    </main>
    
  )
}

const User=(self)=>{
  return(
    <div>
      <h2>User Name is {self.name}</h2>
    </div>
  )
}

