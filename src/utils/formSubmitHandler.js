const saveData = (email, password) => {
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
};

export const formSubmitHandler = (e, email, password, navigateFun) => {
  e.preventDefault();

  if (email !== "" && password !== "") {
    console.log("Email:", email);
    console.log("Password:", password);
    saveData(email, password);
    navigateFun("users");
  } else {
    alert("Please fill all the fields");
  }
};
