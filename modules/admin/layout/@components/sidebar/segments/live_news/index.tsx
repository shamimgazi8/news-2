import { MdOutlineLiveTv } from "react-icons/md";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  pathname?: string;
}

const SidebarSegmentLiveNews = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Live Video News"
      icon={<MdOutlineLiveTv className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/live-news" ? "active" : ""}
        component={<Link to="/live-news" />}
      >
        <span className="text-sm font-medium">All Live News</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/live-news/add" ? "active" : ""}
        component={<a href="/live-news/add" />}
      >
        <span className="text-sm font-medium">Add New</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentLiveNews;
