const AppReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_MENU_TO_HOME':
            return {
                ...state,
                activeMenu: 'home'
            };
        case 'CHANGE_ACTIVE_MENU_TO_ABOUT':
            return {
                ...state,
                activeMenu: 'about'
            };
        case 'CHANGE_ACTIVE_MENU_TO_HOW_IT_WORKS':
            return {
                ...state,
                activeMenu: 'howitworks'
            };
        case 'CHANGE_ACTIVE_MENU_TO_PROJECT':
            return {
                ...state,
                activeMenu: 'project'
            };
        case 'CHANGE_ACTIVE_MENU_TO_REGISTER':
            return {
                ...state,
                activeMenu: 'register'
            };
        case 'CHANGE_ACTIVE_MENU_TO_BLOGS':
            return {
                ...state,
                activeMenu: 'blogs'
            };
        case 'CHANGE_ACTIVE_MENU_TO_CONTACTUS':
            return {
                ...state,
                activeMenu: 'contactus'
            };
        case 'CHANGE_ACTIVE_MENU_TO_LETSCONNECT':
            return {
                ...state,
                activeMenu: 'letsconnect'
            }    
        case 'CHANGE_ACTIVE_MENU_TO_LOGIN':
            return {
                ...state,
                activeMenu: 'login'
            }
        case 'CLEAR_REGISTER_FORM':
            return {
                ...state,
                registerForm: {}
            }    
        case 'UPDATE_REGISTER_FORM_PHONE_NUMBER':
            if(state.registerForm 
                && state.registerForm.phoneNumber 
                && state.registerForm.phoneNumber.length == 10
                && action.payload.length > 10)
                return state;

            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    phoneNumber: action.payload
                }
            } 
        case 'UPDATE_REGISTER_FORM_EMAIL':
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    email: action.payload
                }
            }    
        case 'UPDATE_REGISTER_FORM_PASSCODE':
            return {
                ...state,
                registerForm: {
                    ...state.registerForm,
                    passcode: action.payload
                }
            }  
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                profile: { ...state.loginForm },
                loginForm: {}
            }
        case 'CLEAR_LOGIN_FORM':
            return {
                ...state,
                loginForm: {}
            }    
        case 'UPDATE_LOGIN_FORM_PHONE_NUMBER':
            if(state.loginForm 
                && state.loginForm.phoneNumber 
                && state.loginForm.phoneNumber.length == 10
                && action.payload.length > 10)
                return state;

            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    phoneNumber: action.payload
                }
            }     
        case 'UPDATE_LOGIN_FORM_PASSCODE':
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    passcode: action.payload
                }
            }        
        case 'CHECK_PROFILES_SUCCESS':
            return {
                ...state,
                fetchedProfiles: action.payload
            }  
        case 'UPDATE_USER_PHONE_NUMBER':
            return {
                ...state,
                profilesForm:{
                    ...state.profilesForm,
                    phoneNumber: action.payload
                }
            }
        case 'UPDATE_USER_PHONE_EMALID':
            return {
                ...state,
                profilesForm: {
                    ...state.profilesForm,
                    email: action.payload
                }
            }     
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                profilesForm: {},
                profileAdded: true
            }        
        default: return state;
    };
};

export default AppReducer;

