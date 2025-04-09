import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import CharAvatar from "../Cards/CharAvatar";
import ChangeLanguage from "../ChangeLanguage";

import { SIDE_MENU_DATA } from "../../utils/data";

import { useLanguage } from "../../hooks/useLanguage";

const SideMenu = ({ activeMenu }: { activeMenu: string }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const { user, clearUser } = useContext(UserContext);

  const handleClick = (route: string) => {
    if (route === 'logout') {
      handleLogout();
      return;
    }

    navigate(route);
  }

  const handleLogout = () => {
    localStorage.clear();
    if (clearUser) clearUser();
    navigate('/login');
  }

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20 flex flex-col">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profile_image_url ? (
          <img src={user.profile_image_url || ""} alt="Profile Image" className="w-20 h-20 bg-slate-400 rounded-full" />
        ) : (
          <CharAvatar 
            fullName={user?.full_name}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}

        <h5 className="text-gray-950 font-medium leading-6">
          {user?.full_name || ""}
        </h5>
      </div>

      <div className="flex-1">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] ${activeMenu == item.name ? 'text-white bg-primary' : ''} py-3 px-6 rounded-lg mb-3`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-xl" />
            {t(item.label)}
          </button>
        ))}
      </div>

      <div className="sm:hidden">
        <ChangeLanguage />
      </div>
    </div>
  );
}

export default SideMenu;
