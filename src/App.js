import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/Nav"
import CreateBikeEntry from "./components/CreateBikeEntry"
import ShowBikeEntry from "./components/ShowBikeEntry"
import axios from "axios"

function App (){
    const [bikeEntry,setBikeEntry]=useState([])
    const handleCreateEntry=async(name,cost,date,option)=>{
        const response=await axios.post("http://52.201.239.183/bikes",{
            name,cost,date,option
        })
        const updated=[...bikeEntry, response.data]
        console.log(updated)
        setBikeEntry(updated)
    }
const fetchBikes=async()=>{
    let sum=0
    const response =await axios.get("http://52.201.239.183/bikes")
    setBikeEntry(response.data) 
    for(let i=0;i<response.data.length;i++){
        sum=sum+parseInt(response.data[i].cost)
    }
    console.log("   Sum is="+sum)
}
useEffect(()=>{
    fetchBikes()
},[])
    return <div>
        <Nav/>
        <h1 style={{textAlign:"center"}}>Daily Bike Entry ({bikeEntry.length})</h1>
        <CreateBikeEntry createEntry={handleCreateEntry}/>
        <ShowBikeEntry bikeEntry={bikeEntry} />
    </div>
}


export default App