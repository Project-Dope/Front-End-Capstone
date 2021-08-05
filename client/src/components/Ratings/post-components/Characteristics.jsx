import React from 'react';
import CharacteristicsItem from './CharacteristicsItem.jsx';

var Characteristics = (props) => {

  var sizeDiv = <div>
    <p></p>
    <p>Size</p>
    <input type="radio" name="sizeRating" value="1" onClick={props.clickCharacteristics} />
    <label>A size too small</label>
    <input type="radio" name="sizeRating" value="2" onClick={props.clickCharacteristics} />
    <label>½ a size too small</label>
    <input type="radio" name="sizeRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <input type="radio" name="sizeRating" value="4" onClick={props.clickCharacteristics} />
    <label>½ a size too big</label>
    <input type="radio" name="sizeRating" value="5" onClick={props.clickCharacteristics} />
    <label>A size too wide</label>
  </div>;

  var widthDiv = <div>
    <p></p>
    <p>Width</p>
    <input type="radio" name="widthRating" value="1" onClick={props.clickCharacteristics} />
    <label>Too narrow</label>
    <input type="radio" name="widthRating" value="2" onClick={props.clickCharacteristics} />
    <label>Slightly narrow</label>
    <input type="radio" name="widthRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <input type="radio" name="widthRating" value="4" onClick={props.clickCharacteristics} />
    <label>Slightly wide</label>
    <input type="radio" name="widthRating" value="5" onClick={props.clickCharacteristics} />
    <label>Too wide</label>
  </div>;

  var comfortDiv = <div id={props.metaData.Comfort}>
    <p></p>
    <p>Comfort</p>
    <input type="radio" name="comfortRating" value="1" onClick={props.clickCharacteristics} />
    <label>Uncomfortable</label>
    <input type="radio" name="comfortRating" value="2" onClick={props.clickCharacteristics} />
    <label>Slightly uncomfortable</label>
    <input type="radio" name="comfortRating" value="3" onClick={props.clickCharacteristics} />
    <label>Ok</label>
    <input type="radio" name="comfortRating" value="4" onClick={props.clickCharacteristics} />
    <label>Comfortable</label>
    <input type="radio" name="comfortRating" value="5" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
  </div>;

  var qualityDiv = <div>
    <p></p>
    <p>Quality</p>
    <input type="radio" name="qualityRating" value="1" onClick={props.clickCharacteristics} />
    <label>Poor</label>
    <input type="radio" name="qualityRating" value="2" onClick={props.clickCharacteristics} />
    <label>Below average</label>
    <input type="radio" name="qualityRating" value="3" onClick={props.clickCharacteristics} />
    <label>What I expected</label>
    <input type="radio" name="qualityRating" value="4" onClick={props.clickCharacteristics} />
    <label>Pretty great</label>
    <input type="radio" name="qualityRating" value="5" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
  </div>;

  var lengthDiv = <div>
    <p></p>
    <p>Length</p>
    <input type="radio" name="lengthRating" value="1" onClick={props.clickCharacteristics} />
    <label>Runs short</label>
    <input type="radio" name="lengthRating" value="2" onClick={props.clickCharacteristics} />
    <label>Runs slightly short</label>
    <input type="radio" name="lengthRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <input type="radio" name="lengthRating" value="4" onClick={props.clickCharacteristics} />
    <label>Runs slightly long</label>
    <input type="radio" name="lengthRating" value="5" onClick={props.clickCharacteristics} />
    <label>Runs long</label>
  </div>;

  var fitDiv = <div>
    <p></p>
    <p>Fit</p>
    <input type="radio" name="fitRating" value="1" onClick={props.clickCharacteristics} />
    <label>Runs tight</label>
    <input type="radio" name="fitRating" value="2" onClick={props.clickCharacteristics} />
    <label>Runs slightly tight</label>
    <input type="radio" name="fitRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <input type="radio" name="fitRating" value="4" onClick={props.clickCharacteristics} />
    <label>Runs slightly long</label>
    <input type="radio" name="fitRating" value="5" onClick={props.clickCharacteristics} />
    <label>Runs long</label>
  </div>;

  // array to contain all divs from meta data
  var divArrayForRender = [];

  for (var key in props.metaData) {
    // console.log('value: ', props.metaData[key]);
    if (key === 'Size') {
      divArrayForRender.push(sizeDiv);
    }
    if (key === 'Width') {
      divArrayForRender.push(widthDiv);
    }
    if (key === 'Quality') {
      divArrayForRender.push(qualityDiv);
    }
    if (key === 'Comfort') {
      divArrayForRender.push(comfortDiv);
    }
    if (key === 'Length') {
      divArrayForRender.push(lengthDiv);
    }
    if (key === 'Fit') {
      divArrayForRender.push(fitDiv);
    }
  }

  // console.log('divArrayForRender: ', divArrayForRender);
  // console.log('metaData from sub-component: ', props.metaData);
  return divArrayForRender;
}

export default Characteristics;

