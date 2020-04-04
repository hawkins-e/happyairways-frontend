import React, {useState} from "react"

function FlightContainer() {
    
    const [flights] = useState("online") 

return(

    <div>
          <h2>{flights}</h2>
    </div> 

)

}

export default FlightContainer 
