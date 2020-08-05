function Pizza(flavor ,toppings,Crust,size, quantity, price) {
  this.flavor = flavor;
  this.toppings = toppings;
  this.crust=crust;
  this.size = size;
  this.quantity = quantity;
  this.price = price;
}

var small=550;
var medium=830;
var large=1030;
var topping =100;
var crust=50;


$(document).ready(function() {
$("#order").click(
  function(){

    // Getting values from the form
    flavor=$('#flavor').val();
    toppings=$('#toppings').val();
    size=$('#size').val();
    quantity=parseInt($('#quantity').val());

    // Getting the total amount
    if (size == "small" && toppings == ""&& crust==""){
      var price = small * quantity;
    }
    else if (size == "small" && toppings == "tomato" || toppings == " pineapple"&& crust=="cripsy"||crust=="stuffed"||crust=="gluten-free"){
      var price = small * quantity + topping+crust;
    }if(size == "medium" && toppings =="" && crust==""){
      var price = medium * quantity;
    }else if(size == "medium" && toppings == "tomato" || toppings == " pineapple"&& crust=="cripsy"||crust=="stuffed"||crust=="gluten-free"){
      var price = medium * quantity + topping+crust;
    }if (size == "large" && toppings == ""&& crust==""){
      var price = large * quantity;
    }else if (size == "large" && toppings ==" tomato" || toppings == " pineapple"&& crust=="cripsy"||crust=="stuffed"||crust=="gluten-free") {
      var price= large * quantity + topping+crust;
    }

    var newPizza = new Pizza(flavor,toppings,crust,size,quantity,price);
    var newRow = '<tr><td id="flav">' + newPizza.flavor  + '</td><td id="toppings">'+$("#toppings Option:selected").text()+'</td><td id="crust">'+$("#crust option:selected").text()+'</td><td id="size">'+$("#size option:selected").text()+'</td><td is="quantinty">'+$("#quantity option:selected").text()+'</td><td id="total">'+newPizza.price+'</tr>'
$("#pizza").append(newRow);
}
);
$("#deliver").click(function(){
  alert("Delivary Fee is ksh 200 within Nairobi and ksh 400 outside Nairobi")
  prompt("Enter location for delivery");
  
});



});