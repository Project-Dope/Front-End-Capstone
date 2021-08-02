import React from 'react';

var Characteristics = (props) => (

  <div>
    <h5>Characteristics</h5>
    <p>Size</p>
    <button name="sizeRating" value="1" onClick={props.clickCharacteristics}>A size too small</button>
    <button name="sizeRating" value="2" onClick={props.clickCharacteristics}>½ a size too small</button>
    <button name="sizeRating" value="3" onClick={props.clickCharacteristics}>Perfect</button>
    <button name="sizeRating" value="4" onClick={props.clickCharacteristics}>½ a size too big</button>
    <button name="sizeRating" value="5" onClick={props.clickCharacteristics}>A size too wide</button>
    <p>Width</p>
    <button name="widthRating" value="1" onClick={props.clickCharacteristics}>Too narrow</button>
    <button name="widthRating" value="2" onClick={props.clickCharacteristics}>Slightly narrow</button>
    <button name="widthRating" value="3" onClick={props.clickCharacteristics}>Perfect</button>
    <button name="widthRating" value="4" onClick={props.clickCharacteristics}>Slightly wide</button>
    <button name="widthRating" value="5" onClick={props.clickCharacteristics}>Too wide</button>
    <p>Comfort</p>
    <button name="comfortRating" value="1" onClick={props.clickCharacteristics}>Uncomfortable</button>
    <button name="comfortRating" value="2" onClick={props.clickCharacteristics}>Slightly uncomfortable</button>
    <button name="comfortRating" value="3" onClick={props.clickCharacteristics}>Ok</button>
    <button name="comfortRating" value="4" onClick={props.clickCharacteristics}>Comfortable</button>
    <button name="comfortRating" value="5" onClick={props.clickCharacteristics}>Perfect</button>
    <p>Quality</p>
    <button name="qualityRating" value="1" onClick={props.clickCharacteristics}>Poor</button>
    <button name="qualityRating" value="2" onClick={props.clickCharacteristics}>Below Average</button>
    <button name="qualityRating" value="3" onClick={props.clickCharacteristics}>What I expected</button>
    <button name="qualityRating" value="4" onClick={props.clickCharacteristics}>Prety great</button>
    <button name="qualityRating" value="5" onClick={props.clickCharacteristics}>Perfect</button>
    <p>Length</p>
    <button name="lengthRating" value="1" onClick={props.clickCharacteristics}>Runs short</button>
    <button name="lengthRating" value="2" onClick={props.clickCharacteristics}>Runs slightly short</button>
    <button name="lengthRating" value="3" onClick={props.clickCharacteristics}>Perfect</button>
    <button name="lengthRating" value="4" onClick={props.clickCharacteristics}>Runs slightly long</button>
    <button name="lengthRating" value="5" onClick={props.clickCharacteristics}>Runs long</button>
    <p>Fit</p>
    <button name="fitRating" value="1" onClick={props.clickCharacteristics}>Runs tight</button>
    <button name="fitRating" value="2" onClick={props.clickCharacteristics}>Runs slightly tight</button>
    <button name="fitRating" value="3" onClick={props.clickCharacteristics}>Perfect</button>
    <button name="fitRating" value="4" onClick={props.clickCharacteristics}>Runs slightly long</button>
    <button name="fitRating" value="5" onClick={props.clickCharacteristics}>Runs long</button>
  </div>

)

export default Characteristics;