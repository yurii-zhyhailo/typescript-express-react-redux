export default {
    registerPage: {
      title: 'Register',
      firstNameLabel: 'First Name',
      firstNamePlaceholder: 'Enter first name',
      lastNameLabel: 'Last Name',
      lastNamePlaceholder: 'Enter last name',
      cancelButton: "Cancel",
      saveButton: "Save"
    },
    loginPage: {
      title: 'Login',
      usernameLabel: "Username or Email",
      usernamePlaceholder: "Enter username",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      loginButton: "Log In",
      cancelButton: "Cancel",
    },
    userViewModel: {
        nameIsNotEmptyMessage: "Name is required.",
        nameMaxLengthMessage:
          "Name must be shorter than or equal to $constraint1 characters.",
        passwordIsNotEmptyMessage: "Password is required.",
        passwordMaxLengthMessage:
          "Password must be shorter than or equal to $constraint1 characters.",
        userNameIsEmailMessage: "Email address must be an email address.",
        userNameIsNotEmptyMessage: "Email address is required.",
        userNameMaxLengthMessage:
          "Email address must be shorter than or equal to $constraint1 characters.",
        emailAddressIsNotEmptyMessage:
          "The email address is required.",
        cancelButton: 'Cancel'
    }
}