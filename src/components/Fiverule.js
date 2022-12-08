// import Notrail from '../images/Notrail.png';
// import Trail from '../images/Trail.png';
import Blackboard from '../images/Blackboard.png';
import {useState} from 'react';

function Fiverule() {

  const [inputValues, setInputValues] = useState({
    sensorSize: '',
    focalLength: '',
    result: '?'
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setInputValues(prevState => {
      return {
        ...prevState,
        [name]: value 
      }
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setInputValues(prevState => {
      return {
        ...prevState,
        result: (500/((prevState.sensorSize)*(prevState.focalLength))).toFixed(0)
      }
    })
  };

  console.log(inputValues);

  return (
    <div className='five-rule-container'>
      <p>Calculate optimal shutter speed to avoid star trailing in your Milkyway photographs by dividing focal length by 500. For instance, if you have a 16mm wide angle lens, then 500 / 16 = 31.25 which means you could set your shutter speed to 31 seconds. If you set the shutter speed for any longer than dictated by the 500 rule, then the stars in your image will show up as star trails. Feel free to use this simple calculator to find maximum exposure time.</p>
      {/* <div className="trail-img-container">
        <img className='trail-img' src={Notrail} alt="Image of stars without trailing"/>
        <img className='trail-img' src={Trail} alt="Image of stars with trailing"/>
        <div className='correct-wrong-check'>
          <span class="material-symbols-outlined">check_circle</span>
          <span class="material-symbols-outlined">cancel</span>
        </div>
      </div> */}
      <div className="star-trail-compare">
        <div className='five-rule-app'>
          <div className='blackboard-controls'>
            <form onSubmit={handleSubmit} className='blackboard-form'>
              <label htmlFor='sensor-size'>Sensor Size:</label>
                <select name='sensorSize' value={inputValues.sensorSize} id='sensor-size'type='text' placeholder='Sensor Type' onChange={handleChange}>
                  <option>--Select--</option>
                  <option value='1'>FULL FRAME</option>
                  <option value='1.52'>APS-C</option>
                  <option value='2'>MICRO 4/3</option>
                </select>
              <label htmlFor='focal-length'>Focal Length:</label>
                <select id='focal-length' name='focalLength' value={inputValues.focalLength} onChange={handleChange}>
                  <option>--Select--</option>
                  <option value='14'>14mm</option>
                  <option value='16'>16mm</option>
                  <option value='20'>20mm</option>
                  <option value='24'>24mm</option>
                  <option value='35'>35mm</option>
                  <option value='50'>50mm</option>
                  <option value='70'>70mm</option>
                  <option value='85'>85mm</option>
                  <option value='135'>135mm</option>
                  <option value='200'>200mm</option>
                </select>
              <button className='calculate-btn'>Calculate</button>
            </form>
          </div>
          <div className='blackboard-display'>
            <div className='blackboard'>
              <h2 className=''>The 500 Rule</h2>
              <h2>shutter speed = 500/(crop factor * f)</h2>
              <br/><br/>
              <h2>Optimal shutter speed = {inputValues.result} {inputValues.result > 1 ? 'seconds' : 'second'}</h2>
            </div>
            <img className='blackboard-img' src={Blackboard} alt='Blackboard'/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiverule;