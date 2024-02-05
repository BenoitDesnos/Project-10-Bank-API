/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import EditProfileForm from "../components/EditProfileForm";
import Account from "../components/Account";

const Profile = () => {
  const dispatchEvent = useDispatch();
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { isConnected, userProfile } = useSelector((state) => state.user);
  useEffect(() => {
    if (isConnected) {
      dispatchEvent(fetchProfile());
    } else {
      navigate("/");
    }
  }, [isConnected]);
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
          </h1>
          {isEditOpen ? (
            <EditProfileForm
              setIsEditOpen={setIsEditOpen}
              userProfile={userProfile}
            />
          ) : (
            <>
              <h1>{userProfile?.firstName + " " + userProfile?.lastName}</h1>
              <button
                className="edit-button"
                onClick={() => setIsEditOpen(true)}
              >
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accountsData.map((accountData) => (
          <Account accountData={accountData} key={accountData.id} />
        ))}
      </main>
    </>
  );
};

export default Profile;

const accountsData = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];