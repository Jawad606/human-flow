import { useState } from "react";
import PropTypes from "prop-types";
import SocialMediaInput from "../../../components/commen/socialMediaInput/SocialMediaInput";
import { FaX } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const SocialDetails = ({ register, errors }) => {
  const [socialAccounts, setSocialAccounts] = useState([
    { id: "socialmedia-1" },
  ]);

  const handleAddSocialAccount = () => {
    const newId = `socialmedia-${socialAccounts.length + 1}`;
    setSocialAccounts([...socialAccounts, { id: newId }]);
  };
   const handleRemoveSocialAccount = (index) => {
    const confirmation = window.confirm('Are you sure you want to remove this social media account?');
    if (confirmation) {
      const updatedAccounts = [...socialAccounts];
      updatedAccounts.splice(index, 1);
      setSocialAccounts(updatedAccounts);
    }
  };


  return (
    <div className="grid grid-cols-1 gap-4">
      {socialAccounts.map((account, index) => (
        <div key={account.id} className="mb-4 flex gap-4 items-center">
          <SocialMediaInput
            id={account.id}
            errors={errors}
            type="text"
            showLabel={true}
            placeholder="Add URL"
            register={register}
            required={{
              required: {
                value: true,
                message: "URL is required",
              },
            }}
            label={`Social Media Account ${index + 1}`}
          />
          {index > 0 && (
            <button
              onClick={() => handleRemoveSocialAccount(index)}
              className=" bg-rose-100 hover:bg-red-200 text-red-500 font-bold p-5 rounded"
            >
              <FaX size={'24px'} />
            </button>
          )}
        </div>
      ))}
      <button
        onClick={handleAddSocialAccount}
        className="mt-4 bg-green-100  hover:bg-green-200 text-green-800  p-4 rounded flex justify-center items-center gap-4 "
      >
       <FaPlus/> Add Social Media Account
      </button>
    </div>
  );
};

SocialDetails.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default SocialDetails;
