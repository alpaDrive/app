import configs from '../assets/configs'
import { getUid, getVid } from './auth'

export const get_recordings = () => {
    return new Promise(async (resolve, reject) => {

        const vid = await getVid();
        const uid = await getUid();

        fetch(`https://${configs.CDS_URL}/data/all`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vid,
                uid
            })
        }).then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export const delete_recording = (rec_id) => {
    return new Promise(async (resolve, reject) => {

        const vid = await getVid();
        
        fetch(`https://${configs.CDS_URL}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vid,
                rec_id
            })
        }).then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}