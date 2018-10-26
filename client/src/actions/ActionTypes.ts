
import { IRegisterFailureAction,
         IRegisterInProgressAction,
         IRegisterSuccessAction } from './registration/register.action'
import { ILoginFailureAction,
         ILoginInProgressAction,
         ILoginSuccessAction } from './authentication'

type ActionTypes = 
    | IRegisterFailureAction
    | IRegisterInProgressAction
    | IRegisterSuccessAction
    | ILoginFailureAction
    | ILoginInProgressAction
    | ILoginSuccessAction
;

export default ActionTypes;