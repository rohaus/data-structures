describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
    // console.log("the hashTable is: ", hashTable);
    // console.log("Is the hashTable an array? "+Array.isArray(hashTable));
    // console.log("the hashTable._storage is:", hashTable._storage);
    // console.log("Is the hashTable._storage an array? "+Array.isArray(hashTable._storage));
    // console.log("");
  });
  describe("general", function(){
    it("should have methods named 'insert' and 'retrieve", function() {
      expect(hashTable.insert).toEqual(jasmine.any(Function));
      expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    });

    it("should handle hash function collisions", function(){
      // force the hash function to return 0
      spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
      var v1 = 'val1', v2 = 'val2';
      hashTable.insert(v1, v1);
      hashTable.insert(v2, v2);
      expect(hashTable.retrieve(v1)).toEqual(v1);
      expect(hashTable.retrieve(v2)).toEqual(v2);
    });
  });
  // add more tests!
  describe("insert", function(){
    it("should insert string key value pairs into the table", function(){
      hashTable.insert("ken", "hungry");
      expect(hashTable.retrieve("ken")).toEqual("hungry");
    });

    it("should handle collisions", function(){
      hashTable._limit = 1;
      hashTable.insert("ken", "hungry");
      hashTable.insert("rohaus", "tired");
      expect(hashTable.retrieve("ken")).toEqual("hungry");
    });

  });

  describe("remove", function(){
    it("should remove a key value pair from the hash table", function(){
      hashTable.insert("ken", "hungry");
      hashTable.remove("ken");
      expect(hashTable.retrieve("ken")).toEqual(undefined);
    });
  });

  describe("retrieve", function(){
    it("should retrieve a value when the key is given", function(){
      hashTable.insert("ken", "hungry");
      expect(hashTable.retrieve("ken")).toEqual("hungry");
    });
  });
});
