

export const CHANGE_BUTTON_REQUEST= 'CHANGE_BUTTON_REQUEST'
export const CHANGE_MENU_REQUEST= 'CHANGE_MENU_REQUEST'

  


export const ChangeVarRedux = (button,menu) => async dispatch => {
      
    
   dispatch( ChangeButtonRequest(button))
   dispatch( ChangeMenuRequest(menu))
     
  
  
  };



  export const ChangeButtonRequest = (button) => {
    return {
      type: CHANGE_BUTTON_REQUEST ,
      set_button_class:button,
  
    }
  }
  export const ChangeMenuRequest = (menu) => {
    return {
      type: CHANGE_MENU_REQUEST ,
      set_menu_class:menu,
  
    }
  }
  const initialState = {
     
    button_class: "button-opened",
    menu_class:"fixed-navbar-closed-first",
  
  
  
  }
  
  
  
  
  
  
  
  
  
  const ChangeVarReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case CHANGE_BUTTON_REQUEST: return {
        ...state,
        button_class:action.set_button_class,
    
     
      }
      case CHANGE_MENU_REQUEST: return {
        ...state,
       menu_class:action.set_menu_class,
      
  
      }
      default:{
        return {
        
          ...state
        
        }
      
      }
    }
  }
  
  export default ChangeVarReducer 
  