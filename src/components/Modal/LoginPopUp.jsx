import { MdClose } from "react-icons/md";

function LoginPopUp({ setShowModal }) {
  return (
    <>
      <div className="fixed inset-0 z-50 mx-4 flex items-center justify-center overflow-y-auto  overflow-x-hidden">
        <div className="relative my-6 mx-auto w-96 max-w-md">
          {/*content*/}
          <div className="bg-secondary relative flex w-full flex-col rounded-md border-0 shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className=" bg-theme flex items-start justify-between rounded-t-md p-4">
              <h3 className="text-3xl font-semibold">LoginPopUp</h3>
              <button
                className="float-right ml-auto border-0  p-1 text-3xl font-semibold leading-none outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-textprimary block h-6 w-6 text-2xl outline-none focus:outline-none">
                  <MdClose />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
              <form action="" className="space-y-4 tracking-wide">
                <div className="flex flex-col gap-y-2">
                  <label className="text-xl " htmlFor="">
                    Title
                  </label>
                  <input
                    className=" bg-background nm-input  h-10 appearance-none rounded-md  p-2 outline-none"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-xl " htmlFor="">
                    Description
                  </label>
                  <textarea
                    className="bg-background nm-input appearance-none rounded-md  p-2 outline-none"
                    name=""
                    id=""
                    cols="25"
                    rows="7"
                    placeholder="Have LoginPopUp? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help."
                  ></textarea>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className=" flex items-center justify-end  p-6">
              <button
                className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="pink"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
    </>
  );
}

export default LoginPopUp;