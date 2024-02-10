import { useRef, useState } from "react";
import "../../assets/css/input.scss";

export default function PlaceholderCustom() {
  // 요소가 포커드 되면 이벤트 발생

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setFocused] = useState(false);

  const blurEventHandle = () => {
    if (inputRef.current?.value === "") {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

  return (
    <>
      <div className="container wrapper">
        <h4 className="h2">Placeholder 커스텀</h4>
        <br />
        <br />
        <h6 className="h4">1. Input 필드</h6>
        <br />
        <div className="input-grp">
          <label htmlFor="name" className={isFocused ? "focus-on" : ""}>
            이름
          </label>
          <input
            id="name"
            type="text"
            ref={inputRef}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              blurEventHandle();
            }}
            onChange={(e) => {
              setFocused(true);
            }}
          ></input>
        </div>
        <hr />
        <h6 className="h4">2. Select 필드</h6>
        <div className="input-grp">
          <label
            htmlFor="gender"

            // className={isFocused ? "focus-on" : ""}
          >
            성별
          </label>
          <select name="gender" id="gender">
            <option value="" defaultChecked></option>
            <option value="female">여자</option>
            <option value="male">남자</option>
          </select>
        </div>
      </div>
    </>
  );
}
