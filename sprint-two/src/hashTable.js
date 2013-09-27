var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  // console.log(i);
  var element = this._storage.get(i);
  if (!element){
    var newElement = [[key, value]];
    this._storage.set(i, newElement);
  }else{
    // console.log("Is element an array?? " + Array.isArray(element));
    // console.log("element is ", element);
    element.push([key,value]);
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  console.log("Trying to retrieve...key: " + key);
  console.log("this._storage.get(i) is: ", this._storage.get(i));
  return this._storage.get(i)[0][1];
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage.each(function(){
    if ("If the array location contains the key, then delete it"){
      this._storage.set(i, undefined);
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

// {
//  set:(index, value) storage[index] = value;
//  get:(index) return storage[index];
//  each:(callback)
//        for(var i = 0; i < storage.length; i++){
//          callback(storage[i], i, storage);
//        }
// }
// {set: fn, get: fn, each: fn, 0: [[key, value]]}