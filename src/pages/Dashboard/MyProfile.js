import React from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const MyProfile = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const res = await fetcher.post('add-profile' , data);
        console.log(res);
    };
   
  return (
    <div>
        <div>
      <h2 className="text-3xl">My profile</h2>
     
        <div className="m-10">
          <h3 className="text-3xl m-5">Add More Information About You</h3>
          <form onSubmit= {handleSubmit(onSubmit)}>
          <input
            type="text"
            className="input input-bordered input-success w-full max-w-xs"
            {...register("education")}
          />
          <br />
          <input
            type="text"
            className="input input-bordered input-success w-full max-w-xs"
            {...register("city")}
          />
          <br />
          <input
            type="text"
            className="input input-bordered input-success w-full max-w-xs"
            {...register("phone")}
          />
          <br />
          <button type='submit' className="btn btn-outline m-3">ADD</button><br />
          <a
            className="link-button"
            target="_blank"
            href="https://www.linkedin.com/in/nusrat-jahan-shammi-045ab819b/"
          >
            LinkedIn
          </a>
          </form>
      </div>
    </div>

    </div>
  );
};


export default MyProfile;
