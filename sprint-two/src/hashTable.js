var HashTable = function(){
  this._limit = 8;
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
  var result;
  var len = this._storage.get(bucketNo).length;
  for (var pairNo = 0; pairNo < len; pairNo++){
    if (this._storage.get(bucketNo)[pairNo][0] === key){
      result = this._storage.get(bucketNo)[pairNo][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(key){
  var bucketNo = getIndexBelowMaxForKey(key, this._limit);
  var len = this._storage.get(bucketNo).length;
  for (var pairNo = 0; pairNo < len; pairNo++){
    if (this._storage.get(bucketNo)[pairNo][0] === key){
      this._storage.get(bucketNo).splice(pairNo,1);
    }
  }
};

