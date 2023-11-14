function RenderEntry (bike) {
let srce=""
if(bike.bike.option==="Hero MotoCorp"){
    srce="https://www.logo.wine/a/logo/Hero_MotoCorp/Hero_MotoCorp-Logo.wine.svg"
}
else if (bike.bike.option ==="TVS"){
    srce="https://www.logo.wine/a/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.svg"
}
else if (bike.bike.option ==="Royal Enfield"){
    srce="https://www.royalenfield.com/content/dam/royal-enfield/usa/logos/logo.svg"
}
else if (bike.bike.option ==="Bajaj"){
    srce="https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo.png"
}
   console.log(bike)
    return <div className="container">
         <div className="card">
    <img src={srce} className="card-img-top" alt="..." style={{width:150+"px"}} />
    <div className="card-body">
      <h5 className="card-title">{bike.bike.name}</h5>
      <p className="card-text"><b>₹</b>{bike.bike.cost} <b>Date:</b>{bike.bike.date}</p>
 
    </div>
  </div>
    </div>
   
}
export default RenderEntry