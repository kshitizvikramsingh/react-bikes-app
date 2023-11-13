import RenderEntry from "./RenderEntry"

function ShowBikeEntry({bikeEntry}){


    const bikesArray=bikeEntry.map((entry,index)=>{
        
        return <RenderEntry bike={entry}/>
    })
    console.log(bikesArray)

    return <div>
{bikesArray}
    </div>
}

export default ShowBikeEntry