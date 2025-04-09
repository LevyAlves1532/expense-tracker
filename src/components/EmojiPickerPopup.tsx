import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu";

import { useLanguage } from "../hooks/useLanguage";

const EmojiPickerPopup = ({ icon, onSelect }: { icon: string, onSelect: (selectedIcon: string) => void }) => {
  const { t } = useLanguage();

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
      <div 
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-amber-50 text-primary rounded-lg">
          {icon ? (
            <img src={`${icon}`} alt="Icon" className="w-12 h-12" />
          ) : (
            <LuImage />
          )}
        </div>

        <p className="">
          {icon ? t('dashboard.income.graphic.form.icon.filled') : t('dashboard.income.graphic.form.icon.none')}
        </p>
      </div>

      {isOpen && (
        <div className="relative">
          <button 
            className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <LuX />
          </button>

          <EmojiPicker 
            open={isOpen}
            onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || '')}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerPopup;
