import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import TextArea from '../../components/UI/TextArea';
import Back from '../../components/UI/Back';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';

const AddPost = () => {
  const platforms = [
    {
      id: 1,
      img: "https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png",
      platform: "Facebook",
    },
    {
      id: 2,
      img: "https://cdn.icon-icons.com/icons2/1753/PNG/512/iconfinder-social-media-applications-3instagram-4102579_113804.png",
      platform: "Instagram",
    },
    {
      id: 3,
      img: "https://cdn.icon-icons.com/icons2/2037/PNG/512/media_social_tiktok_icon_124256.png",
      platform: "TikTok",
    },
  ];

  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [scheduleDate, setScheduleDate] = useState(null);

  const handlePlatformClick = (platformId) => {
    setSelectedPlatforms((prevSelected) =>
      prevSelected.includes(platformId)
        ? prevSelected.filter((id) => id !== platformId)
        : [...prevSelected, platformId]
    );
  };

  return (
    <main className="flex flex-col gap-5">
      <Back to={'/profile'} />
      <h1 className="text-lg font-bold">Create Post</h1>
      <section className="flex phone:flex-col desktop:flex-row w-full items-start gap-5">
        <div className="w-full">
          <TextArea title="Caption" />
          <h3 className="text-sm font-bold">Image (Optional)</h3>
          <div className="bg-grey border-dashed border-2 border-gray-400 rounded-lg h-80 cursor-pointer flex justify-center items-center hover:bg-gray-300 transition ease-in-out focus:ring focus:outline-none">
            <span>Click to insert image</span>
          </div>
        </div>
        <div className="desktop:w-1/2 phone:w-full flex flex-col gap-3">
          <h3 className="text-sm font-bold">Upload to</h3>
          <div className="flex w-full flex-col gap-3">
            {platforms.map((link) => (
              <div
                key={link.id}
                className={`w-full h-14 flex justify-center items-center gap-2 cursor-pointer rounded-lg transition ease-in-out ${
                  selectedPlatforms.includes(link.id)
                    ? 'bg-secondary'
                    : 'bg-grey hover:bg-gray-300'
                }`}
                onClick={() => handlePlatformClick(link.id)}
                tabIndex={0}
              >
                <img className="h-1/2" src={link.img} alt={link.platform} />
                <p className="phone:text-xs desktop:text-sm">{link.platform}</p>
              </div>
            ))}
          </div>
          <h3 className="text-sm font-bold">Schedule (Optional)</h3>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker disablePast label="Basic date picker" />
          </LocalizationProvider>
        </div>
      </section>
      <Button>Upload</Button>
    </main>
  );
};

export default AddPost;
