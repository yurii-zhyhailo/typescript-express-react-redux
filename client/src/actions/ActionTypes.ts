
import {IRegisterFailAction,
        IRegisterInProgressAction,
        IRegisterSuccessAction} from './registration/register.action'

type ActionTypes = 
    | IRegisterFailAction
    | IRegisterInProgressAction
    | IRegisterSuccessAction
;

export default ActionTypes;