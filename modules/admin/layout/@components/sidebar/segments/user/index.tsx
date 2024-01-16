import { FiUsers } from "react-icons/fi";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

interface Props {
  pathname?: string;
}

const SidebarSegmentAuthor = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Author"
      icon={<FiUsers className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/author/list" ? "active" : ""}
        component={<Link href={"/"} />}
      >
        <span className="text-sm font-medium">Author List</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/author/list" ? "active" : ""}
        component={<Link href={"/"} />}
      >
        <span className="text-sm font-medium">Create Author</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentAuthor;
