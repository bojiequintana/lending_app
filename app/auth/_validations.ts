interface FormErrors {
  email?: string;
  password?: string;
}

export const loginValidations = (body: FormData) => {
  const email = body.get("email") as string;
  const password = body.get("password") as string;

  const fieldErrors: FormErrors = {};
  if (!email) {
    fieldErrors.email = "This field is required";
  } else if (!email.includes("@")) {
    fieldErrors.email = "Invalid email address";
  }

  if (!password) {
    fieldErrors.password = "This field is required";
  } else if (password.length < 6) {
    fieldErrors.password = "Password should be at least 6 characters";
  }
  return { fieldErrors, errorCount: Object.keys(fieldErrors).length };
};

export const signUpValidations = (body: FormData) => {
  const email = body.get("email") as string;
  const password = body.get("password") as string;

  const fieldErrors: FormErrors = {};
  if (!email) {
    fieldErrors.email = "This field is required";
  } else if (!email.includes("@")) {
    fieldErrors.email = "Invalid email address";
  }

  if (!password) {
    fieldErrors.password = "This field is required";
  } else if (password.length < 6) {
    fieldErrors.password = "Password should be at least 6 characters";
  }

  return { fieldErrors, errorCount: Object.keys(fieldErrors).length };
};
