import axios from "axios";

const LOCAL_GO_API = 'http://localhost:8080';
let LOCAL_SESSION_TOKEN = "";


// http://localhost:8080/third_party/member/accounts?token=4N4mJTxEpKVB0vSKpYlSf1Xt-KopJ0kg41csZvd4ek8

const axiosRequestBuilder = (API_URL, URL, METHOD, BODY) => {
    switch (METHOD) {
        case 'GET':
            return axios.get(`${API_URL}/${URL}`);
        case 'POST':
            return axios.post(`${API_URL}/${URL}`, loginStruct);
        default:
            return;
    }
};


const genericRequest = {
    get: url =>
        axiosRequestBuilder(LOCAL_GO_API, url, 'GET'),
    post: postUrl =>
        axiosRequestBuilder(LOCAL_GO_API, postUrl, 'POST')
};

const loginStruct = {
    cuId: "hackathon",
    memberNumber: "1",
    password: "hackathon"
};

const thirdPartyMemberAPI = {
    login: (boolean) =>
        genericRequest.post(`third_party/login/${boolean}`),
    getMemberAccounts: (action, token) =>
        genericRequest.get(`third_party/member/${action}?token=${token}`)
};

export default {
    thirdPartyMemberAPI,
    LOCAL_SESSION_TOKEN
}