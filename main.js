let productsincart=[];
const parentElement=document.querySelector("buyitems");
const cartsumprice=document.querySelector("sum-price");
const product=document.querySelector(".product-under");
const updateShoppingCartHTML = function(){
    if(productsincart.length > 0){
    }
    else{
        document.querySelector('.checkout').classlist.add('hidden');
        
    }
}
Function updateProductsInCart(product){
for(let i=0; i< productsincart.length; i++){
if(productsincart[i].id == product.id){
productsincart[i].count +=1;
productsincart[i].price =productsincart[i].baseprice * productsincart[i].count;
return;
}
}
productsincart.push(product);
}
productsincart.forEach(product{
    product.addEventListener('click'(e){
        if(e.target.classlist.contains('addtocart')){
const productID = e.target.dataset.productid;
const productName = product.querySelector('.productname').innerHTML;
const productPrice= product.querySelector('.productprice').innerHTML;
const productImage= product.querySelector('img').src
let productToCart={
name: productName,
Image: productImage,
id: productid,
count: 1,
price: +productPrice,
baseprice: +productPrice,
}
        }
    }
updateProductsInCart(productstocart);
updateShoppingCartHTML();
}




































