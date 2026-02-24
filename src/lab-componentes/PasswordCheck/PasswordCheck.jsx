import { useState } from "react";
import "./password-check.css";

export default function PasswordChecker() {
  const [password, changePassword] = useState("");
  const [username, changeUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function passwordStrengthCheck(password) {
    return {
      isLongEnough: password.length >= 8,
      containsNumber: /\d/.test(password),
      containsCapLetter: /[A-Z]/.test(password),
    };
  }

  const check = passwordStrengthCheck(password);
  const areCondMet =
    check.isLongEnough && check.containsCapLetter && check.containsNumber;

  function handlePasswordChange(event) {
    let userPassword = event.target.value;
    changePassword(userPassword);
  }

  function handleUsernameInput(event) {
    changeUsername(event.target.value);
  }

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  function showWeakness() {
    if (password.length > 0) {
      return (
        <>
          <button id="show-password" onClick={handleShowPassword}>
            {showPassword ? "hide" : "show"} Password
          </button>
          <p>
            password strenght:{" "}
            <span className={weaknessColor}>{strengthLabel}</span>
          </p>

          <ul>
            <li>{check.isLongEnough ? "✔" : "✖"} at least 8 characters</li>
            <li>{check.containsNumber ? "✔" : "✖"} has numbers</li>
            <li>{check.containsCapLetter ? "✔" : "✖"} has uppercase letter</li>
          </ul>
        </>
      );
    }
  }

  let weaknessColor = "weak";
  let strengthLabel = "weak";
  const points =
    (check.isLongEnough ? 1 : 0) +
    (check.containsCapLetter ? 1 : 0) +
    (check.containsNumber ? 1 : 0);

  if (points === 2) {
    strengthLabel = "medium";
    weaknessColor = "medium";
  }
  if (points === 3) {
    strengthLabel = "strong";
    weaknessColor = "strong";
  }

  return (
    <div className="flex flex-col items-center gap-20">
      <h1>Please enter Username and Password</h1>
      <div className="flex flex-col justify-center items-baseline gap-5">
        <input
          className="border border-white"
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsernameInput}
        />
        <input
          className="border border-white"
          placeholder="password"
          id="pw"
          type={!showPassword ? "password" : "text"}
          onChange={handlePasswordChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && areCondMet) {
              alert("hehehe jetzt hab ich dein Passwort 😈");
            }
          }}
          value={password}
        />

        

        <button
        className="ml-auto"
          disabled={!areCondMet}
          onClick={() => alert("hehehe jetzt hab ich dein Passwort 😈")}
        >
          Register
        </button>
        {showWeakness()}
      </div>
    </div>
  );
}
