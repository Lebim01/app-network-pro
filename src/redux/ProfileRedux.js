export const types = {
    GET_PROFILE: 'Profile:get',
    SAVE_PROFILE: 'Profile:save'
}

export const actions = {
    getProfile: async () => {
        
    }
}

const initialState = {
    name : '',
    last_name : '',
    birthday : '',
    why: '',
    phone_code: '',
    phone: ''
} 

export const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type){
        case types.GET_PROFILE:{
            const { name, last_name, birthday, why, phone_code, phone } = payload
            return {
                ...state,
                name,
                last_name,
                birthday,
                why,
                phone_code,
                phone
            }
        }
    }
}