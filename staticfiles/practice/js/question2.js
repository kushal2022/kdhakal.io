function filter(...bannedWords) {

}

function bubbleSort() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};

Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function() {
    return `${this.name}, ${this.age} years old.`;
};

Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}

let teacher = new Teacher();
teacher.initialize("Undral", 25);
console.log(teacher.teach("WAP"));

String.prototype.filter = filter;
Array.prototype.bubbleSort = bubbleSort;