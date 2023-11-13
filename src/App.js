import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/Nav"
import CreateBikeEntry from "./components/CreateBikeEntry"
import ShowBikeEntry from "./components/ShowBikeEntry"
import axios from "axios"

function App (){
    const [bikeEntry,setBikeEntry]=useState([])
    const handleCreateEntry=async(name,cost,date,option)=>{
        const response=await axios.post("http://127.0.0.1:3001/bikes",{
            name,cost,date,option
        })
        const updated=[...bikeEntry, response.data]
        console.log(updated)
        setBikeEntry(updated)
    }
const fetchBikes=async()=>{
    const response =await axios.get("http://127.0.0.1:3001/bikes")
    setBikeEntry(response.data) 
}
useEffect(()=>{
    fetchBikes()
},[])
    return <div>
        <Nav/>
        <h1 style={{textAlign:"center"}}>Daily Bike Entry ({bikeEntry.length})</h1>
        <CreateBikeEntry createEntry={handleCreateEntry}/>
        <ShowBikeEntry bikeEntry={bikeEntry}/>
    </div>
}


export default App