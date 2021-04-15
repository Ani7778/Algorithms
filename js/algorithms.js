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
