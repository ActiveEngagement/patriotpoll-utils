import Axios from 'axios';

export const BASE_URL = 'https://api.patriotpoll.net/v1';

export default function(Vue, options = {}) {
    const apiKey = options.apiKey || process.env.VUE_APP_PATRIOT_POLL_API_KEY;

    const baseURL = options.baseUrl
        || options.baseURL
        || process.env.VUE_APP_PATRIOT_POLL_BASE_URL
        || BASE_URL;
    
    const axios = Axios.create({
        baseURL,
        headers: {
            Authorization: apiKey && `Bearer ${apiKey}`
        }
    });

    if(window.localStorage.__poll__) {
        const store = JSON.parse(window.localStorage.__poll__);
        
        delete store.answer;
        
        for(item of Object.entries(store)) {
            const key = item[0], value = item[1];
            
            axios.defaults.headers[`Contact-${key.charAt(0).toUpperCase() + key.slice(1)}`] = value;
        }
    }

    Vue.prototype.$patriotpoll = axios;
}