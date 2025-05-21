import React, { useState } from 'react'
import Create from './Components/Create'
import Feed from './Components/Feed'

const App = () => {
  const [feeds, setfeeds] = useState([
  
  ])
  return (
    <div className='flex h-screen w-full bg-slate-200'>
      <Create feeds={feeds} setfeeds={setfeeds} />
      <Feed  feeds={feeds} setfeeds={setfeeds}/>
    </div>
  )
}

export default App