const cart=["shoes","pants","kurta"];
function createOrder(cart){
    const pr= new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("Cart is Not Valid");
            reject(err);
        }
        const orderId="12345";
        console.log("working");
        if(orderId){resolve(orderId);}

    });
    console.log("..working");
    return pr;
}
function validateCart(cart){
    return true;
}
function proceedPayment(orderId){
    const pr1=new Promise(function(resolve,reject){
        resolve("Payment Successful");
    });
    return pr1;
}
function showOrderSummary(orderId){
    const pr2=new Promise(function(resolve,reject){
        resolve("Shoes and Kurta");
    });
    console.log("show order summarry");
    return pr2;
}
function updateWallet(orderId){
    const pr3=new Promise(function(resolve,reject){
        resolve("Wallet Updated");
    });
    return pr3;
}


createOrder(cart)
.then(function(orderId){
    return proceedPayment(orderId);
})
.catch(function(){
    console.log(err.message);
})
.then(function(orderId){
    return showOrderSummary(orderId);
})
.then(function(orderId){
    return updateWallet(orderId);
});