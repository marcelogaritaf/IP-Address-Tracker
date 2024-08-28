import { useRef } from "react";
import "./inputCSS.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const InputSearchComponent = () => {
  const inputRef = useRef(null);
  return (
    <div className="input-section">
      <form>
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
