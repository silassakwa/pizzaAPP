function Pizza(flavor ,toppings,crust,size, quantity, price) {
  this.flavor = flavor;
  this.toppings = toppings;
  this.crust=crust;
  this.size = size;
  this.quantity = quantity;
  this.price = price;
}

var small=550;
var medium=830;
var large=1050;
var topping=75;



$(document).ready(function() {
$("#order").click(
  function(){

    // Getting values from the form
    flavor=$('#flavor').val();
    toppings=$('#toppings').val();
    size=$('#size').val();
    quantity=parseInt($('#quantity').val());

    // Getting the total amount
    if (size == "small" && toppings == "none"){
      var price = small * quantity;
    }
    else if (size == "small" && toppings == "t" || toppings == "p"){
      var price = small * quantity + topping;
    }
    else if (size == "medium" && toppings == "none"){
      var price = medium * quantity;
    }
    else if (size == "medium" && toppings == "t" || toppings == "p"){
      var price = medium * quantity + topping;
    }
    if (size == "large" && toppings == "none"){
      var price = large * quantity;
    }
    else if (size == "large" && toppings == "t" || toppings == "p"){
      var price = large * quantity + topping;

    }
    
    
    

    
  
    var newPizza = new Pizza(flavor,toppings,crust,size,quantity,price);
    var newRow = '<tr><td id="flav">' + newPizza.flavor  + '</td><td id="toppings">'+$("#toppings Option:selected").text()+'</td><td id="crust">'+$("#crust option:selected").text()+'</td><td id="size">'+$("#size option:selected").text()+'</td><td is="quantinty">'+$("#quantity option:selected").text()+'</td><td id="total">'+newPizza.price+'</tr>'
    $("#pizza").append(newRow);
      });
$("#deliver").click(function(){
  alert("Delivary Fee is ksh 200 within Nairobi and ksh 400 outside Nairobi")
  prompt("Enter location for delivery");
  
});



});