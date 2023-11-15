import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function CreateBikeEntry ({createEntry}) {
    const [startDate, setStartDate] = useState(new Date());
    const [option,setOption]=useState('Hero MotoCorp')
    const [Name,setName]=useState('')
    const [Cost,setCost]=useState(0)

    const handleChange=(event)=>{
        console.log(event)
        setStartDate(event)
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        createEntry(Name,Cost,startDate.toLocaleString(),option)

    }
    const handleBikeNameChange=(event)=>{
        setName(event.target.value)
    }
    const handleCostChange=(event)=>{
        setCost(event.target.value)
    }
    const handleOptionChange=(event)=>{
        setOption(event.target.value)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <label>Select the Date: </label>
                <DatePicker
                 showIcon
                 selected={startDate}
                 onChange={handleChange}
                />
            </div>
        
       
        <div className="container">
        <label>Bike Name:</label>
        <input className="form-control" type="text" onChange={handleBikeNameChange} value={Name}/>
        </div>

        <div className="container">
        <label>Bike Company:</label>
        <select className="form-select" aria-label="Default select example" onChange={handleOptionChange} value={option}>
            <option value="Hero MotoCorp">Hero MotoCorp</option>
            <option value="TVS">TVS</option>
            <option value="Royal Enfield">Royal Enfield</option>
            <option value="Bajaj">Bajaj</option>
            <option value="Honda">HOnda</option>
        </select>
        </div>
        
        <div className="container">
        <label>Estimated Cost:</label>
        <input  className="form-control" type="number" onChange={handleCostChange} value={Cost}/>
        <button className="btn btn-primary">Create Entry</button>
        </div>

        
        </form>
    </div>
}


export default CreateBikeEntry