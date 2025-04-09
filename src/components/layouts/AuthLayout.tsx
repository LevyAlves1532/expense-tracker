import { ReactNode } from "react"
import { LuTrendingUp } from "react-icons/lu"

import ChangeLanguage from "../ChangeLanguage";

import { useLanguage } from "../../hooks/useLanguage";

export type Props = {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const { t } = useLanguage();

  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <div className="flex md:flex-row flex-col md:items-center md:justify-between">
          <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
          <ChangeLanguage />
        </div>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-orange-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-amber-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-yellow-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-orange-500 absolute -bottom-7 -left-5" />

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard 
            icon={<LuTrendingUp />}
            label={t('auth.login.card.track.title')}
            value={t('auth.login.card.track.number')}
            color="bg-primary"
          />
        </div>

        <div className="w-64 h-40 lg:h-[21vw] lg:w-[90%] rounded-xl bg-white absolute bottom-10 shadow-lg shadow-blue-400/15" />
      </div>
    </div>
  )
}

export default AuthLayout

type StatsInfoCardProps = { 
  icon: ReactNode, 
  label: string, 
  value: string, 
  color: string 
};

const StatsInfoCard = ({ icon, label, value, color }: StatsInfoCardProps) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-amber-400/10 border border-gray-200/50 z-10">
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">{value}</span>
      </div>
    </div>
  );
}
