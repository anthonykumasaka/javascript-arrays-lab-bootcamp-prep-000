// // Add your functions and code here
//   describe('destructivelyAppendKitten(name)', function() {
//     it('appends a kitten to the end of the kittens array', function() {
//       destructivelyAppendKitten('Ralph')
//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
//     })
//   })
  
  function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens; 
  }
  
  function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens;
  }
  
  function destructivelyRemoveLastKitten(){
    kittens.pop();
    return kittens; 
  }
  
  function destructivelyRemoveFirstKitten() {
    kittens.shift();
    return kittens; 
  }
  
  function appendKitten(name) {
    return [...kittens, name]; 
  }
  
  function prependKitten(name){
    return [name, ...kittens];
  }
  
  function removeLastKitten(){
    kittens.splice((kittens.length), 1)
    return kittens; 
  }