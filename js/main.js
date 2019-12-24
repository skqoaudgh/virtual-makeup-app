function product_click(idx){
    var containers = new Array();
    containers[0] = document.getElementById("container1");
    containers[1] = document.getElementById("container2");
    containers[2] = document.getElementById("container3");
    containers[3] = document.getElementById("container4");

    var products = new Array();
    products[0] = document.getElementById("product1");
    products[1] = document.getElementById("product2");
    products[2] = document.getElementById("product3");
    products[3] = document.getElementById("product4");

    for(var i=0;i<4;i++) {
        containers[i].style.display = "none";
        products[i].style.backgroundImage = "url('./images/down.png')";
    }
    containers[idx].style.display = "flex";
    products[idx].style.backgroundImage="url()";
}