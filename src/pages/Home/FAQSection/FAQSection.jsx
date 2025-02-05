import FAQCard from "../../../components/FAQCard";
import Headline from "../../../components/Headline";
import useFAQ from "../../../hooks/useFAQ";

const FAQSection = () => {
  const { faqs, isPending } = useFAQ();

  return (
    <div id="faq" className="max-width pb-16 pt-10">
      <Headline
        headline={"Have Questions? We Have Answers!"}
        subHeadline={
          "Browse our FAQs for quick solutions to common queries about shopping, shipping, and returns."
        }
      ></Headline>

      <div className="mt-10">
        {isPending ? (
          <div className="flex items-center justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div>
            {faqs.length ? (
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <FAQCard key={faq?._id} idx={idx} faq={faq}></FAQCard>
                ))}
              </div>
            ) : (
              <div>
                <p className="p-5 rounded text-center font-medium border border-base-200">
                  FAQ Not Found
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
