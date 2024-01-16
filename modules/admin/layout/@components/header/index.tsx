import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import Link from "next/link";

interface propTypes {
  toggled: boolean;
  setToggled?: Function | any;
}

// export const Header = ({ toggled, setToggled }: propTypes) => {
export const Header = ({ toggled }: any) => {
  return (
    <>
      <div className="sticky top-0 bg-white px-8 py-4 border-b flex items-center justify-between z-50">
        <div>
          <button
            // onClick={() => setToggled(!toggled)}
            className="block lg:hidden"
          >
            <GrMenu />
          </button>
        </div>
        <div className="font-bold flex items-center gap-3">
          <Link href="#" target="_blank">
            <BsBoxArrowUpRight size={17} />
          </Link>
          {/* <ProfileDropdown profileData={profileData} /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
