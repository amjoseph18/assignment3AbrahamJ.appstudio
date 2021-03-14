const cityWhile = []
stop = 'Stop'
city = prompt('input a city of your choosing (to stop type: Stop)')
count = 0

while (city != 'Stop') {
  city = prompt('enter another city or type Stop to end')
  cityWhile.push(city)
  count++
  }
  
while (count >= 0) {
  console.log(cityWhile[count])
  
}
