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
  this.children = [];
  this.children.push(makeTree(child));
};

treeMethods.contains = function(){

};


// tree = makeTree(); // {value: tree, children: undefined, contains: function(){} }
// tree.addChild("ken"); // {value: tree, children: [{value: tree, children: "ken", contains: function(){}}], contains: function(){} }
// tree.addChild("rohaus"); //

   //  O
   // o o
