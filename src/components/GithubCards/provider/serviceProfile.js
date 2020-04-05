import axios from 'axios';

export const serviceProfiler = async url => {
    try {
        return await axios.get(url);
        
    } catch (e) {
        throw e;
    }
};
