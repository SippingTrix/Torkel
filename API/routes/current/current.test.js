import axios from 'axios'
import { isMainThread } from 'worker_threads'
import {ip, port} from '../../axiosConfig'

describe('GET /current/', () => {
    it('GET /current/runners', async () => {
        const response = await axios.get(`http://${ip}:${port}/current/runners`)
        expect(response.statusCode).toBe(200);
        let {name, restraunts, dropOffLocation, dropOffTime} = response.data

        expect(name).not.toEqual(null);
        expect(restraunts).not.toEqual(null);
        expect(dropOffLocation).not.toEqual(null);
        expect(dropOffTime).not.toEqual(null);
    })
})



// GET requests
// /current/runners ->

// /current/restraunts