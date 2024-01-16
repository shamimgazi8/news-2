import { GrMultimedia } from "react-icons/gr";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  pathname?: string;
}

const SidebarSegmentMedia = ({ pathname }: Props) => {
  return (
    <MenuItem
      className={pathname == "/media/list" ? "active" : ""}
      component={<Link to="/media/list" />}
      icon={<GrMultimedia className="text-lg" />}
    >
      <span className="text-sm font-medium">Media</span>
    </MenuItem>
  );
};

export default SidebarSegmentMedia;
