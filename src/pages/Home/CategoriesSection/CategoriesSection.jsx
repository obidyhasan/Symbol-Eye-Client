import Headline from "../../../components/Headline";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./CategoryStyle.css";
import useCategory from "../../../hooks/useCategory";
import CategoryProduct from "./CategoryProduct";

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
                <CategoryProduct
                  category={category?.category}
                ></CategoryProduct>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoriesSection;
