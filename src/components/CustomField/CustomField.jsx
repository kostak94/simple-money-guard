import { forwardRef, useState } from "react";
import icon from "../../assets/sprite.svg";
import Icon from "../../helpers/Icon/Icon";

const CustomField = forwardRef(function Comp(
  { type, placeholder, error, ...inputProps },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label>
        <input
          type={showPassword ? "text" : type}
          ref={ref}
          {...inputProps}
          placeholder={placeholder}
          autoComplete="off"
        />
        {type === "password" ? (
          <svg onClick={() => setShowPassword(!showPassword)}>
            <use
              href={`${icon}${
                showPassword ? "#icon-eye" : "#icon-eye-blocked"
              }`}></use>
          </svg>
        ) : (
          <Icon
            id={type === "email" ? "#icon-email" : "#icon-user"}
            className=""
          />
        )}
      </label>
      {error && <p>{error}</p>}
    </div>
  );
});
export default CustomField;
