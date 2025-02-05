import Headline from "../../../components/Headline";

const FAQSection = () => {
  return (
    <div className="max-width pb-16 pt-10">
      <Headline
        headline={"Have Questions? We Have Answers!"}
        subHeadline={
          "Browse our FAQs for quick solutions to common queries about shopping, shipping, and returns."
        }
      ></Headline>
      <div className="mt-10">
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200 rounded">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="text-sm">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="text-sm">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="text-sm">hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
