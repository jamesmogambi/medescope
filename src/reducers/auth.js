
const authDefaultState={
  uid:'',
  regNo:'',
  userGender:'',
  academicYear:'',
  loginMessage:'',
  signupMessage:"",
  resetMessage:'',
};
export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        uid:action.user.uid,
        regNo: action.user.regNo,
        userGender:action.user.userGender,
        academicYear:action.user.academicYear
      };

      case 'LOGIN_FAIL':
      return {
        ...state,
        loginMessage:action.message
      };

      case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        signupMessage:action.message
      };
      case 'SIGN_UP_FAIL':
      return {
        ...state,
        signupMessage:action.message
      };


      case 'RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        resetMessage:action.message
      };
      case 'RESET_PASSWORD_FAIL':
      return {
        ...state,
        resetMessage:action.message
      };
      case 'RESET_AUTH':
        return {
          ...state,
          resetMessage:'',
          signupMessage:'',
          loginMessage:''

        };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
