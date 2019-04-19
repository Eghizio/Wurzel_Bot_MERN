//Set the req parameter and query values to lower case
const lowerCase = (req, res, next) => {
    // console.log("=====LowerCase Middleware=====");
    // console.log("p:", req.params);
    // console.log("q:", req.query);

    if(req.params.name)
        req.params.name = req.params.name.toLowerCase();

    if(req.query.name)
        req.query.name = req.query.name.toLowerCase();
    
    // console.log("p:", req.params);
    // console.log("q:", req.query);
    // console.log("=====LowerCase Middleware=====");

    next();
}; //crashes at multiple name values ex: plants/q?name=CEBULE&name=marchew

module.exports = lowerCase;