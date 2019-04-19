const escapeDiacritics = (polishWord) => 
    polishWord.replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C').replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L').replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O').replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z').replace(/ź/g, 'z').replace(/Ź/g, 'Z');

const diacritics = (req, res, next) => {
    // console.log("=====Diacritics Middleware=====");
    // console.log("p:", req.params);
    // console.log("q:", req.query);

    if(req.params.name)
        req.params.name = escapeDiacritics(req.params.name);
        
    if(req.query.name)
        req.query.name = escapeDiacritics(req.query.name);

    // console.log("-p:", req.params);
    // console.log("-q:", req.query);
    // console.log("=====Diacritics Middleware=====");

    next();
};

// console.log(  escapeDiacritics("WąSiK".toLowerCase())    ); //wasik

module.exports = { escapeDiacritics, diacritics };