import { useState,useEffect } from "react";
import Img1 from "../images/bg-image/productimage.png";


function Purchase() {



  const [flavor,setFlavor] = useState('vanilla');
  const [packager,setPackager] = useState('oneday');
  const [frequency,setFrequency] = useState('onetimepurchase');
  
  const [onetimepricing,setOnetimepricing] = useState('57');
  const [subscriptionpricing,setSubscription] = useState('51.30');
  const [selpricing,setSelpricing] = useState('57');

  const flavorarray = [
    {id : '1', name : 'Vanilla', value : 'vanilla'},
    {id : '2', name : 'Chocolate', value : 'chocolate'},
    ];

  const packagearray = [
    {id : '1',name : '1 Day', value : 'oneday'},
    {id : '2',name : '3 Day', value : 'threeday'},
    {id : '3',name : '5 Day', value : 'fiveday'},
    ];

  const frequencyarray = [
    {id : '1',name : 'One Time Purchase', value : 'onetimepurchase'},
    {id : '2',name : 'Subscription', value : 'subscription'},
    ];


  const pricing = [
    {id : '1',package : 'oneday',frequency : 'onetimepurchase', price : 57.00},
    {id : '1',package : 'threeday',frequency : 'onetimepurchase', price : 141.00},
    {id : '1',package : 'fiveday',frequency : 'onetimepurchase', price : 230.00},
    {id : '1',package : 'oneday',frequency : 'subscription', price : 51.30},
    {id : '1',package : 'threeday',frequency : 'subscription', price : 126.90},
    {id : '1',package : 'fiveday',frequency : 'subscription', price : 207.00},
    ];
  

  let handleFlavorChange = (e) => {
    setFlavor(e.target.value);
    console.log(e.target.value)
  };

  let handlePackageChange = (e) => {
    setPackager(e.target.value);
    console.log(e.target.value)
  };

  let handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
    console.log(e.target.value)
  };


  useEffect(() => {
    console.log(flavor+packager+frequency);
    pricing.map((obj) => {

      if(obj.package===packager&&obj.frequency==='onetimepurchase')
      {
        setOnetimepricing(obj.price)
      }
      if(obj.package===packager&&obj.frequency==='subscription')
      {
        setSubscription(obj.price)
      }
      if(obj.package===packager&&obj.frequency===frequency)
      {
        setSelpricing(obj.price)
      }
    })
  });


  return (
    <>
      <section className="purchase-section">
        <div className="container">
          <div className="purchase-image">
            <img src={Img1} alt = "about  me" />
          </div>

          <div className="purchase-text">
            <h3>Cleanse & Reset</h3>
            <div className="step"> <p><span>STEP 1 : </span>SELECT FLAVOR</p></div>
     
            <div class="radio-toolbar-flavor">
            {
            flavorarray.map((flavorinstance)=>{
              return <>
              <label class={"flav_"+flavorinstance.value} for={flavorinstance.value}>
                <input type="radio" key={flavorinstance.id} id={flavorinstance.value} name="flavourradio" onChange={handleFlavorChange} checked={flavor === flavorinstance.value } value={flavorinstance.value} >
                </input>
                  <span> {flavorinstance.name}</span></label></>
            })
            
            } 

            </div>

            <div className="step">
              <p><span>STEP 2 : </span>SELECT PACKAGE</p>
            </div>
           
            <div class="radio-toolbar-package">
              {
              packagearray.map((flavorinstance)=>{
                return <>
                  <input type="radio" key={flavorinstance.id} id={flavorinstance.value} name="packageradio" onChange={handlePackageChange} checked={packager === flavorinstance.value } value={flavorinstance.value} />
                            <label for={flavorinstance.value}>{flavorinstance.name}</label>
                          </>
              })
              
              } 
            </div>


            <div className="step"><p><span>STEP 3 : </span>SELECT FREQUENCY</p></div>

            <div class="radio-toolbar-frequency">
             
              <label for='onetimepurchase'>
                <input type="radio" key="1" id='onetimepurchase' name="frequencyradio" onChange={handleFrequencyChange} checked={frequency === 'onetimepurchase' } value='onetimepurchase' />
                  One Time Purchase <span>${Number(onetimepricing).toFixed(2)}</span>
              </label>

              <label for='subscription'>
              <input type="radio" key="2" id='subscription' name="frequencyradio" onChange={handleFrequencyChange} checked={frequency === 'subscription' } value='subscription' />
              Subscription <span>${Number(subscriptionpricing).toFixed(2)}</span>
              </label>

            </div>

            <div className="pricing" >
              <span className="pricing_grand">${Number(selpricing).toFixed(2).split('.')[0]}.<span className="pricing_grand_dec">{Number(selpricing).toFixed(2).split('.')[1]}</span></span>
              <span className="pricing_shipping">$5.00 Shipping</span>
              <button className="pricing_buy" to="/">BUY NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purchase;
