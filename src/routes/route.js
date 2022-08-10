const express = require('express');
 
const underscore = require('underscore')

const router = express.Router();

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let n = arr.length + 1
    let sumOfNumbers = [n*(arr[0]+arr[arr.length-1])]/2
    let sumOfArray = 0;
    for(let i = 0; i < arr.length; i++){
        sumOfArray = sumOfArray + arr[i]
    }

    let missingNumber = sumOfNumbers - sumOfArray
    ///LOGIC WILL GO HERE 
	   res.send(  { data: missingNumber  }  );
 });

 router.get("/sol2", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [33, 34, 35, 37, 38]
    let sumOfArray = 0;
    let length= arr.length
    for(let i = 0; i < arr.length; i++){
        sumOfArray = sumOfArray + arr[i]
    }

    let firstNumber=arr[0]
    let secondNumber=arr.pop()
     let consicativeNumber =(length+1)*(firstNumber+secondNumber)/2
     let missingNumber =  consicativeNumber-sumOfArray
     
    ///LOGIC WILL GO HERE 
	   res.send(  { data: missingNumber  }  );
 });


module.exports = router;
// adding this comment for no reason



