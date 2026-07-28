function App(){
    const [counter,setcounter] = useState(15)

    const addValue = ()=>{
        setcounter(counter+1)
        ab ek interview question 
         setcounter(counter+1)
          setcounter(counter+1)
           setcounter(counter+1)
            setcounter(counter+1)
            isme jb ye bnta h to react use clculate krke uska result queue me stire krta h 4 br fir jb moka aya tb execute krna sart krta h lekin ui update nhi hti 5-6 bnta hor  4br 6 hi rehta h 
            setcounter(prev => prev+1)
             setcounter(prev => prev+1)
              setcounter(prev => prev+1)
               setcounter(prev => prev+1)
    }

    const removevalue = ()=>{
        setcounter(counter-1)
    }

    return (
        <>
        <h1>chai</>
        <h2>counter value:{counter}</h2>

        <button
         onClick = {addValue}> Addvalue{counter}</button>
         
         <br/>
         <button onClick = {removeValue} > removeValue{counter} </button>
        <p>footer:{counter}</p>
        
        </>
    )
}