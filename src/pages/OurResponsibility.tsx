import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const OurResponsibility = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <p
          className="text-2xl font-montserrat font-medium mt-10 mb-4"
          style={{ letterSpacing: "-0.6px" }}
        >
          OUR RESPONSIBILITY
        </p>
        <img
          src="https://cdn.shopify.com/s/files/1/2321/0267/files/SHOP_THE_3000_x_3000_px_3000_x_2000_px_3500_x_2000_px_4000_x_2000_px.jpg?v=1642518269"
          alt="our responsibility"
          className="w-2/5"
        />
        <p
          className="w-2/5 text-center font-montserrat mt-4 mb-4 text-sm"
          style={{ lineHeight: "1.6" }}
        >
          We believe that ethical sourcing is multi-faceted. It isn’t simply
          using organic materials, or paying at least minimum wage, it’s the
          process of systematically choosing the best option across a variety of
          factors. We produce many different products with different industry
          standards, so with each new addition, we learn more about how to
          assess the social, environmental, and individual impacts we make by
          running this business.
        </p>
        <p
          className="w-2/5 text-start font-montserrat mt-6 mb-4 text-sm"
          style={{ lineHeight: "1.5" }}
        >
          We want you to have the best product possible, so here’s how we ensure
          that happens:
        </p>
        <ol className="w-2/5 text-start font-montserrat mt-6 mb-4">
          <li className="flex items-start">
            <p className="inline mr-3 mt-[2px]">1.</p>
            <div>
              <p className="font-bold text-lg">METHODOLOGY:</p>
              <p className="mt-3 mb-1 text-sm">
                All collections are 100% custom cut and sew in process,
                involving months of fabric selection, fit iterations, and strict
                manufacturing supervision. From manufacturing, products are
                quality-checked, organized, packed and labelled in our own
                warehouse, then shipped to customers. Even our customer service
                team is fully in-house, never outsourced beyond our small,
                devoted team.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <p className="inline mr-3 mt-[2px]">2.</p>
            <div>
              <span className="font-bold text-lg">RESPONSIBILITY:</span>
              <p className="mt-3 text-sm">
                Beyond our methodology, we have an extensive list of
                responsibilities we adhere to while making products, which
                includes:
              </p>
            </div>
          </li>
        </ol>
        <ol className="w-2/5 text-start font-montserrat mt-6 mb-4">
          <li className="flex items-start">
            <div>
              <p className=" text-sm font-bold underline">
                Responsibility to Social Welfare throughout the Supply Chain:
              </p>
              <ul className="list-disc ml-6 text-sm">
                <li className="mt-3 mb-1">
                  Fabric Selection: All fabrics used in our products are
                  produced in the same country as the manufacturer. In most
                  cases, and with all of our Basics products, this is Canada.
                </li>
                <li className="mt-1 mb-1">
                  Any manufacturer we work with outside Canada must submit
                  social audits and documentation to prove they follow our
                  standards in social policy.
                </li>
                <li className="mt-1 mb-1">
                  Our Social Labour Standards:
                  <ul className="list-disc ml-6">
                    <li className="mt-1 mb-1">
                      Dignity, respect, and concern for all workers in all steps
                      of the supply chain;
                    </li>
                    <li className="mt-1 mb-1">Fair wages;</li>
                    <li className="mt-1 mb-1">Reasonable working hours;</li>
                    <li className="mt-1 mb-1">
                      The ability and support to develop unions or worker
                      representation;
                    </li>
                    <li className="mt-1 mb-1">
                      The ability to file grievances anonymously;
                    </li>
                    <li className="mt-1 mb-1">
                      A strong stance against discrimination of any kind,
                      channels to report violations;
                    </li>
                    <li className="mt-1 mb-1">
                      No child labour, additional protections against
                      occupational hazards for workers under 20;
                    </li>
                    <li className="mt-1 mb-1">
                      Occupational Health and Safety checks and audits,
                      including checking staff compliance to wearing required
                      PPE;
                    </li>
                    <li className="mt-1 mb-1">
                      Funding for social security including healthcare, accident
                      insurance, and holiday pay;
                    </li>
                    <li className="mt-1 mb-1">
                      Building safety including fire alarm checks, carbon
                      dioxide monitor checks, building safety inspections, etc.
                    </li>
                    <li className="mt-1 mb-1">
                      We do not work with distributors without specific factory
                      audits, or factories who allow home working or piecework;
                    </li>
                    <li className="mt-1 mb-1">
                      No precarious employment, no forced employment, no bonded
                      labour;
                    </li>
                    <li className="mt-1 mb-1">
                      Ethical business behaviour, without bribery, embezzlement,
                      corruption, or extortion.
                    </li>
                  </ul>
                </li>
                <li className="mt-3 mb-1">
                  We produce most of our clothing in Toronto, Canada, and though
                  there are strong labour laws to protect workers, and high
                  general social support from our government, we only produce
                  goods in factories we’ve personally visited, and would be
                  proud for our customers to visit, too.
                </li>
                <li className="mt-1 mb-6">
                  Any item not produced in Canada or the United States requires
                  either Sedex or BSCI certification with passing grades, and
                  the audit must be valid until the anticipated delivery date of
                  the product. If we work with the manufacturer again, we
                  request a new valid audit, as required. Both of these audit
                  forms take into account all of our Labour Standards, as well
                  as some Environmental Impact Assessments.
                </li>
              </ul>

              <img src="https://cdn.shopify.com/s/files/1/2321/0267/files/SHOP_THE_3000_x_3000_px_3000_x_2000_px_3500_x_2000_px_4000_x_2000_px_copy.jpg?v=1642518446" />
              <p className="text-sm font-bold underline mt-8">
                Responsibility to Social Welfare throughout the Supply Chain:
              </p>
              <ul className="list-disc ml-6 text-sm">
                <li className="mb-1">
                  When choosing materials to use for new products, we assess
                  each item individually to provide the best quality, longest
                  wear, and to minimize environmental impact
                </li>
                <li className="mt-1 mb-1">
                  Our Basics line utilizes cotton grown in the USA, with all
                  fabric knitting, dyeing, and finishing done in Canada, most
                  within less than 100 km of where the clothing is cut and sewn.
                </li>
                <li className="mt-1 mb-1">
                  We frequently look into new technological options, especially
                  with regard to packaging and shipping. While we currently use
                  recyclable poly mailers, we are also examining other options,
                  including compostable, recycled, and extra thick paper
                  shipping bags.
                </li>
                <li className="mt-1 mb-1">
                  All of our shipping bags are produced in the USA, made from a
                  minimum of 30% recycled content, and are recyclable with film
                  plastic collection in most areas (so are most of your other
                  shipping bags, don’t mix them into your garbage!).
                </li>
                <li className="mt-1 mb-1">
                  Our distribution warehouse is based in Toronto, Canada, only a
                  few kilometers away from where our largest volume of clothing
                  is produced, reducing the impact of transportation emissions,
                  one of the largest issues in sustainable production. We
                  manufacture locally to reduce our carbon footprint.
                </li>
                <li className="mt-1 mb-1">
                  We are not fast fashion, we produce quality, timeless items
                  that should be with you for a long time.
                </li>
              </ul>
            </div>
          </li>
        </ol>
        <p className="flex justify-center items-center mt-8 w-2/5 font-montserrat text-sm text-center">
          As always, we’re here to help, so please get in touch if you have any
          questions or concerns about our products.
        </p>

        <p className="flex justify-center items-center mt-2 mb-20 w-2/5 font-montserrat text-sm">
          Contact our customer service team at hello@tsuki.market
        </p>
      </div>
      <div className="w-full bg-black h-auto">
        <Footer />
      </div>
    </div>
  );
};

export default OurResponsibility;
