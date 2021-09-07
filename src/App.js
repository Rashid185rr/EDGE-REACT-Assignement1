// import React, {useState, useEffect} from 'react';


// function App()
// {
//   const [resourceType, setResourceType]= useState('colors')

//   console.log('render')

//   useEffect(() =>
//   {
//     console.log('resource type changed')
//   },[resourceType]) 

//   return (
      
//       <div>
//         <button onClick={()=> setResourceType('colors')}>silver</button>

//         <button onClick={()=> setResourceType('users')}>gray</button>

//         <button onClick={()=> setResourceType('comments')}>blue</button>
//       </div>
      
//   )

//   }
//   export default App;

  // use state
// function App(){

//   const[currentCount,updateCount]=useState(()=>{
//     console.log("function is called");
//     return 1;
 
//   });
//   function decrementCount(){

//     // decreasing 2 times
//     updateCount(previousCount=>previousCount-1);

//   }
// function incrementCount(){
//   updateCount(previousCount=>previousCount+8);

// }
 
//   return(
//   <>
//     <button onClick={decrementCount}>-</button>
//     <span>{currentCount}</span>
//     <button onClick={incrementCount}>+</button>
  
//   </>
// )
 
// }
  


// function App()
// {
//   const[windowWidth, setWindowWidth]= useState(window.innerWidth)
//   const handleResize= () => {
//     setWindowWidth(window.innerWidth)
//   }

// useEffect(() => {
//   window.addEventListener('resize',handleResize)
// }, [])
//   return 
//   (
//   <div>{windowWidth}</div>
//   )
//   }
//   export default App;

