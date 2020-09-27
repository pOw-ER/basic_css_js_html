var aracBilgileri = [
    {
        id : 'bmw116d_1234',
        model : 'bmw 116d',
        yil : 2015,
        renk : 'beyaz',
        servisKayitlari : [
            {
            id : 'bmw116d_123_1',
            tarih : '20/1/2016',
            km : 13000,
            ücret : 900,
            ücretDetay : [
                {id : 'bmw116d_123_1_1', aciklama : 'yag degisimi', ücret : 300},
                {id : 'bmw116d_123_1_2', aciklama : 'filtre degisimi', ücret : 300},
                {id : 'bmw116d_123_1_3', aciklama : 'fren hidroloji', ücret : 300}
                         ]
            },
            {
                id : 'bmw116d_123_2',
                tarih : '10/1/2017',
                km : 28000,
                ücret : 1800,
                ücretDetay : [
                    {id : 'bmw116d_123_2_1', aciklama : 'yag degisimi', ücret : 350},
                    {id : 'bmw116d_123_2_2', aciklama : 'filtre degisimi', ücret : 350},
                    {id : 'bmw116d_123_2_3', aciklama : 'fren hidroloji', ücret : 300},
                    {id : 'bmw116d_123_2_4', aciklama : 'balata degisimi', ücret : 800}
                             ]
            },
    ]
    },
    {
        id : 'bmw118i_123',
        model : 'bmw 118i',
        yil : 2015,
        renk : 'siyah',
        servisKayitlari : [
            {
            id : 'bmw118i_123_1',
            tarih : '20/1/2016',
            km : 13000,
            ücret : 900,
            ücretDetay : [
                {id : 'bmw118i_123_1_1', aciklama : 'yag degisimi', ücret : 300},
                {id : 'bmw118i_123_1_2', aciklama : 'filtre degisimi', ücret : 300},
                {id : 'bmw118i_123_1_3', aciklama : 'fren hidroloji', ücret : 300}
                         ]
            },
            {
                id : 'bmw118i_123_2',
                tarih : '10/1/2017',
                km : 28000,
                ücret : 1800,
                ücretDetay : [
                    {id : 'bmw118i_123_2_1', aciklama : 'yag degisimi', ücret : 350},
                    {id : 'bmw118i_123_2_2', aciklama : 'filtre degisimi', ücret : 350},
                    {id : 'bmw118i_123_2_3', aciklama : 'fren hidroloji', ücret : 300},
                    {id : 'bmw118i_123_2_4', aciklama : 'balata degisimi', ücret : 800}
                             ]
            },
    ]
    },
    {
        id : 'bmw320d_123',
        model : 'bmw 320d',
        yil : 2015,
        renk : 'kirmizi',
        servisKayitlari : [
            {
            id : 'bmw320d_123_1',
            tarih : '20/1/2016',
            km : 13000,
            ücret : 900,
            ücretDetay : [
                {id : 'bmw320d_123_1_1', aciklama : 'yag degisimi', ücret : 300},
                {id : 'bmw320d_123_1_2', aciklama : 'filtre degisimi', ücret : 300},
                {id : 'bmw320d_123_1_3', aciklama : 'fren hidroloji', ücret : 300}
                         ]
            },
            {
                id : 'bmw320d_123_2',
                tarih : '10/1/2017',
                km : 28000,
                ücret : 1800,
                ücretDetay : [
                    {id : 'bmw320d_123_2_1', aciklama : 'yag degisimi', ücret : 350},
                    {id : 'bmw320d_123_2_2', aciklama : 'filtre degisimi', ücret : 350},
                    {id : 'bmw320d_123_2_3', aciklama : 'fren hidroloji', ücret : 300},
                    {id : 'bmw320d_123_2_4', aciklama : 'balata degisimi', ücret : 800}
                             ]
            },
    ]
    }
]

// bilgileri bu sekilde cekecegiz ilerde de bize bir data geldiginde böyle object olarak gelicek
console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].servisKayitlari[0]);
console.log(aracBilgileri[0].servisKayitlari[0].km);