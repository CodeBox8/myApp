import React, {useContext} from 'react'
import UserContextComp from '../App'



const CompC = () => {
    const user = useContext(UserContextComp);
  return (
    <div>
        <h1>Example of useContext</h1>
        {console.log("user is "+user)}
    </div>
  )
}

export default CompC
