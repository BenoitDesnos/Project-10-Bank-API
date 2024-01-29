/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import EditProfileForm from "../components/EditProfileForm";

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
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
