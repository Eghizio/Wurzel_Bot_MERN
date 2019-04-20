const jsonFormat = (req, res, next) => {
    if( req.app.get("mode") === "dev" )
        req.app.set("json spaces", 2);
    else
        req.app.set("json spaces", 0);
    
    next();
};

module.exports = jsonFormat;