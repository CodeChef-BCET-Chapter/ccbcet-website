import React from "react";
export default function EventDetails() {
  return (
    <div className=" text-gray-800 ">
      <div className="flex flex-col md:flex-row gap-y-4 justify-between md:items-center bg-header xl:px-36 md:px-12 px-6 py-10">
        <h1 className=" font-bold text-4xl md:text-5xl text-white">
          CODE AAJ KAL <span className="text-red-600">3.0</span>
        </h1>
        <a
        target={'_blank'}
          className="bg-white py-2 w-min px-6 rounded-sm text-xl"
          href="https://www.codechef.com/CAJK2022"
        >
          VIEW
        </a>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden space-y-12 text-xl">
        <h3 className="">
          A 36-hours online coding contest on CodeChef Platform, hosted by
          CodeChef RCOEM Chapter in collaboration with CodeChef BCET Chapter to
          be conducted on 14th-15th April.
        </h3>

        <div>
          <h5 className=" font-bold uppercase mb-4 text-2xl">
            PRE REQUISITES :{" "}
          </h5>
          <p>
            <p className="mb-2">
              Before registering for the contest, everyone :
            </p>
            <ul className=" ml-8 space-y-2">
              <li className=" list-disc">
                Must have an account on CodeChef. If not, then visit:{" "}
                <a
                  target="blank"
                  className=" underline"
                  href="https://www.codechef.com/login?destination=/"
                >
                  www.codechef.com
                </a>{" "}
                to create a new account.
              </li>
              <li className=" list-disc">
                Should have basic knowledge of any one programming language like
                C, C++, Java, Python, etc.
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h5 className=" font-bold uppercase mb-4 text-2xl">
            About the Contest :{" "}
          </h5>
          <p>
            <ul className=" ml-8  space-y-2">
              <li className=" list-disc">A beginner level coding contest</li>
              <li className=" list-disc">
                36-hour coding contest, hosted on CodeChef platform.
              </li>
              <li className=" list-disc">
                There would be 10-12 problems to solve
              </li>
              <li className=" list-disc">
                Compete with coders from all around the world
              </li>
              <li className=" list-disc">
                {" "}
                Win internship opportunities and cool CodeChef goodies.
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h5 className=" font-bold uppercase mb-4 text-2xl">
            Prizes and Certifications :
          </h5>
          <p>
            <p className="mb-2">Top 3 winners will get:</p>
            <ul className=" ml-8  space-y-2 ">
              <li className=" list-disc">
                Cool goodies by{" "}
                <a
                  target="blank"
                  className=" underline"
                  href="https://www.newtonschool.co/"
                >
                  Newton School
                </a>
                .
              </li>
              <li className=" list-disc">
                {" "}
                Free Mock interviews from Industry Professionals for placement
                prep needs.
              </li>
              <li className=" list-disc">
                {" "}
                Internship opportunities from the likes of{" "}
                <a
                  target="blank"
                  className=" underline"
                  href="https://www.o1codingclub.in/"
                >
                  O(1) Coding Club
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              <b>
                The top Performer from BCET/BCE will get ₹300 cash prize and the
                Runner-up will get ₹100.
              </b>{" "}
            </p>
            <p className="mt-4 mb-2">Few selected top coders would also get:</p>
            <ul className=" ml-8 space-y-2">
              <li className=" list-disc">
                Free Mock interviews from Industry Professionals for placement
                prep needs.
              </li>
              <li className=" list-disc">
                Internship opportunities from the likes of O(1) coding club.
              </li>
            </ul>
          </p>
          <p className="mt-4">
            <b>
              Participation certificates to all on successful completion of the
              challenge.
            </b>{" "}
          </p>
        </div>

        <div className=" space-y-4">
          <p>
            The competition is completely free and open for coders all round the
            world! Contest link will be provided a day before the contest via
            mail to the registered participants.
          </p>
          <p>Gear up and be ready to crack {"chef’s"} witty questions!</p>
        </div>
        <h1 className=" font-bold uppercase text-2xl">Our Collabrator's</h1>
        <div className=" flex flex-wrap ">
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/CodeChef_CUIET_Chapter.jpg"
            alt=""
          />
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/CodeChef_DYPIU_Chapter.jpg"
            alt=""
          />
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/Codechef_IIITN_Chapter.jpg"
            alt=""
          />
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/Codechef_logo_rcoem.png"
            alt=""
          />
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/CodeChef_SCOE_Pune_Chapter.jpg"
            alt=""
          />
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/CodeChef_UIET_Rohtak_Chapter.jpg"
            alt=""
          />
          <img
            className="w-24 h-24"
            src="/img/chapter logo's/CodeChef_UMIT_Chapter.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
