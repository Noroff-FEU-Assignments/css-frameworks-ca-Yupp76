import CustomPagination from "components/CustomPagination";
import CustomCard from "components/CustomCard";

import Image1 from "assets/news-images/news-1.jpg";
import Image2 from "assets/news-images/news-2.jpg";
import Image3 from "assets/news-images/news-3.jpg";
import Image4 from "assets/news-images/news-4.jpg";
import Image5 from "assets/news-images/news-5.jpg";
import Image6 from "assets/news-images/news-6.jpg";
import Image7 from "assets/news-images/news-7.jpg";
import Image8 from "assets/news-images/news-8.jpg";

const MainSection = () => {
  const imagesList = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  return (
    <div className="container-h pt-5 pb-4 section">
      <h1 className="heading heading--xxl heading--pink">News</h1>
      <div className="my-5">
        <CustomPagination active={1} max={4} />
      </div>
      <div className="my-5 flex-wrap d-flex">
        {imagesList.map((img, i) => (
          <CustomCard
            imgSrc={img}
            title="Nunc portor vel"
            text="Nunc malesuada eget est fringilla dapibus"
            key={`img_${i}`}
          />
        ))}
      </div>
      <div className="my-5">
        <CustomPagination active={1} max={4} />
      </div>
    </div>
  );
};

export default MainSection;
