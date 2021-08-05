import React from 'react';
import CharacteristicsItem from './CharacteristicsItem.jsx';
import '../Ratings.css';

var Characteristics = (props) => {

  var sizeDiv = <div class="characteristics">
    <p></p>
    <h5>Size</h5>
    <input type="radio" name="sizeRating" value="1" onClick={props.clickCharacteristics} />
    <label>A size too small</label>
    <p></p>
    <input type="radio" name="sizeRating" value="2" onClick={props.clickCharacteristics} />
    <label>½ a size too small</label>
    <p></p>
    <input type="radio" name="sizeRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <p></p>
    <input type="radio" name="sizeRating" value="4" onClick={props.clickCharacteristics} />
    <label>½ a size too big</label>
    <p></p>
    <input type="radio" name="sizeRating" value="5" onClick={props.clickCharacteristics} />
    <label>A size too wide</label>
  </div>;

  var widthDiv = <div class="characteristics">
    <p></p>
    <h5>Width</h5>
    <input type="radio" name="widthRating" value="1" onClick={props.clickCharacteristics} />
    <label>Too narrow</label>
    <p></p>
    <input type="radio" name="widthRating" value="2" onClick={props.clickCharacteristics} />
    <label>Slightly narrow</label>
    <p></p>
    <input type="radio" name="widthRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <p></p>
    <input type="radio" name="widthRating" value="4" onClick={props.clickCharacteristics} />
    <label>Slightly wide</label>
    <p></p>
    <input type="radio" name="widthRating" value="5" onClick={props.clickCharacteristics} />
    <label>Too wide</label>
  </div>;

  var comfortDiv = <div class="characteristics">
    <p></p>
    <h5>Comfort</h5>
    <input type="radio" name="comfortRating" value="1" onClick={props.clickCharacteristics} />
    <label>Uncomfortable</label>
    <p></p>
    <input type="radio" name="comfortRating" value="2" onClick={props.clickCharacteristics} />
    <label>Slightly uncomfortable</label>
    <p></p>
    <input type="radio" name="comfortRating" value="3" onClick={props.clickCharacteristics} />
    <label>Ok</label>
    <p></p>
    <input type="radio" name="comfortRating" value="4" onClick={props.clickCharacteristics} />
    <label>Comfortable</label>
    <p></p>
    <input type="radio" name="comfortRating" value="5" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
  </div>;

  var qualityDiv = <div class="characteristics">
    <p></p>
    <h5>Quality</h5>
    <input type="radio" name="qualityRating" value="1" onClick={props.clickCharacteristics} />
    <label>Poor</label>
    <p></p>
    <input type="radio" name="qualityRating" value="2" onClick={props.clickCharacteristics} />
    <label>Below average</label>
    <p></p>
    <input type="radio" name="qualityRating" value="3" onClick={props.clickCharacteristics} />
    <label>What I expected</label>
    <p></p>
    <input type="radio" name="qualityRating" value="4" onClick={props.clickCharacteristics} />
    <label>Pretty great</label>
    <p></p>
    <input type="radio" name="qualityRating" value="5" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
  </div>;

  var lengthDiv = <div class="characteristics">
    <p></p>
    <h5>Length</h5>
    <input type="radio" name="lengthRating" value="1" onClick={props.clickCharacteristics} />
    <label>Runs short</label>
    <p></p>
    <input type="radio" name="lengthRating" value="2" onClick={props.clickCharacteristics} />
    <label>Runs slightly short</label>
    <p></p>
    <input type="radio" name="lengthRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <p></p>
    <input type="radio" name="lengthRating" value="4" onClick={props.clickCharacteristics} />
    <label>Runs slightly long</label>
    <p></p>
    <input type="radio" name="lengthRating" value="5" onClick={props.clickCharacteristics} />
    <label>Runs long</label>
  </div>;

  var fitDiv = <div class="characteristics">
    <p></p>
    <h5>Fit</h5>
    <input type="radio" name="fitRating" value="1" onClick={props.clickCharacteristics} />
    <label>Runs tight</label>
    <p></p>
    <input type="radio" name="fitRating" value="2" onClick={props.clickCharacteristics} />
    <label>Runs slightly tight</label>
    <p></p>
    <input type="radio" name="fitRating" value="3" onClick={props.clickCharacteristics} />
    <label>Perfect</label>
    <p></p>
    <input type="radio" name="fitRating" value="4" onClick={props.clickCharacteristics} />
    <label>Runs slightly long</label>
    <p></p>
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

