import axios from "axios";

const LOCAL_GO_API = 'http://localhost:8080';


// http://localhost:8080/third_party/member/accounts?token=4N4mJTxEpKVB0vSKpYlSf1Xt-KopJ0kg41csZvd4ek8

const axiosRequestBuilder = (API_URL, URL, METHOD) => {
    switch (METHOD) {
        case 'GET':
            return axios.get(`${API_URL}/${URL}`);
        default:
            return;
    }
};


const genericRequest = {
    get: url =>
        axiosRequestBuilder(LOCAL_GO_API, url, 'GET')
};


const thirdPartyMemberAPI = {
    getMemberAccounts: (action, token) =>
        genericRequest.get(`third_party/member/${action}?token=${token}`)
};

export default {
    thirdPartyMemberAPI
}