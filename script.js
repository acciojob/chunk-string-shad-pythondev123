function stringChop(str, size) {
  let n= str.length;
	let arr= []
	let i=0;
	while(i<n){
		arr.push(str.slice(i, i+size));
		i+=size;
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
