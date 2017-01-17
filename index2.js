'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];
//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
for(var i=0;i<cars.length;i++)
{
   console.log(cars[i].pricePerDay);
}

//EX1:
/*
@param (string) str
@return (date)
*/
function convertdate(str){
	var re=/[0-9]+/g;
    var result=re[Symbol.match](str);
	var dateloc=new Date(result[0],result[1]-1,result[2]);
	return dateloc;
}
/*number of rental days from begin and end date
@param (string) begindate
@param (string) returndate
@return (integer)
*/
function getDays(begindate,returndate)
{
	var begin=convertdate(begindate).getTime();
	var end=convertdate(returndate).getTime();
	var result=Math.Round((end-begin)/(24*60*60*1000));
	return result;
}
console.log(convertdate('2016-01-02'));
//prix de la location
function displaycar(){
	for(var i=0;i<cars.length;i++){
	    for(var j=0;j<rentals.length;j++){
		   console.log(rentals[j].carId);
		   rentalprice=getDays(rentals[j].pickupDate,rentals[j].returnDate)*cars[i].pricePerDay+rentals[j].distance*cars[i].pricePerKm;
		   console.log(rentalprice);
	    }
	}
}

//EX2:
//prix de la location
function displaycar(){
	for(var i=0;i<cars.length;i++){
	    for(var j=0;j<rentals.length;j++){
		   console.log(rentals[j].carId);
		   rentalprice=getDays(rentals[j].pickupDate,rentals[j].returnDate)*cars[i].pricePerDay+rentals[j].distance*cars[i].pricePerKm;
		   if (getDays(rentals[j].pickupDate,rentals[j].returnDate)>9)
		   {
			   rentalprice=rentalprice/2;
		   }
		   if ((3<getDays(rentals[j].pickupDate,rentals[j].returnDate)) and (getDays(rentals[j].pickupDate,rentals[j].returnDate)<10))
		   {
			   rentalprice=rentalprice*7/10;
		   }
		   if (getDays(rentals[j].pickupDate,rentals[j].returnDate)<4)
		   {
			   rentalprice=rentalprice*9/10;
		   }
		   console.log(rentalprice);
	    }
	}
}
//EX3
//prix de la location et la répartition
function costactor()
{
	for(var i=0;i<actors.length;i++){
	    for(var j=0;j<rentals.length;j++){
		    console.log(actors[i].id);
		    rentalprice=getDays(rentals[j].pickupDate,rentals[j].returnDate)*cars[i].pricePerDay+rentals[j].distance*cars[i].pricePerKm;
		    if (getDays(rentals[j].pickupDate,rentals[j].returnDate)>9)
		    {
			   rentalprice=rentalprice/2;
		    }
		    if ((3<getDays(rentals[j].pickupDate,rentals[j].returnDate)) and (getDays(rentals[j].pickupDate,rentals[j].returnDate)<10))
		    {
			   rentalprice=rentalprice*7/10;
		    }
		    if (getDays(rentals[j].pickupDate,rentals[j].returnDate)<4)
		    {
			   rentalprice=rentalprice*9/10;
		    }
		    actors[i].price=rentalprice;
		    actors[i].commission[1]=(3/10)*actors[i].price/2;
		    actors[i].commission[2]=(3/10)*getDays(rentals[j].pickupDate,rentals[j].returnDate);
		    actors[i].commission[3]=(3/10)actors[i].price-actors[i].commission[2]-actors[i].commission[1];
		    console.log(actors[i].commission);
		}
	}
}
//EX4
//ajout de l'option deductible
function costactor()
{
	for(var i=0;i<actors.length;i++){
	    for(var j=0;j<rentals.length;j++){
		    console.log(actors[i].id);
			if(actors[i].options[1]=true)
			{
				cars[i].pricePerDay=cars[i].pricePerDay+4;
			}
		    rentalprice=getDays(rentals[j].pickupDate,rentals[j].returnDate)*cars[i].pricePerDay+rentals[j].distance*cars[i].pricePerKm;
		    if (getDays(rentals[j].pickupDate,rentals[j].returnDate)>9)
		    {
			   rentalprice=rentalprice/2;
		    }
		    if ((3<getDays(rentals[j].pickupDate,rentals[j].returnDate)) and (getDays(rentals[j].pickupDate,rentals[j].returnDate)<10))
		    {
			   rentalprice=rentalprice*7/10;
		    }
		    if (getDays(rentals[j].pickupDate,rentals[j].returnDate)<4)
		    {
			   rentalprice=rentalprice*9/10;
		    }
		    actors[i].price=rentalprice;
			console.log(actors[i].options)
		    console.log(actors[i].price);
		}
	}
}
//EX5
//les montants payés ou reçus par les différents intermédiaires
function costactor()
{
	for(var i=0;i<actors.length;i++){
	    for(var j=0;j<rentals.length;j++){
		    console.log(actors[i].rentalId);
			if(actors[i].options[1]=true)
			{
				cars[i].pricePerDay=cars[i].pricePerDay+4;
			}
		    rentalprice=getDays(rentals[j].pickupDate,rentals[j].returnDate)*cars[i].pricePerDay+rentals[j].distance*cars[i].pricePerKm;
		    if (getDays(rentals[j].pickupDate,rentals[j].returnDate)>9)
		    {
			   rentalprice=rentalprice/2;
		    }
		    if ((3<getDays(rentals[j].pickupDate,rentals[j].returnDate)) and (getDays(rentals[j].pickupDate,rentals[j].returnDate)<10))
		    {
			   rentalprice=rentalprice*7/10;
		    }
		    if (getDays(rentals[j].pickupDate,rentals[j].returnDate)<4)
		    {
			   rentalprice=rentalprice*9/10;
		    }
		    actors[i].payment[0].amount=rentalprice;
		    actors[i].payment[2].amount=(3/10)*actors[i].price/2;
		    actors[i].payment[3].amount=(3/10)*getDays(rentals[j].pickupDate,rentals[j].returnDate);
		    actors[i].payment[4].amount=(3/10)actors[i].price-actors[i].commission[2]-actors[i].commission[1];
			actors[i].payment[1].amount=actors[i].payment[0].amount-(actors[i].payment[2].amount+actors[i].payment[3].amount+actors[i].payment[4].amount);
		    console.log(actors[i].payment);
		}
	}
}