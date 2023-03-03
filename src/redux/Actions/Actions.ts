

export const GetImage = (payload: any) => {
    console.log(payload)
    return {
        type: "GET_IMAGE_REQUEST",
        payload
    }
}
