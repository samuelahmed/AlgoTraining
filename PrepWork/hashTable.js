//needs to spread out keys 
function hashStringToInt(s, tableSize) {
    //want prime numbers for stuff to spread out best
    let hash = 17;
    for(let i=0; i< s.length; i+= 1) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }

    return hash;
}

class HashTable {

    table = new Array(3);
    numItems = 0;

    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const index = hashStringToInt(key, newTable.length);
                    if (newTable[index]) {
                       newTable[index].push([key, value])
                    } else {
                    newTable[index] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable;
    };



    setItem = (key, value) => {
         this.numItems += 1;
         const loadFactor = this.numItems / this.table.length
         if (loadFactor > .8){
            //resize
            this.resize();
         }
    

    const index = hashStringToInt(key, this.table.length);
    if(this.table[index]) {
        this.table[index].push([key, value]);
    } else {
        this.table[index] = [[key, value]];
    };


    }; 

    getItem = (key) => {
        const index = hashStringToInt(key, this.table.length);
        if(!this.table[index]) {
            return null;
        }
        //worst case 0(n)
        return this.table[index].find(x => x[0] === key)
    };

}

const myTable = new HashTable()
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.setItem("age", 5);
myTable.setItem("dob", "1/2/3");




// console.log(myTable.getItem("firstName"));
// console.log(myTable.getItem("lastName"));
// console.log(myTable.getItem("age"));
// console.log(myTable.getItem("dob"));
console.log(myTable.table)
// console.log(myTable.table[0]);
console.log(myTable.table.length)
