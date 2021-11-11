var Animal = require('../models/animal');
const animals = require('../models/animal');
 
//List of all Costumes 
exports.animal_list = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.send(theAnimals); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
exports.animal_view_all_Page = async function(req, res) { 
    try{ 
        theAnimals = await Animal.find(); 
        res.render('animal', { title: 'Animal Search Results', results: theAnimals }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.animal_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Animal(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.type = req.body.type; 
    document.age = req.body.age; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.animal_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await animals.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }
}; 

exports.animal_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await animals.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.type) toUpdate.type = req.body.type; 
        if(req.body.age) toUpdate.age = req.body.age; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 
// Handle Costume delete form on DELETE. 
exports.animal_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Animal delete DELETE ' + req.params.id); 
};