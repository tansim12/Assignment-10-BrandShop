import useAuthContext from "../../useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <div className="avatar">
        <div className="w-8 sm:w-10 md:mr-5 mr-2 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL ? user?.photoURL : ""} alt="Author" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
