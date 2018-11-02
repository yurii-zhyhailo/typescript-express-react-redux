export default {
    signUpPage: {
      firstNameLabel: 'First Name',
      firstNamePlaceholder: 'Enter a first name',
      lastNameLabel: 'Last Name',
      lastNamePlaceholder: 'Enter a last name',
      cancelButton: "Cancel",
      saveButton: "Save"
    },
    
    signInPage: {},
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
          "The email address is required."
    }
}