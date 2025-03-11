import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

export type Props = {
  image: File | null;
  setImage: Dispatch<SetStateAction<File | null>>;
};

const ProfilePhotoSelector = ({ image, setImage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [ previewUrl, setPreviewUrl ] = useState<string | null>(null);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files ? files[0] : null;

    if (file) {
      // Update the image state
      setImage(file);

      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  }

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  }

  const onChooseFile = () => {
    inputRef.current?.click();
  }

  return (
    <div className="flex justify-center mb-6">
      <input 
        type="file" 
        accept="image/*"
        ref={inputRef}
        onChange={handleChangeImage}
        className="hidden"
      />

      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative">
          <LuUser className="text-4xl text-primary" />

          <button 
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1"
            onClick={onChooseFile}
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img 
            src={previewUrl || ''} 
            className="w-20 h-20 rounded-full object-cover"
            alt="profile photo" 
          />

          <button 
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfilePhotoSelector;
