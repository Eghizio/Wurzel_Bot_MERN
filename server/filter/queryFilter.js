const escapeDiacritics = require("../middleware/diacritics");

const queryFilter = (plants, {query}) => {
    let filtered = [];

    for(let q in query){
        if( !Array.isArray( query[q] ) )
            query[q] = [query[q]];
        
        query[q].map(query_val => 
            filtered.push(...plants.filter(plant => 
                (q=="name" ? escapeDiacritics(plant[q].toLowerCase()) : plant[q]) == query_val)));
    }

    filtered = filtered.filter((plant, i) => filtered.indexOf(plant) === i);

    return filtered;
};

module.exports = queryFilter;

// if( req.query.name ){
//     if( Array.isArray(req.query.name) )
//         req.query.name = req.query.name.map( n => escapeDiacritics( n.toLowerCase() ) );
//     else
//         req.query.name = escapeDiacritics( req.query.name.toLowerCase() );
// }

// console.log("p:", req.params);
// console.log("q:", req.query);

// next();


// querriedPlant = plants_data.filter(plant =>
//     plant.id == query.id || 
//     escapeDiacritics(plant.name.toLowerCase()) == query.name ||
//     plant.time == query.time ||
//     plant.crop == query.crop ||
//     plant.sx == query.sx ||
//     plant.sy == query.sy ||
//     plant.level == query.level
// )[0];