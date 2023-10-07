import React, { useEffect, useRef , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import  {allItems}  from "../../constants";
import logo6 from "../../assests/logo6.png";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from "../../redux/amazonSlice";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';



const Header = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const auth = getAuth();
  const ref = useRef();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);
  
  const handleLogout = () => {
    signOut(auth).then(() => {
     console.log("Sign-out successful")
     dispatch(userSignOut())
    }).catch((error) => {
      console.error(error)
    });
    
  }

  return (
    <div className="sticky top-0 z-40  ">
        
      <div  className="w-full bg-amazon_light text-white px-4 py-1 flex md:justify-between items-center gap-2 md:gap-4 lgl:gap-2 xl:gap-4">
        {/* ===================== Header Image Start here ======================== */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo6} alt="logoImage" />
          </div>
        </Link>
        {/* ===================== Header Image End here ========================== */}
        {/* ===================== Header Deliver Start here ====================== */}
       
        {/* ===================== Header Deliver End here ======================== */}
        {/* ===================== Header Search Start here ======================== */}
        <div className="hidden lgl:inline-flex h-10 rounded-md flex-grow relative ml-10 mr-5">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200   border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul
                ref={ref}
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent  hover:bg-red-300 cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-red-500 hover:bg-red-600 duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <ManageSearchIcon />
          </span>
        </div>
        {/* ===================== Header Search End here ========================== */}
        {/* ===================== Header Signin Start here ======================== */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {
              userInfo ? (
                  <p className="text-xs text-gray-100 font-medium">
                 {userInfo.userName}
             
              </p>) 
              :
              (  <p className="text-xs text-lightText font-light">
              Hello, sign in
            </p>)
            }
           
            
           
            <p className="hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* ===================== Header Signin End here ========================== */}
        {/* ===================== Header Orders Start here ======================== */}
        <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ===================== Header Orders End here ========================== */}
        {/* ===================== Header Cart Start here ========================== */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
              Cart
            </p>
            <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 animate-bounce bg-[#f44336] text-amazon_blue rounded-full flex justify-center items-center">
              {products.length > 0 ? products.length : 0}
            </span>
          </div>
        </Link>
        {userInfo && (
          <div
             onClick={handleLogout}
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
        {/* ===================== Header Cart End here ============================ */}
        {/* ============ Image Start here ================ */}
        {/* ============ Image End here ================== */}
        {/* ============ Deliver Start here ============== */}
        {/* ============ Deliver End here ================ */}
        {/* ============ Search Start here =============== */}
        {/* ============ Search End here ================= */}
        {/* ============ Signin Start here =============== */}
        {/* ============ Signin End here ================= */}
        {/* ============ Orders Start here =============== */}
        {/* ============ Orders End here ================= */}
        {/* ============ Cart Start here ================= */}
        {/* ============ Cart End here =================== */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header