// import Notrail from '../images/Notrail.png';
// import Trail from '../images/Trail.png';
import Blackboard from '../images/Blackboard.png';

function Fiverule() {
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
            <form className='blackboard-form'>
              <input type='text' placeholder='Sensor Type'/>
              <input type='text' placeholder='Focal Length'/>
            </form>
          </div>
          <div className='blackboard-display'>
            <div className='blackboard'>
              <h2 className=''>500 Rule</h2>
              <h2>shutter speed = <br/> 500/(sesnsor type * focal length)</h2>
            </div>
            <img className='blackboard-img' src={Blackboard} alt='Blackboard'/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiverule;