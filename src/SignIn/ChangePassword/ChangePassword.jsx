import FormInput from "./FormInput";
const NewPassword = () => {
  return (
    <div className="mt-[30%]">
      <div>
        <div className="mb-5">
          <h1 className="text-3xl font-medium">Create new password</h1>
          <h5 className="text-gray-500">
            Please create a new password that you don’t use on any other site.
          </h5>
        </div>
        <FormInput />
      </div>
    </div>
  );
};

export default NewPassword;
