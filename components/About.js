import React from "react";
import { useState } from "react";
const Section = ({ title, description , isVisible ,  setConfig}) => {

  return (
    <div className="border border-black m-2 p-2">
      <h1>Title : {title}</h1>
      {isVisible && <h3>{description}</h3>}
      {isVisible == false? (
        <button
          className="border border-black w-20 font-bold text-xl"
          onClick={() => setConfig()}
        >
          Show
        </button>
      ) : (
        <button
          className="border border-black w-20 font-bold text-xl"
          onClick={() => setConfig()}
        >
          Hide
        </button>
      )}
    </div>
  );
};

const About = () => {
    const [ config , setConfig ] =useState({
        about:false,
        team:false,
        careers:false
    })
  return (
    <div id="about-comp">
      <h1>About : </h1>
      <Section
        title={"About-us"}
        description={
          "Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is based in Bangalore and operates in 500 Indian cities as of September 2021.[5][6] Besides food delivery, Swiggy also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie."
        }
        isVisible={config.about}
        setConfig={()=>{
            setConfig({
                about:true,
                team:false,
                careers:false
            })
        }}
      ></Section>
      <Section
        title={"Team-swiggy"}
        description={
          "Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is based in Bangalore and operates in 500 Indian cities as of September 2021.[5][6] Besides food delivery, Swiggy also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie."
        }
        isVisible={config.team}
        setConfig={()=>{
            setConfig({
                about:false,
                team:true,
                careers:false
            })
        }}
      ></Section>
      <Section
        title={"Careers"}
        description={
          "Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is based in Bangalore and operates in 500 Indian cities as of September 2021.[5][6] Besides food delivery, Swiggy also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie."
        }
        isVisible={config.careers}
        setConfig={()=>{
            setConfig({
                about:false,
                team:false,
                careers:true
            })
        }}
      ></Section>
    </div>
  );
};

export default About;
