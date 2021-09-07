import React, {useState, useEffect} from 'react';


function MyHookComponent()
{
  const [resourceType, setResourceType]= useState('colors')

  console.log('render')

  useEffect(() =>
  {
    console.log('resource type changed')
  },[resourceType]) 

  return (
      
      <div>
        <button onClick={()=> setResourceType('colors')}>silver</button>

        <button onClick={()=> setResourceType('users')}>gray</button>

        <button onClick={()=> setResourceType('comments')}>blue</button>
      </div>
      
  )

  }
  export default MyHookComponent;