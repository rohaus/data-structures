var makeTree = function(tree){
  var newTree = {};
  newTree.value = tree;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(child){
  if (this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(child));
};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target){
    result = true;
  }else if (this.children){
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target){
        result = true;
      }else{
        this.children[i].contains(target);
      }
    }
  }
  return result;
};


// tree = makeTree(); // {value: tree, children: undefined, contains: function(){} }
// tree.addChild("ken"); // {value: tree, children: [{value: tree, children: "ken", contains: function(){}}], contains: function(){} }
// tree.addChild("rohaus"); // {value: tree, children: [{value: tree, children: "ken", contains: function(){}}, {value: tree, children: "rohaus", contains: function(){}}], contains: function(){} }

   //  O
   // o o
