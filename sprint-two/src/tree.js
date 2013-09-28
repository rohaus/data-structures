var makeTree = function(tree){
  var newTree = {};
  newTree.value = tree;
  newTree.parent = undefined;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
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

treeMethods.removeFromParent = function(name){
  // need to set parent's children to be undefined.
  if (this.children.length === 1){
    this.children[0].parent = undefined;
    this.children = undefined;
  } else {
    for (var childNo = 0; childNo < this.children.length; childNo++){
      if(this.children[childNo].value === name){
        this.children[childNo].parent = undefined;
        this.children.splice(childNo, 1);
      }
    }
  }
};


// tree = makeTree("mother"); // {value: mother, children: undefined, contains: function(){} }
// tree.addChild("ken"); // {value: ken, children: [{value: tree, children: "ken", contains: function(){}}], contains: function(){} }
// tree.addChild("rohaus"); // {value: rohaus, children: [{value: tree, children: "ken", contains: function(){}}, {value: tree, children: "rohaus", contains: function(){}}], contains: function(){} }

   //  O
   // o o
