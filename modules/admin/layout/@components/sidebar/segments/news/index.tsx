import Link from "next/link";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MenuItem, SubMenu } from "react-pro-sidebar";

interface Props {
  pathname?: string;
}

const SidebarSegmentNews = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="News"
      icon={<HiOutlineNewspaper className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/posts" ? "active" : ""}
        component={<Link href="/admin/news" />}
      >
        <span className="text-sm font-medium">All News</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/posts/add" ? "active" : ""}
        component={<Link href="/admin/news/add" />}
      >
        <span className="text-sm font-medium">Add News</span>
      </MenuItem>
      <SubMenu className={`text-sm font-medium`} label="Categories">
        <MenuItem
          className={pathname == "/categories" ? "active" : ""}
          component={<Link href="/admin/categories" />}
        >
          <span className="text-sm font-medium">All Category</span>
        </MenuItem>
        <MenuItem
          className={pathname == "/categories/add" ? "active" : ""}
          component={<a href="/admin/categories/add" />}
        >
          <span className="text-sm font-medium">Add Category</span>
        </MenuItem>
      </SubMenu>
      <SubMenu className={`text-sm font-medium`} label="Topics">
        <MenuItem
          className={pathname == "/tags" ? "active" : ""}
          component={<Link href="/admin/tags" />}
        >
          <span className="text-sm font-medium">All Topics</span>
        </MenuItem>
        <MenuItem
          className={pathname == "/tags/add" ? "active" : ""}
          component={<a href="/admin/tags/add" />}
        >
          <span className="text-sm font-medium">Add Topic</span>
        </MenuItem>
      </SubMenu>
    </SubMenu>
  );
};

export default SidebarSegmentNews;
