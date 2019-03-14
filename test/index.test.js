const assert = require('assert');
const request = require('supertest');
const app = require('../index')

describe('Index', function() {

    it('should return OK', async function() {
        const response = await request(app).get('/trees/1')
        assert.equal(response.status, 200)
    })

    it('should return Not Found', async function() {
        request(app).get('/trees/3').expect(404)
    })

})