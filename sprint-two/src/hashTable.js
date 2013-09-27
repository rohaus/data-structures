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
  var element = this._storage.get(i);
  if (element === undefined){
    var newElement = [[key, value]];
    this._storage.set(i, newElement);
  }else{
    element.push([key,value]);
  }
};

HashTable.prototype.retrieve = function(key){
  var bucketNo = getIndexBelowMaxForKey(key, this._limit);
  // console.log("Trying to retrieve...key: " + key);
  // console.log("this._storage.get(i) is: ", this._storage.get(bucket));
  var result;
  this._storage.each(function(bucket, pairNo){
    // console.log("this is the pairNo : " + pairNo);
    // console.log("bucket[pairNo] is", bucket[pairNo][0]);
    debugger
    if (bucket[pairNo] !== undefined && bucket[pairNo][0] === key){
      debugger 
      result = bucket[pairNo][1];
    }
  });
  return result;
  // write a test for checking collisions
};

HashTable.prototype.remove = function(key){
  var bucket = getIndexBelowMaxForKey(key, this._limit);
  // var loop = function(i){
  //   this._storage.each(function(value, index, collection){
  //     if( index === i ){
  //       console.log(value);
  //     }
  //   });
  // };
  // console.log("this._storage.get(i) is: ", this._storage.get(i));

  // for (var storageLength = 0; storageLength < this._storage.get(i).length; storageLength++) {
  //   // console.log("storageLength is: " + storageLength);
  //   for (var p = 0; p < this._storage.get(i)[storageLength]; p++){
  //       console.log("very deep inside : ", this._storage.get(i)[storageLength][p]);
  //   }
  // }
  var len = this._storage.get(bucket).length;
  for (var pairNo = 0; pairNo < len; pairNo++){
    if (this._storage.get(bucket)[pairNo][0] === key){
      this._storage.set(bucket, undefined);
    }
  }
  // loop(i);
  // this._storage.each(function(value, index, collection){
  //   console.log("value is: " + value);
  //   console.log("index is: " + index);
  //   console.log("collection is: ", collection);
  //   console.log("");
  //   for (var i = 0; i < this._storage.get(index).length; i++) {
  //     if (this._storage.get(index) !== undefined && this._storage.get(index)[i][0] === key){
  //       this._storage.set(index, undefined);
  //     }
  //   }
  // });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

// this._storage = {set, get, each}
// {
//  set:(index, value) storage[index] = value;
//  get:(index) return storage[index];
//  each:(callback)
//        for(var i = 0; i < storage.length; i++){
//          callback(storage[i], i, storage);
//        }
// }                               V -storage    V -pairNo
// {set: fn, get: fn, each: fn, 0: [[key, value],[key, value]]}