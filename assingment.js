

//  kilometerToMeter 


function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var resultMeter = kilometerToMeter();


// budgetCalculator Problem Solving


function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var getTotalPrice = watchPrice + phonePrice + laptopPrice;
    return getTotalPrice;
}

var totalValue = budgetCalculator(1, 4, 3);





//  hotelCost


function hotelCost(daliyCount) {
    var totalPrice = 0;
    if (daliyCount <= 10) {
        totalPrice = daliyCount * 100;
    } else if (daliyCount <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = daliyCount - 10;
        var secondStayPrice = secondStay * 80;
        var totalPrice = firstStayPrice + secondStayPrice;
    } else {
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = daliyCount - 20;
        var thirdStayPrice = thirdStay * 50;
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}

var getHotelCost = hotelCost(21);




// megaFriend 


function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

// Friends Name
var getMegaFriend = megaFriend([
    'Monir Hossain',
    'Aisah Bint Monir',
    'Monira Akter',
]);