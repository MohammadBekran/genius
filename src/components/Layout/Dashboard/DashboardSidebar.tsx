import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { useProfileInfo } from "../../../hooks/user-panel/useProfileInfo";

import { DASHBOARD_MENU_ITEMS } from "../../../core/data/dashboard/dashboard-menu-items";
import { removeItem } from "../../../core/services/common/storage.services";

import { isUserLoginChange } from "../../../redux/user-login";

import { DarkModeButton } from "../../common/DarkModeButton";

import dashboardLogo from "../../../assets/images/Dashboard/Icons/dashboard-logo.svg";
import notificationIcon from "../../../assets/images/Dashboard/Icons/notification.svg";

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { data: userProfile } = useProfileInfo();

  const onLogout = () => {
    removeItem("token");
    dispatch(isUserLoginChange(false));
    toast.info("شما از سایت خارج شدید ...");
    window.location.pathname = "/";
  };

  return (
    <div className="dashboardSidebar">
      <div className="dashboardSideBarTopSectionWrapper">
        <div className="dashboardSidebarUserInfoWrapper">
          <img
            src={userProfile?.currentPictureAddress}
            className="dashboardSidebarAvatar"
          />
          <div className="mt-2">
            <h5 className="dashboardSidebarUsername">{`${
              userProfile?.fName || "کاربر"
            } ${userProfile?.lName || "نابغه"}`}</h5>
            <span className="dashboardSidebarUserPhoneNumber">
              {userProfile?.phoneNumber}
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
        {DASHBOARD_MENU_ITEMS.map((item) =>
          item.href ? (
            <Link
              key={item.icon}
              to={item.href || ""}
              className={`dashboardMenuItem  ${
                pathname === item.href
                  ? "bg-dashboardActiveMenuItem"
                  : "dashboardMenuItemHover"
              }`}
            >
              <img src={item.icon} />
              <span className="dashboardMenuItemLabel">{item.label}</span>
            </Link>
          ) : (
            <button
              className={`dashboardMenuItem  ${
                pathname === item.href
                  ? "bg-dashboardActiveMenuItem"
                  : "dashboardMenuItemHover"
              }`}
              onClick={onLogout}
            >
              <img src={item.icon} />
              <span className="dashboardMenuItemLabel">{item.label}</span>
            </button>
          )
        )}
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
