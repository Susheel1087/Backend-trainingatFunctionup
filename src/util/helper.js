const printDate = function( ) {
    const A =new Date().getDate();
    return(A);
}

const printMonth = function ( ) {
    const B = new Date().getMonth()+1;
    return(B);

}

const getBatchInfo =function () {
    return("plutonium, W3D3, the topic for today is Nodejs module system");
}

module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;