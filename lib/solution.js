'use strict';
//code goes here
const nd = module.exports = {};

nd.center = function(inputNode){
  let nodeObj = inputNode; 
  let count = 0;
  while (nodeObj) {
    count++;
    nodeObj = nodeObj.next;
  } 
  if (!count)return null;
  count = Math.ceil(count / 2);
  let nodeObj2 = inputNode; 
  while (count) {
  if(!(count - 1)) nodeObj2 = nodeObj2.next; 
  count--;
}
console.log(nodeObj2.next)
return nodeObj2.next;
}





















// nd.center = function(inputNode) {
//   let nodeCount = 0;
//   while(inputNode.next) nodeCount++;
//   if (nodeCount/2 !==0)
//   {
//     nodeCount = Math.ceil(nodeCount);
//   }
//   else {
//     nodeCount = nodeCount/2;
//   }
//   let currentNode = inputNode;
//   for(let i; i < nodeCount; i++) currentNode = currentNode.next;
//   return currentNode;
// }


//need while loop and counter
//another loop to increment the counter and stop at jhalf (/2)

// let count = 0;
// while (nodeObj) {
//   count++;
//   nodeObj = nodeObj.next;

// } 