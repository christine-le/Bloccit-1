const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {
    
    describe("GET /", () => {

        it("should return status code 200", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("should contain the text 'Welcome to Bloccit'", (done) => {
            request.get(base, (err, res, body) => {
                expect(body).toContain("Welcome to Bloccit");
                done();
            })
        })
    });

});