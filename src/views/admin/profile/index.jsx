import Banner from "./components/Profile";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import Profile from "./components/Profile";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-2 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-7 lg:!mb-0">
          <Profile />
        </div>
 
        <div className="col-span-3 lg:col-span-5 lg:!mb-0">
          <Storage />
        </div>

      </div>


      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
      <div className="col-span-5 lg:col-span-7 lg:mb-0 3xl:col-span-5">
          <General />
        </div>
      <div className="z-0 col-span-5 lg:col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>

      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-7 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>

        <div className="col-span-5 lg:col-span-5 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
