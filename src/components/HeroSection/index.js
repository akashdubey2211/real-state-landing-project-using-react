import React,{ useState } from "react";
import {
  HeroContainer,
  HeroContent,
  Heroh1,
  HeroBtn,
  BtnRoute,
  HeroDesc,
  ForwardIcon,
  Imp,
} from "./heroElements";

const HeroSection = () => {

    const [hover,setHover] = useState(false);

    const toggleIcon = () => {
        setHover(!hover);
    }

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <Heroh1>
            FIND <Imp>YOUR PERFECT</Imp> HOME{" "}
          </Heroh1>
          <HeroDesc>
           Get Perfect Home In Your Area.
          </HeroDesc>
          <BtnRoute>
            <HeroBtn to="/signin" onMouseEnter={toggleIcon} onMouseLeave={toggleIcon}>Contact Us{hover ? <ForwardIcon className="arr-icon" /> : null} </HeroBtn>
          </BtnRoute>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
