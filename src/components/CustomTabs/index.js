import { Tabs, Tab, TabContent } from "react-bootstrap";
import TabContentBlock from "./partials/TabContentBlock";

const CustomTabs = ({ tabName, handleChange, images }) => {
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={tabName}
      onSelect={(tabName) => handleChange(tabName)}
      className="mt-5"
    >
      <Tab eventKey="first" title="First">
        <TabContent bsPrefix="tabContent">
          <TabContentBlock
            image={images[0]}
            alt="tab-illustration-1"
            text={`Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
            venenas pharetra leo laoreet a. Nullam non eleifend justo, 
            a ullamcorper turpis. Cras vehicula pharetra lectus non 
            maximus. Sed condimentum mas rhoncus.`}
          />
        </TabContent>
      </Tab>
      <Tab eventKey="second" title="Second">
        <TabContent bsPrefix="tabContent">
          <TabContentBlock
            image={images[1]}
            alt="tab-illustration-2"
            text={`Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam
            metus massa, aliquam quis arcu sit amet, consectetur faucibus
            urna. Suspendisse massa diam, efficitur eu massa euismod, preum
            lacinia magna.`}
          />
        </TabContent>
      </Tab>
      <Tab eventKey="third" title="Third">
        <TabContent bsPrefix="tabContent">
          <TabContentBlock
            image={images[2]}
            alt="tab-illustration-3"
            text={`Nam ncidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros preum libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis
            arcu sit amet, consectetur faucibus urna.
          `}
          />
        </TabContent>
      </Tab>
    </Tabs>
  );
};

export default CustomTabs;
