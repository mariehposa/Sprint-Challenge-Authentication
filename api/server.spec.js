const request = require('supertest');
const server = require('./server')

describe('server', () => {
    describe('api/auth/* endpoints', () => {
        describe('[POST] / api/auth', () => {
            test('should return 201 OK when registered', async () => {
                const user = {
                    username: "test",
                    password: "test"
                }
                const response = await request(server).post('/api/auth/register').send(user)
                expect(response.status).toBe(201)
            })

            
        })
    })
})