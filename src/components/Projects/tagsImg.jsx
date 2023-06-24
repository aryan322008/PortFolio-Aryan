import {useState} from "react";

const TagImg = ({ icon, name, size }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="flex flex-col-reverse justify-center items-center relative"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <img
        src={icon}
        alt={name}
        key={name}
        className={`${size==="lg"?"h-20": "h-10"} ${size==="lg"?"w-20": "w-10"}`}
      />

      {display && (
        <span
          className="w-fit h-fit inline-block
       bg-white font-semibold text-center
       text-[12px] px-2 text-black rounded-3xl absolute top-[-15px]"
        >
          {name}
        </span>
      )}
    </div>
  );
};

export default TagImg;
