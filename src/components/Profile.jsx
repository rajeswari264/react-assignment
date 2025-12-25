import React from "react";
import { Camera } from "lucide-react";
import profile from '../assets/profile.png'
import icon from '../assets/icon.png'
const Profile = () => {
  return (
    <>
      <div className="px-1 py-4">
        <h2 className="text-sm font-medium text-gray-700">Account Settings</h2>
      </div>
      <div className="h-full bg-gray-100 border border-gray-100 flex justify-center items-center">
        <div className="h-full">
          <div className="px-6 py-6">
            <div className="flex items-start gap-4">
              <div className="relative">
                <img
                  src={profile}
                  alt="profile"
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div className="absolute bottom-0 -right-0.5 rounded-full flex items-center justify-center">
              <img
                src={icon}
                alt="profile"
                className="rounded-full object-cover"
              />
            </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Marry Doe
                </h3>
                <p className="text-xs text-gray-500">Marry@Gmail.Com</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-6 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>

            <div className="border-t border-dashed mt-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
