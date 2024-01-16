import { AiOutlineSetting } from "react-icons/ai";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  pathname?: string;
}

const SidebarSegmentSettings = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Setting & Configs"
      icon={<AiOutlineSetting className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/news/list" ? "active" : ""}
        component={<Link to="/news/list" />}
      >
        <span className="text-sm font-medium">News Site</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/job/site/list" ? "active" : ""}
        component={<Link to="/job/site/list" />}
      >
        <span className="text-sm font-medium">Job Site</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentSettings;
