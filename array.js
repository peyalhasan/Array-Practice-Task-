
/** 
 *   Lavel 1 Problems    
 */

//Task 1 -> ১️⃣ একটা ৫টা রঙের নামের অ্যারে বানাও এবং এর length প্রিন্ট করো।

const colors = ['Red', 'Green', 'Blue', 'Purple', 'Black'];
console.log(colors.length);

// Task 2 -> ২️⃣ ["Apple", "Banana", "Mango"] কে এক লাইনে string এ পরিণত করো।

const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.toString()) // toString
console.log(fruits.join(','))  // join

// Task 3 -> ৩️⃣ ["A", "B", "C", "D"] অ্যারে থেকে ৩য় আইটেমটি প্রিন্ট করো।

const letters = ['A', 'B', 'C', 'D']
console.log(letters.at(2))  // at(index)
console.log(letters[2])     // [index]

// Task 4 -> ৪️⃣ ["Learning", "JavaScript", "is", "fun"] কে একসাথে করে একটা বাক্য বানাও।

const sentence = ["Learning", "JavaScript", "is", "fun"]
console.log(sentence.join(' '))

// Task 5 -> ৫️⃣ ["pen", "pencil", "eraser", "sharpener"] থেকে শেষের আইটেমটা সরাও।

const items = ["pen", "pencil", "eraser", "sharpener"];
const item = items.pop()
console.log(items)

// Task 6 -> ৬️⃣ উপরের অ্যারেটাতে "marker" যোগ করো শেষে।

items.push('marker')
console.log(items)

// Task 7 -> ৭️⃣ ["Dhaka", "Chittagong", "Khulna"] অ্যারে থেকে প্রথম আইটেম সরাও।

const city = ["Dhaka", "Chittagong", "Khulna"] ;
city.shift();
console.log(city)

//Task 8 -> ৮️⃣ ঐ একই অ্যারেতে শুরুতে "Rajshahi" যোগ করো।

city.unshift('Rajshahi')
console.log(city)


/**
 *  Lavel 2 Problems
 */

//Task 9 -> ৯️⃣ ["A", "B", "C"] এবং ["D", "E"] একসাথে জোড়া লাগাও।

const a= ['A', 'B', 'C'];
const b= ['D', 'E'];
console.log(a.concat(b))

//Task 10 -> 🔟 [10, 20, 30, 40, 50, 60] থেকে নতুন একটা অ্যারে বানাও যেখানে শুধু [20, 30, 40] থাকবে।

const numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers.slice(1,4));

// Task 11 -> ১️⃣ নিচের কোডে দ্বিতীয় আইটেম ডিলিট করো, কিন্তু splice() ব্যবহার কোরো না।

delete numbers[1];
console.log(numbers)

/**
 * Lavel 3 Problems 
 */

//Task 12 -> ২️⃣ নিচের কোডে প্রথম দুইটা আইটেম কপি করে শেষের দিকে বসাও।

const number = [1, 2, 3, 4, 5, 6, 7]
const copy = number.copyWithin(4, 0, 3) // copy start form 0 and end at 3 and it will replace index 5,6,7
console.log(copy)

// Task 13 -> ৩️⃣ [1, [2, 3], [4, [5]]] এই nested অ্যারেটাকে এক লেভেলে নিয়ে আসো।

const num = [1, [2, 3], [4, [2,[5]]]];
const c = num.flat(3) // Here Flatten the array up to 3 levels deep. 
console.log(c)

// Task 14 -> ৪️⃣ নিচের অ্যারে থেকে মাঝের ২টা আইটেম replace করো 99 এবং 100 দিয়ে।

const replace = [10, 20, 30, 40, 50];
const rep = replace.splice(2,2,99,100)
console.log(replace)
