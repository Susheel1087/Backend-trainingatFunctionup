const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/movie', function (req, res){
    let movie = ["ABCD","3'Idiot","dhoom","kriss","pyar labjo me kha" ]
    res.send(movie)

})

router.get('/movies/:indexNumber', function(req, res){
    let moviesname = ["ABCD","3'Idiot","dhoom","kriss","pyar labjo me kha" ]
     
    let index = req.params.indexNumber;
    res.send(moviesname[index])

});



    // PROBLEM 3

router.get('/get-moviess/:indexNumber',function(req, res){  
    
    let moviesName=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;

     if(index > moviesName.length){
        return res.send("use a valid index  ")
     }else{
    
     res.send(moviesName[index])
     }
});
     
//PROBLEM 4

router.get('/get-films/:indexNumber',function(req, res){   

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
   let index = req.params.indexNumber
    res.send(moviesName[index])
});


    // console.log("This is the request "+ JSON.stringify(requestParams))
    // let movieName = requestParams.name
    // console.log('Name of the student is ', movieName)
    
    // res.send('movie')


module.exports = router;



// JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them


    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */