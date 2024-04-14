const PayementDetails = () => {
  return (
    <div className="relative mt-4 flex flex-col justify-center items-center">
      <label
        htmlFor=""
        className={`absolute pointer-events-none -top-6 text-sm text-gray-500`}
      >
        Card Number <span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        placeholder="Card Number"
        className="outline-none border-b-2 px-2 py-1 text-sm placeholder:text-xs"
      />
    </div>
  );
};

export default PayementDetails;
