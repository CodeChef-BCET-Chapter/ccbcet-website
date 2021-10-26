import React from "react";


export default function Foot() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6 flex justify-center border-t-2 font-serif ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">CodeChef BCET Chapter</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              CodeChef BCET Chapter is a community organisation established with the help of CodeChef to instill the culture of the challenging mind sport of competitive programming, training students towards ICPC and other prestigious contests.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href="https://twitter.com/CodeChefBCET " className="fa fa-twitter " target='_blank'></a>
              </button>
              <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5 " type="button">
                <a href="https://www.facebook.com/codechefbcetchapter" className="fa fa-facebook-square" target='_blank'></a>
              </button>
              <button className="bg-white text-orange-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href=" https://www.linkedin.com/company/codechef-bcet-chapter/" className="fa fa-linkedin" target='_blank'></a>
              </button>
              <button className="bg-white text-black-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href="https://github.com/CodeChef-BCET-Chapter" className="fa fa-github" target='_blank'></a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contribute</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Report a Bug</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">View Resource</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact Us</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#" >DA-8, Sahid Sukumar Banerjee Sarani, Bidhannagar, Durgapur, West Bengal 713212, IN</a>
                    <p><a href="tel:123-456-7890">6206665898, 9097994880</a></p>
                    <a class="mail" href="mailto:codechefbcetchapter@gmail.com">codechefbcetchapter@gmail.com</a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-700 font-semibold py-1">Copyright © Codechef BCET Chapter <span id="get-current-year">2021</span> </div>
          </div>
        </div>
      </div>
    </footer>

  )
}