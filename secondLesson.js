// let cart = [
//     { id: 1, productName: "product 1", quantity: 3, unitPrice: 3000 },
//     { id: 2, productName: "product 2", quantity: 2, unitPrice: 1000 },
//     { id: 3, productName: "product 3", quantity: 1, unitPrice: 500 },
//   ];
//   // Sepetteki tüm ürünleri gez, adet*unitPrice ile toplam fiyatı bul
//   // Kullanıcıya göster {totalPrice:300,totalProductCount:6}

//   let total = { totalPrice: 0, totalProductCountt: 0 };
//   cart.forEach((cart) => {
//     total.totalPrice += cart.unitPrice * cart.quantity;
//     total.totalProductCountt += cart.quantity;
//   });
//   console.log(total);

//   ---------------

let product = [
  { unitPrice: 100, productName: "Ürün 1", discount: true, rate: 15 },
  { unitPrice: 150, productName: "Ürün 2", discount: false, rate: 0 },
  { unitPrice: 200, productName: "Ürün 3", discount: true, rate: 2.5 },
];
// - İsme göre filtreleme fonksiyonu
// - İsme göre ilk bulunan productu getirme fonksiyonu
// - unitPrice < Parametre getirme fonksiyonu (array)
// - unitPrice > Parametre getirme fonksiyonu (array)
// - indirimdeki ürünleri getirme
// - ürün ekleme
// - verilen isim ile ürün silme SİLMEYİNİN METODU YOK MUYDU?
// - tüm ürünleri

//8
// // let tumUrunler = function (a) {
// //   for (let i = 0; i < a.length; i++) {
// //     console.log(
// //       `productPrice ${a[i].unitPrice},productName ${a[i].productName},discount ${a[i].discount},rate ${a[i].rate}`
// //     );
// //   } // ben onu bilmiyorum for - of'
// // };
// tumUrunler(product);

let a = function () {
  for (let k of product) {
    // in ile index
    console.log(k);
  }
};
a();

//7 ÇALIŞTI ABİ :)
// const silme = function (test) {
//   let silinmis = product.filter((product) => {
//     return product.productName !== test;
//   });
//   return silinmis;
// };

// product = silme("Ürün 2");
// console.log(product);

//6.
// const pushFunc = function (test) {
//   product.push(test);
// };
// pushFunc({ unitPrice: 250, productName: "Ürün 4", discount: true, rate: 3.5 });

// console.log(product);

//5.
// const ismeGoreFilter = () => {
//   let filtreleme = product.filter((item) => {
//     return item.discount === true;
//   });
//   console.log(filtreleme);
// };

// ismeGoreFilter();

//4.
// const degerleme = function (test) {
//   let filtreleme = product.filter((item) => {
//     return item.unitPrice > test;
//   });
//   console.log(filtreleme);
// };
// degerleme(175);

//3.
// const degerleme = function (test) {
//   let filtreleme = product.filter((item) => {
//     return item.unitPrice < test;
//   });
//   console.log(filtreleme);
// };
// degerleme(1000);

//2.
// const secondAssign = function (filter) {
//   const found = product.find((element) => element.productName.includes(filter));

//   console.log(found);
// };
// secondAssign("product");

// 1.
// const ismeGoreFilter = function (filterİsim) {
//   // fonksiyonum 1
//   let filtreleme = product.filter((item) => {
//     return item.productName.includes(filterİsim);
//   });
//   console.log(filtreleme);
// };

// ismeGoreFilter("product");
