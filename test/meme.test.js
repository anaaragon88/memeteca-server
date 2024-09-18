import request from 'supertest';
import app from '../app.js';

describe('test crud meme', ()=> {
    describe('get memes', () => {
        test('should return a return with status 200 and type json', async () => {
            const response = await request(app).get('/api/memes').send()
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json')
        })
    })
})