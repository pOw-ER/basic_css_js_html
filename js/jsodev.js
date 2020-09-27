// var buyDate = new Date ('04/20/2017');
// var timeYear = (Date.now()-buyDate.getTime())/1000/60/60/24/30/12;

// if (timeYear<1){
//     console.log('Aracinizin ilk bakim süresi henüz dolmadi');
// }else if (timeYear>=1 && timeYear<2){
//     console.log('Aracanizin ilk bir yillik bakim süresi doldu. Lütfen bakiminizi yaptiriniz.');
// }else if(timeYear>=2 && timeYear<3){
//     console.log('Aracinizin 2. Bakim süresi doldu. Lütfen bir an önce bakiminizi yaptiriniz.');
// }else {
//     console.log('Aracinizin 3.Bakim süresi doldu. Lütfen bakimizi yaptiriniz');
// }
// console.log((Date.now()-buyDate.getTime())/1000/60/60/24/30/12);



var result = prompt('Who is there?').toLowerCase();


if (result == 'cancel'){
    console.log('Canceled');
}

else if (result == 'admin') {
    var password = prompt('Password?');
    if (password == 'cancel'){
        console.log('Cancelled');
    }
    else if (password == '1234') {
        console.log('Welcome ');
    }
    else {
        console.log('Wrong password');
    }

}
else{
    console.log('I dont know you');
}