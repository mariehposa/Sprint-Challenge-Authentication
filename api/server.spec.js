const request = require('supertest');
const server = require('./server')
const db = require('../database/dbConfig')

beforeEach(() => {
    return db('users').truncate()
})

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

            // test('should return')            
        })

        describe('[POST] / api/auth', () => {
            test('should return 200 OK when logged in', async () => {
                const user = {
                    username: "test",
                    password: "test"
                }
                await request(server).post('/api/auth/register').send(user)
                const reply = await request(server).post('/api/auth/login').send(user)
                expect(reply.status).toBe(200)
            })
        })
    })
})