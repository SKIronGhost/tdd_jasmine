// Ya sea en el mismo archivo o en uno diferente, crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array. Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas. 

function sumMaxMin(arr){
let a = arr[0]
let b = arr[0]
for(i=0;i<arr.length;i++){
  if(arr[i]>a){
    a = arr[i]
  }
  if(arr[i]<arr[0]){
    b = arr[i]
  }
}
return a + b
}

describe ("sumMaxMin",function(){
  it("debería devolver 10 + 1 = 11", function(){
    expect(sumMaxMin([1,3,10])).toEqual(11)
  })
  it("debería devolver -2 + -10 = -12", function(){
    expect(sumMaxMin([-2,-5,-10])).toEqual(-12)
  })
})