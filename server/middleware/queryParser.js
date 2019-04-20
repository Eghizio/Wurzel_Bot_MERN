const escapeDiacritics = require("./diacritics");

const queryParser = (req, res, next) => {
    
    if(req.params.name)
        req.params.name = escapeDiacritics(req.params.name.toLowerCase());

    if(req.query.name){
        if( Array.isArray(req.query.name) )
            req.query.name = req.query.name.map( n => escapeDiacritics( n.toLowerCase() ) );
        else
            req.query.name = escapeDiacritics( req.query.name.toLowerCase() );
    }

    next();
};

module.exports = queryParser;