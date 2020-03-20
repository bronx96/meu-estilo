function somar(){
  var n1 = document.getElementById('n1')
  var n2 = document.getElementById('n2')
  var rs = document.getElementById('rs')
  var a = Number(n1.value)
  var b = Number(n2.value)
  var res = (a + b)/2
  rs.innerHTML = 'sua média é ' + res
}
