import type { FieldErrors, UseFormRegister } from "react-hook-form";

type shippingAddressProps = {
  register: UseFormRegister<{
    address: string;
    email: string;
    firstName: string;
    lastName: string;
    shippingCountry: string;
    city: string;
    zipCode: string;
  }>;
  errors: FieldErrors<{
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    shippingCountry: string;
    city: string;
    zipCode: string;
  }>;
};

const ShippingAddress = ({ errors, register }: shippingAddressProps) => {
  return (
    <>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          Fisrt Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("firstName")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.firstName ? errors.firstName.message : ""}
        </p>
      </div>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          Last Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("lastName")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.lastName ? errors.lastName.message : ""}
        </p>
      </div>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          Address <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter address"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("address")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.address ? errors.address.message : ""}
        </p>
      </div>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("email")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.email ? errors.email.message : ""}
        </p>
      </div>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          Shipping Country <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter shipping country"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("shippingCountry")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.shippingCountry ? errors.shippingCountry.message : ""}
        </p>
      </div>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          City <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter city"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("city")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.city ? errors.city.message : ""}
        </p>
      </div>
      <div className="relative">
        <label
          htmlFor=""
          className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
        >
          Zip Code <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter zip code"
          className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
          {...register("zipCode")}
        />
        <p className="text-red-600 text-center text-xs tracking-wider max-[400px]:text-[10px]">
          {errors.zipCode ? errors.zipCode.message : ""}
        </p>
      </div>
    </>
  );
};

export default ShippingAddress;
