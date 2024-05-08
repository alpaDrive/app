import configs from '../assets/configs';
import * as SecureStore from 'expo-secure-store';

export const login = (id, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            // const response = await fetch(`http://${configs.SERVER_URL}/login`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         "username": id,
            //         "email": id,
            //         "password": password
            //     })
            // })

            // const body = await response.json();
            // if (response.status === 200) {
                await SecureStore.setItemAsync("alpaDrive-user", JSON.stringify({
                    "uid": {
                      "$oid": "66148a719001a5e449203023"
                    },
                    "name": "\"Muhammad ijas \"",
                    "username": "\"Ijas\"",
                    "email": "\"ijuijas001@gmail.com\"",
                    "vehicles": [
                      {
                        "_id": {
                          "$oid": "6628c5b69001a5e449203047"
                        },
                        "company": "\"ms\"",
                        "model": "\"dzire\""
                      }
                    ]
                  }))
                await SecureStore.setItemAsync("alpaDrive-vehicles", JSON.stringify([
                    {
                      "_id": {
                        "$oid": "6628c5b69001a5e449203047"
                      },
                      "company": "\"ms\"",
                      "model": "\"dzire\""
                    }
                  ]))
                let screen = 'Home'
                // if (body.vehicles.length === 0) screen = 'Empty'
                resolve(screen)
            // } else {
            //     reject(body.error)
            // }
        } catch(error) {
            reject(error)
        }
    })    
}
