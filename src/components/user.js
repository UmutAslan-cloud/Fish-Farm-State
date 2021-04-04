
import React,{useState} from "react"
import fishFarm from "./fishfarmdata"
import "./user.css"

class FishWiev extends React.Component {
    constructor(props) {
      super(props);
      this.state = {fishFarm}
    }
    render() {
      return (
  <div className="father-component">
          {this.state.fishFarm.map((list, index) => (
        <div className="main-content">
<h1>Name: {list.fishType}</h1>
<p>Preis:{list.price}</p>
<p>Duration:{list.durationInDays}</p>
<p>Weight:{list.itemWeightInGrams}</p>
<p>Origin:{list.originCountry}</p>
<p>Season:{list.season}</p>
<p>Stock KG:{list.stockVolumeInKg}</p>
<p>Sale Locations:{list.saleLocations.join(",")}</p>
  </div>
            ))}
</div>
      );
    }
  }

  export default FishWiev