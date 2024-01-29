import { useDispatch, useSelector } from "react-redux";
import { fetchModifyName } from "../redux/slices/userSlice";
import { useRef } from "react";

const EditProfileForm = ({ setIsEditOpen, userProfile }) => {
  const dispatchEvent = useDispatch();
  const { isModifyProfile } = useSelector((state) => state.user);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.currentTarget.firstname.value;
    const lastName = e.currentTarget.lastname.value;
    dispatchEvent(fetchModifyName({ firstName, lastName }));
    formRef.current?.reset();
    setIsEditOpen(false);
  };

  return (
    <>
      <form ref={formRef} className="edit-form" onSubmit={handleSubmit}>
        <div className="edit-inputs-container">
          <input
            type="text"
            id="firstname"
            placeholder={userProfile.firstName}
            className="edit-inputs"
          />
          <input
            type="text"
            id="lastname"
            placeholder={userProfile.lastName}
            className="edit-inputs"
          />
        </div>
        <div className="edit-buttons-container">
          <button className="edit-buttons" type="submit">
            Save
          </button>
          <button
            className="edit-buttons"
            type="button"
            onClick={() => setIsEditOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
      {isModifyProfile && (
        <p className="error-message">Modification in progress...</p>
      )}
    </>
  );
};

export default EditProfileForm;
