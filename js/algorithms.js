const array1 = [1, 3, 4, 10, 12, 13, 56, 9];
const array2 = [2, 3, 5, 7, 6, 122, 13, 56, 1];

const diffArrays = (arr1, arr2)=> {
	let arr3 = [];

    let uniqueElem = (first, second)=> {
    	for (let element of first) {
    		if (second.indexOf(element) === -1) {
    			arr3.push(element); 
    		}
    	}
    }

    uniqueElem(arr1, arr2);
    uniqueElem(arr2, arr1);

    return arr3;
}

const triangArr1 = ["a", "b", "c"];
const triangArr2 = ["c", "d", "e"];
const arrOfTriangArrays = [];

arrOfTriangArrays.push(triangArr1);
arrOfTriangArrays.push(triangArr2);

for (let i = 0; i < arrOfTriangArrays.length; i++) {
	let current = arrOfTriangArrays[i];

	console.log(current[0] + current[1] + current[2]);
}

const primeNumber = number=> {
	let isPrime = true;

	if (number === 1) {
		console.log("1 is neither prime nor composite number");
	}

	else if (number > 1) {
		for (let i = 2; i < i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			console.log(number + " " + "is a prime number");
		} else {
			alert(number + " " + "is not a prime number");
		}
	}
}

const sumUp = n=> {
	let result = 0;
	for (let i = 0; i <= n; i++) {
		result += i;
	}

	return result;
}

const arr = [1, 1, 2, 2, 3, 4, 4];

const removeDupes = arr => {
  	let result = [];
  	let previous = arr[0];
  	result[0] = previous;
  
  	for(let i = 0; i < arr.length; i++) {
    
    	if (arr[i] != previous) {
      		result.push(arr[i]);
    	}
    
    	previous = arr[i];
  	}
  
  	return result;
}

const multByAdd = (a, b)=> {
	let c = 0;
	if (a > 0 && b > 0) {
		for (let i = 0; i < b; i++) {
		c += a;
	}
	return c;
	} else {
		console.log("One of numbers is negative");
	}
}

const fact = n => {
	if (n === 0 || n === 1) {
		return 1;
	}

	return n * fact(n - 1);
}

// OR

const fact2 = n => {
	let result = 1;
	for(i = 1; i <= n; i++) {
		result *= i;
	}

	return result;
}



