# Python  Alogrithms
### Python Primiers:
* `alies` is the concept of same identifier refering the values. 
    * ` temperature = 50`
    * `original = temperature`
    * here original and temperature are refering the same values
    * ` temperature -> [50] <- original`
    * unles we reassign the temperature or original it breaks the `alies`
        and take the memory sepeartly.
* `Instantiation`
    * instantiation is ti create a new instance of the class
    * when you declare any class `ex: name='xyz'` `xyz` call the string constructor and return the new instance
    * but onther way to instantiation is take the object and change return a new object `Ex: sorted()` function will pass it to the constructor of the class and return a new object
* `Calling Methods`
    * Methods Or Member functions can assosictes with the class, can call with object
    * `accessors` are functions will return only informations about the state of the object
    * `mutators` are will change the state of the object

* `Muutables and Immutables`
    * Immutables are can't change the value once it is instantiation
    * the below tables are will say what are the objects are  mutable and immutable.
```
|Class       |Description                            | Immutables ?  |
|:-::-::-::-:|:-::-::-::-::-::-::-::-::-::-::-::-::-:|:-::-::-::-::-:|
----------------------------------------------------------------------
|bool        |Boolean value                          |    [x]        |
----------------------------------------------------------------------
|int         |integer (arbitrary magnitude)          |    [x]        |
----------------------------------------------------------------------
|float       |floating-point number                  |    [x]        |
----------------------------------------------------------------------
|list        |mutable sequence of objects            |    []         |
----------------------------------------------------------------------
|tuple       |immutable sequence of objects          |    [x]        |
----------------------------------------------------------------------
|str         |character string                       |    [x]        |
----------------------------------------------------------------------
|set         |unordered set of distinct objects      |    []         |
----------------------------------------------------------------------
|frozenset   |immutable form of set class            |    [x]        |
----------------------------------------------------------------------
|dict        |associative mapping (aka dictionary)   |    []         |
----------------------------------------------------------------------
```









