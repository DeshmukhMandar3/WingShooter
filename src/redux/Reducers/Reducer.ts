

const intialState = {
    image: ""
}

const reducer = (state = intialState, action: any) => {


    switch (action.type) {


        case "GET_IMAGE_REQUEST":
            return {
                ...state,
                image: action.payload,
            }

        default:
            return state;
    }


}

export { reducer }