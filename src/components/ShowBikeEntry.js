import RenderEntry from "./RenderEntry"

function ShowBikeEntry({bikeEntry}){
let sum=0

    const bikesArray=bikeEntry.map((entry,index)=>{
      
        sum=sum+parseInt(entry.cost)
        
        return <RenderEntry bike={entry}/>
    })
    
    console.log(bikesArray)

    return <div className="container">
{bikesArray} Total Cost till now:₹<b>{sum}</b>
    </div>
}

export default ShowBikeEntry