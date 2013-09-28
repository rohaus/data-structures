var makeTree = function(tree){
  var newTree = {};
  newTree.value = tree;
  newTree.parent = undefined;
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
  this.children[this.children.length - 1].parent = this.value;
};

treeMethods.contains = function(target){
  var result = result || false;
  if (this.value === target){
    result = true;
  }else if (this.children){
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)){
        result = true;
      }
    }
  }
  return result;
};


// tree = makeTree("mother"); // {value: mother, children: undefined, contains: function(){} }
// tree.addChild("ken"); // {value: ken, children: [{value: tree, children: "ken", contains: function(){}}], contains: function(){} }
// tree.addChild("rohaus"); // {value: rohaus, children: [{value: tree, children: "ken", contains: function(){}}, {value: tree, children: "rohaus", contains: function(){}}], contains: function(){} }

   //  O
   // o o
