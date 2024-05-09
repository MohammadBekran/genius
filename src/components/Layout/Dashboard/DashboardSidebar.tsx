import { Link, useLocation } from "react-router-dom";

import { DASHBOARD_MENU_ITEMS } from "../../../core/data/dashboard/dashboard-menu-items";

import { DarkModeButton } from "../../common/DarkModeButton";

import avatarImage from "../../../assets/images/Dashboard/Avatars/avatar1.png";
import dashboardLogo from "../../../assets/images/Dashboard/Icons/dashboard-logo.svg";
import notificationIcon from "../../../assets/images/Dashboard/Icons/notification.svg";

const DashboardSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="dashboardSidebar">
      <div className="dashboardSideBarTopSectionWrapper">
        <div className="dashboardSidebarUserInfoWrapper">
          <img src={avatarImage} className="dashboardSidebarAvatar" />
          <div className="mt-2">
            <h5 className="dashboardSidebarUsername">محمد بکران</h5>
            <span className="dashboardSidebarUserPhoneNumber">
              +989195461847
            </span>
          </div>
        </div>
        <div>
          <div className="dashboardSideBarNotificationWrapper">
            <img
              src={notificationIcon}
              className="dashboardSideBarNotificationIcon"
            />
            <span className="dashboardSideBarNotificationCount">2</span>
          </div>
        </div>
      </div>
      <div className="dashboardDivider" />
      <div className="dashboardMappedMenuItemsWrapper">
        {DASHBOARD_MENU_ITEMS.map((item) => (
          <Link
            key={item.icon}
            to={item.href}
            className={`dashboardMenuItem  ${
              pathname === item.href
                ? "bg-dashboardActiveMenuItem"
                : "dashboardMenuItemHover"
            }`}
          >
            <img src={item.icon} />
            <span className="dashboardMenuItemLabel">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="dashboardBottomSection">
        <Link to="/" className="w-[70%]">
          <img src={dashboardLogo} />
        </Link>
        <DarkModeButton isDashboard />
      </div>
    </div>
  );
};

export { DashboardSidebar };