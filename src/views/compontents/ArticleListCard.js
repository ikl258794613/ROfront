import { Link } from "react-router-dom";
import sta from "../../imges/sta.png";
const ArticleListCard = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2">
        <div className="border-2 rounded-md bg-white w-full shadow-xl">
          <div className="flex justify-center mt-2">
            <img src={sta} alt="風魔飛標" />
          </div>
          <div className="flex flex-col p-5">
            <h1 className="text-2xl text-center">
              建立屬於自己的<span className="text-blue-500">配裝</span>{" "}
            </h1>
            <p className="mt-5">想知道裝備搭配效果，又不想花錢測試？</p>
            <p>那麼這個計算機非常適合您！</p>
            <Link
              to="/calculator"
              className="bg-yellow-500 p-3 mt-3 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-lg"
            >
              <button>
                <span>建立裝備</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleListCard;
