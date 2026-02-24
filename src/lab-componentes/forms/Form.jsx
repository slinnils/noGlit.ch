import { useActionState } from "react";
import { isEmail, isNotEmpty, doesMatch, isTooShort } from "./validations";

export default function Form() {
  function signupAction(prevFormState, formData) {
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const aquisitionChannel = formData.getAll("aquisition");

    let errors = [];

    if (!isNotEmpty(firstName)) {
      errors.push("please enter your first name");
    }

    if (!isNotEmpty(lastName)) {
      errors.push("please enter your last name");
    }


    if (!isEmail(email) || !isNotEmpty(email)) {
      errors.push("please enter a valid Email address.");
    }

    if (!doesMatch(password, confirmPassword) || !isNotEmpty(password)) {
      errors.push("please enter a valid Password.");
    }

    if(isTooShort(password || confirmPassword)){
        errors.push("your password must be at least 6 characters long.")
    } 


    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          aquisitionChannel,
        },
      };
    }

    return { errors: null };
  }

  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <div className="flex flex-col px-8 py-4 mt-7 rounded-2xl text-[#D1F8EF] bg-linear-to-bl from-[#0d2238] to-[#123458] shadow-xl shadow-stone-900">
      <h1 className="mt-2">Welcome to my Website! Pleaser enter your Data.</h1>

      <form action={formAction} className="flex flex-col items-start">
        <div className="test-input">
          <label>First name:</label>
          <input
            type="text"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="test-input">
          <label>Last name:</label>
          <input
            type="text"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>

        <div className="test-input">
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={formState.enteredValues?.email}
          />
        </div>

        <div className="test-input">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password}
          />
        </div>

        <div className="test-input">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>

        <fieldset className="flex flex-col my-5 pl-4 border-2 border-[#d1f8ef] p-2 w-full">
          <legend><span className="mx-1">How did you find us?</span></legend>
          <div className="flex gap-6">
            <input
              type="checkbox"
              value={"google"}
              name="aquisition"
              defaultChecked={formState.enteredValues?.aquisitionChannel.includes(
                "google",
              )}
            />
            <label>Google</label>
          </div>

          <div className="flex gap-6">
            <input
              type="checkbox"
              value={"friend"}
              name="aquisition"
              defaultChecked={formState.enteredValues?.aquisitionChannel.includes(
                "friend",
              )}
            />
            <label>Friend</label>
          </div>
          <div className="flex gap-6">
            <input
              type="checkbox"
              value={"other"}
              name="aquisition"
              defaultChecked={formState.enteredValues?.aquisitionChannel.includes(
                "other",
              )}
            />
            <label>Other</label>
          </div>
        </fieldset>

        <div className="control">
          <label htmlFor="phone" className="text-[#d1f8ef];">What best describes your role?</label>
          <select
            id="role"
            name="role"
            defaultValue={formState.enteredValues?.role}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <button className="mt-5 self-end">Submit</button>
      </form>
    </div>
  );
}
