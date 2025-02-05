import Headline from "../../../components/Headline";
import ProductCard from "../../../components/ProductCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CategoryStyle.css";
import useCategory from "../../../hooks/useCategory";

const CategoriesSection = () => {
  const { categories } = useCategory();

  return (
    <div id="category" className="max-width pb-10 pt-16">
      <Headline
        headline={"Shop by Category"}
        subHeadline={
          "Find the perfect fit for every occasion – Men, Women, Kids, and Accessories."
        }
      ></Headline>

      <div className="mt-10">
        <Tabs>
          <TabList>
            {categories.map((category) => (
              <Tab key={category?._id}>{category?.category}</Tab>
            ))}
          </TabList>

          <div>
            {categories.map((category) => (
              <TabPanel key={category?._id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                  <ProductCard></ProductCard>
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoriesSection;
