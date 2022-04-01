let server = require("../index");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion
chai.should();
chai.use(chaiHttp);

/**
     * Test the GET newspapers
     */
describe('Test Climate Change APIs', () => {

    describe("Test GET route /newspapers", () => {
        it("It should return all newspapers", (done) => {
            chai.request(server)
                .get("/newspapers")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.not.be.eq(0);
                done();
                });
        });

        it("It should NOT return all the newspapers", (done) => {
            chai.request(server)
                .get("/newspapers")
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });

    });


/**
     * Test the GET (by id) route
     */
describe("GET /newspapers/:id", () => {
    it("It should GET a newspaper by ID", (done) => {
        const newspaperId = 0;
        chai.request(server)
            .get("/newspapers/" + newspaperId)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('name');//maybe source?
                res.body.should.have.property('website');
                res.body.should.have.property('id').eq(0);
                done();
                });
        });

        it("It should NOT GET a newspaper by ID", (done) => {
            const newspaperId = 123;
            chai.request(server)
                .get("/newspapers/" + newspaperId)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eq("The newspaper with the provided ID does not exist.");
                done();
                });
        });

    });

    /**
     * Test the POST route
     */
     describe("POST /newspapers", () => {
        it("It should POST a new newspaper", (done) => {
            const newspaper = {
                name: "newspaper31",
                website: "https://www.newspaper31.com/",
                address: "https://www.newspaper31.com/environment/climate-change",
                base: ""
            };
            chai.request(server)
                .post("/newspapers")
                .send(newspapers)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    //res.body.should.have.property('id').eq(100);
                    res.body.should.have.property('name').eq("newspaper31");
                    res.body.should.have.property('website').eq("https://www.newspaper31.com/");
                    res.body.should.have.property('address').eq("https://www.newspaper31.com/environment/climate-change");
                    res.body.should.have.property('base').eq("");
                done();
                });
        });

        it("It should NOT POST a new newspapers without the name property", (done) => {
            const newspapers = {
                name: "ne",
            };
            chai.request(server)
                .post("/newspapers")
                .send(newspapers)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });

    });

    /**
     * Test the PUT route
     */
    describe("PUT /newspapers/:id", () => {
        it("It should PUT an existing newspapers", (done) => {
            const newspaperId = 31;
            const newspaper = {
                name: "newspaper31",
                website: "https://www.newspaper31-v2.com/",
                address: "https://www.newspaper31-v2.com/environment/climate-change",
                base: ""
            };
            chai.request(server)
                .put("/newspapers/" + newspaperId)
                .send(newspaper)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id').eq(31);
                    res.body.should.have.property('name').eq("newspaper31");
                    res.body.should.have.property('website').eq("https://www.newspaper31.com/");
                    res.body.should.have.property('address').eq("https://www.newspaper31.com/environment/climate-change");
                    res.body.should.have.property('base').eq("");
                done();
                });
        });

        it("It should NOT PUT an existing newspaper with a name with less than 3 characters", (done) => {
            const newspaperId = 31;
            const newspaper = {
                name: "ne",
                website: "https://www.newspaper31-v2.com/",
                address: "https://www.newspaper31-v2.com/environment/climate-change",
                base: ""
            };
            chai.request(server)
                .put("/newspapers/" + newspaperId)
                .send(newspaper)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });
    });


    /**
     * Test the DELETE route
     */
    describe("DELETE /newspapers/:id", () => {
        it("It should DELETE an existing newspaper", (done) => {
            const newspaperId = 31;
            chai.request(server)
                .delete("/newspapers/" + newspaperId)
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("It should NOT DELETE a newspaper that is not in the database", (done) => {
            const newspaperId = 145;
            chai.request(server)
                .delete("/newspapers/" + taskId)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eq("The newspaper with the provided ID does not exist.");
                done();
                });
        });

    });




});
module.exports = server;