//assuming that it is a two digit number
n=parseInt(process.argv[2])
first_digit=Math.floor(n/10)
last_digit=n%10
console.log("firstdigit:"+first_digit)
console.log("lastdigit:"+last_digit)