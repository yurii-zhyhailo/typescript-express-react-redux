
import {IRegisterFailAction,
        IRegisterInProgressAction,
        IRegisterSuccess} from './registration/register.action'

type ActionTypes = 
    | IRegisterFailAction
    | IRegisterInProgressAction
    | IRegisterSuccess
;

export default ActionTypes;