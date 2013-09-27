var makeSet = function(){
  var set = Object.create(makeSet.prototype);
  set._storage = {};
  return set;
};

makeSet.prototype.add = function(value){
  this._storage[value] = true;
};

makeSet.prototype.contains = function(value){
  var result = false;
  for (var key in this._storage){
    if (key === value){
      result = true;
    }
  }
  return result;
};

makeSet.prototype.remove = function(value){
  delete this._storage[value];
};
