import { useState } from "react";

import CustomTabs from "components/CustomTabs";
import Image1 from "assets/tab-images/tab-1.jpg";
import Image2 from "assets/tab-images/tab-2.jpg";
import Image3 from "assets/tab-images/tab-3.jpg";

const images = [Image1, Image2, Image3];

const SecondSection = () => {
  const [tab, setTab] = useState("first");

  const handleChange = (tabName) => {
    setTab(tabName);
  };

  return (
    <section className="container-h section --s2 pb-5">
      <CustomTabs images={images} handleChange={handleChange} tabName={tab} />
    </section>
  );
};

export default SecondSection;
