import React from "react";

export default function Faq() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-5 px-5">
                  Who can become a member ?
                </summary>

                <p className="pl-4 pt-4 text-left antialiased ">
                  There is not any membership criteria! Anyone who is willing to
                  learn and develop their skills in the field of programming can
                  become a member.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-5 px-4">
                  What should I carry when attending a workshop ?
                </summary>

                <p className="pl-4 pt-4 text-left antialiased ">
                  We recommend you to carry with you a notebook, pen and laptop
                  because more often than not we get our hands dirty with code.
                  Most importantly, bring along a healthy dose of curiosity and
                  enthusiam.
                </p>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-5 px-5">
                  How frequently do events and workshops occur ?
                </summary>

                <p className="pl-4 pt-4 text-left antialiased ">
                  We organize a lot of events and workshops throughout the year,
                  from programming bootcamps to various contests and speaker
                  sessions.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-5 px-5">
                  Who should I reach out to if I have any questions ?
                </summary>

                <p className="pl-4 pt-4 text-left antialiased ">
                  We have an extended management system. You can always reach
                  out to us anytime through our Social media platforms. Despite
                  this, Discord is our first priority. We would love to handle
                  queries and see your comments and suggestions there.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
