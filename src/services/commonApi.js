import axios  from "axios";

export const commonApi = async (httpmethod, url, reqbody) => {
    const reqConfig = {
        method: httpmethod,
        url,
        data: reqbody,
        Headers: {
            "Content-Type": "application/json"
        }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((error) => {
        return error
    })

}