/* Exercise 2 Learn You Node */
var sum = 0;
for(var i = 2, len = process.argv.length; i < len; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);

/* Exercise 2 Learn You Node (Official Solution)*/
var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)
