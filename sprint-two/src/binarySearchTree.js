var makeBinarySearchTree = function(value){
  var tree = {};
  tree.left = null; //an object (binary tree)
  tree.right = null; //an object (binary tree)
  tree.value = value; 
  tree.insert = treeMethods.insert;
  tree.contains = treeMethods.contains;
  tree.depthFirstLog = treeMethods.depthFirstLog;
  return tree;
};

var treeMethods = {};

treeMethods.insert = function(value){
  if(value < this.value){
    if(this.left === null){
      this.left = makeBinarySearchTree(value);
    }else {
      this.left.insert(value);
    }
  }else if(value > this.value){
    if(this.right === null){
      this.right = makeBinarySearchTree(value);
    }else {
      this.right.insert(value);
    }
  }
};

treeMethods.contains = function(value){
  var result = result || false;
  if(this.value === value){
    result = true;
  }else {
    if(this.left !== null){
      if(this.left.contains(value)){
        result = true;
      }
    }
    if(this.right !== null){
      if(this.right.contains(value)){
        result = true;
      }
    }
  }
  return result;
};

treeMethods.depthFirstLog = function(callback){
  callback.call(this);

  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }
  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }

  // var result = result || [];
  // result.push(this.value);
  // return result;



};







