import { Link } from "react-router-dom";
const ActiveCampaign = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-medium">Active Campaign</h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-10">
        <div className="flex flex-nowrap ">
          <Link to="/campaign/QXyOx7">
            <div className="inline-block px-3">
              <img
                src="Campaign2.jpg"
                alt=""
                className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>
          <Link to="/campaign/YdaE5M">
            <div className="inline-block px-3">
              <img
                src="Campaign1.jpg"
                alt=""
                className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              />
            </div>
          </Link>

          {/* <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;
