// 4u7h0r3d by @ozombo
// ver 1
// simple javascript library for common functions that you cant do without in a web app

//find square eg: var square = square($yourinteger);
function square(integer) 
{ 
	return integer * integer;
}

//find length of an array
function lengthofArray(array)
{
	return array.length;
}

//arrange array alphabetically
function arrangeAlphabetical(arrayitem)
{
	arrayitem.sort();
	return arrayitem;
}

//arrange array numerically
function arrangeNumerical(arrayitem)
{
	function compare(num1, num2)
	{
		return num1 - num2;
	}
	arrayitem.sort(compare);
	return arrayitem;
}

//check if variable is even or not
function isEven(num) 
{
	var even = (num % 2 == 0);
	if (even) {
    return true;
    }
	else {
	return false;
	}	

}

//find the average of an array
function average() 
{
	var total = 0;
	for (var i = 0; i < this.length; ++i) 
	{
		total += this[i]; 
	}
	return total / this.length; 
}

//permutation
function permute(input) {
    var permArr = [],
        usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })();
}

