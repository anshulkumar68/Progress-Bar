import React, { useEffect, useState } from "react";

const Bar = ({ value }) => {
  const [percent, setPercent] = useState(value);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value >= 100) onComplete();
  }, [value]);

  const onComplete = () => {
    setSuccess(true);
  };

  return (
    <>
      <div className="w-[400px] h-[23px] bg-gray-200 rounded-full border-[1px] border-[#e5e5e5] my-[15px]">
        <span
          className="flex justify-center items-center h-full bg-[#0cc951] rounded-full text-[12px] font-bold"
          style={{
            width: `${percent}%`,
            color: `${percent<60 ? 'black': 'white'}`,
          }}
        >
          {percent}%
        </span>

        <p className="flex justify-center py-[1rem] font-bold text-[2xl] text-[#e5e5e5] my-[15px]">
          {success ? "Complete!" : "Loading..."}
        </p>
      </div>
    </>
  );
};

export default Bar;
