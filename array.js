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

