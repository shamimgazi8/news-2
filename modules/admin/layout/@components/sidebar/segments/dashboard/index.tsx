import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { MenuItem } from "react-pro-sidebar";

interface Props {
  pathname?: string;
}

const SidebarSegmentDashboard = ({ pathname }: Props) => {
  return (
    <MenuItem
      component={<Link href="/admin" />}
      icon={<MdOutlineDashboard className="text-xl" />}
    >
      <span className="text-sm font-medium">Dashboard</span>
    </MenuItem>
  );
};

export default SidebarSegmentDashboard;
