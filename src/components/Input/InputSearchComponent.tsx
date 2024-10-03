import { useRef } from "react";
import "./inputCSS.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import useTrackerStore from "../../store";
const InputSearchComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useTrackerStore((s) => s.setSearchText);
  return (
    <div className="input-section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current) {
            setSearchText(inputRef.current.value);
            console.log(inputRef.current.value);
          }
        }}
      >
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          ref={inputRef}
        />
        <button>
          <MdOutlineArrowForwardIos />
        </button>
      </form>
    </div>
  );
};

export default InputSearchComponent;
