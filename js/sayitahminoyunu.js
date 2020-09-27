var hak,can;
var tahmin;
var sayac = 0;
var sayi = Math.floor(Math.random()*10+1)
can = Number (prompt('Kac tahmin hakkiniz olmasini istiyorsunuz?'));
hak=can;

while (hak>0){
    hak--;
    sayac++;
    tahmin = Number (prompt('Bir sayi giriniz.'));

    if(tahmin == sayi){
        console.log(`Tebrikler ${sayac} defada bildiniz`);
        console.log(`Puaniniz : ${100 - (100/can)*(sayac-1)}`);
        break
    }
    else if(tahmin > sayi){
        console.log('Asagi');
    }
    else {
        console.log('yukari');
    }
    if (hak==0){
        console.log('Hakkiniz bitti.');
    }
}