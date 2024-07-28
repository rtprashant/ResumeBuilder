import React, { useState ,useContext, useEffect } from 'react'
import Content from './Content'
import {BusinessContext, userContext} from './BusinessContext';

function BusinessPreview() {
    const [data ,setData] = useState();
  
    useEffect(() => {
      const storedData = localStorage.getItem('data');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
    }, [data]);
  
    if (!data) {
      return <div>Data is not defined</div>;
    }
  
    return (
        <BusinessContext.Provider value={{data}}>

       
      <div className='bg-red-500'>
        <h1>Preview</h1>
        {console.log("data:", data)}
        
             <Content />
       
        
      </div>
      </BusinessContext.Provider>
    );
  }
  
  

export default BusinessPreview
