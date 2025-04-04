// FUNCTION FOR CHICKEN SANDWICHES
function large(){
	var sandwichPrice = 125.80; // Price of a Chicken Sandwich 
	var roundedPrice = Math.round(sandwichPrice); // Rounds sandwichPrice (125.80)

	window.alert('The price of a chicken sandwich is ' + roundedPrice + 'php.');
	// Will return the value of 126 (125.80 rounded off is 126)
}

// FUNCTION FOR NUMBER OF STANDARD SANDWICHES
function standard(){
	var miniSandwiches = 81; // Number of mini Chicken Sandwiches
	var standardSandwiches = Math.sqrt(miniSandwiches); // Gets the square root of miniSandwiches (81)

	window.alert('The number of standard sandwiches is ' + standardSandwiches + '.');
	// Will return the value of 9 (√81 = 9)
}

// FUNCTION FOR DIFFERENCE
function difference(){
	var priceDifference = -15.50; // Price difference due to a discount 
	var absoluteDifference = Math.abs(priceDifference);	// Gets the absolute (positive) value of priceDifference (-15.50)

	window.alert('The difference between the prices is ' + absoluteDifference + 'php.');
	// Will return the value of 15.50
}

// FUNCTION FOR TOTAL COST
function total(){
	var basePrice = 150; // Base price of a "double-decker" Chicken Sandwich 
	var totalCost = basePrice ** 2; // Calculate the price squared (for a large order)

	window.alert('The total cost of a large order of double-decker chicken sandwiches is ' + totalCost + 'php.');
	// Will return the value of 22500 (150^2 = 22500)
}

// FUNCTION FOR SALES
function sales(){
	var dailySales = [2500, 3200, 2800, 3500]; // Daily sales amounts 
	var maxSales = Math.max(...dailySales);	// Gets the highest value in the arguments

	window.alert('We earn ' + maxSales + ' in daily sales.');
	// Will return the value of 3500 (highest value)
}

// FUNCTION FOR 15% OFF DISCOUNT
function discounted(){
	var sandwichPrice = 135.75;
	var discountedPrice = sandwichPrice - (sandwichPrice * 0.15); // 15% discount (135.75 - (135.75 * 0.15) = 115.3875)
	var roundedPrice = Math.round(discountedPrice);	// Rounds off discountedPrice (115.3875)

	window.alert('A 15% off sandwich is ' + roundedPrice + 'php.');
	// Will return the value of 115
}

// FUNCTION FOR FAMILY PACK
function family(){
	var miniSandwiches = 121;
	var standardSandwiches = Math.sqrt(miniSandwiches);	// Gets the square root of miniSandwiches (√121 = 11)
	var familyPack = Math.pow(standardSandwiches, 2); // To find the square of standard sandwiches

	window.alert('The price of a family pack of mini sandwiches is ' + familyPack + 'php.');
	// Will return the value of 121 (11^2 = 121)
}

// FUNCTION FOR FINAL ADJUSTMENTS
function adjustment(){
	var priceDifference = -22.50;
	var absoluteDifference = Math.abs(priceDifference); // Makes priceDifference (-22.50) positive (22.50)
	var finalAdjustment = absoluteDifference * 2; // Double the price difference (22.50 * 2)

	window.alert('The final adjustment is ' + finalAdjustment + '.');
	// Will return the value 45
}

// FUNCTION FOR ROUNDED TOTAL
function rt(){
	var basePrice = 160;
	var taxRate = 0.12; // 12% tax
	var totalPrice = basePrice + (basePrice * taxRate); // 160 + (160 * 0.12) = 179.2
	var roundedTotal = Math.round(totalPrice * 100) / 100; // Round to 2 decimal places (179.2)

	window.alert('The rounded total is ' + roundedTotal + 'php.');
	// Will return the value 179.2
}

// FUNCTION FOR AVERAGE SALES
function avgsales(){
	var dailySales = [2750, 3100, 2950, 3300, 3050];
	var minSales = Math.min(...dailySales); // Gets the lowest value in the arguments (2750)
	var maxSales = Math.max(...dailySales); // Gets the highest value in the arguments (3300)
	var averageSales = (minSales + maxSales) / 2; // (2750 + 3300) / 2 = 3025

	window.alert('Average sales: ' + averageSales + '.');
	// Will return the value 3025
}

window.alert("🥪 LOADING 🥪");