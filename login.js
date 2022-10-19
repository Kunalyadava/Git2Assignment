
//problem1:Given an array find the unique items in the array

let names=["suraj", "ramu", "sonu", "ramu", "suraj", "mohan"];

let unique_list={};

for (let i=0;i<=names.length-1;i++){
  unique_list[names[i]]=1;
}

console.log(unique_list);
