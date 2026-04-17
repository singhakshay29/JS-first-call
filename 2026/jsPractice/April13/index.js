//1️⃣ Remove Duplicates from Sorted Array
//✅ Solution
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
//🧠 Key Takeaway
//Sorted array → use two pointers (slow-fast)
//2️⃣ Best Time to Buy and Sell Stock
//✅ Solution
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};
//🧠 Key Takeaway
//Track minimum → maximize difference
//3️⃣ Length of Last Word
//✅ Solution
var lengthOfLastWord = function(s) {
    let length = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === ' ') i--;

    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
//🧠 Key Takeaway
//Reverse scan → avoid extra space
//4️⃣ Find Words Containing Character
//✅ Solution
var findWordsContaining = function (words, x) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }

    return result;
};
//🧠 Key Takeaway
//String search → use includes()
//5️⃣ Jewels and Stones
//✅ Solution
var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels);
    let count = 0;

    for (let char of stones) {
        if (set.has(char)) count++;
    }

    return count;
};
//🧠 Key Takeaway
//Membership check → use Set
//6️⃣ Split a String in Balanced Strings
//✅ Solution
var balancedStringSplit = function (s) {
    let count = 0;
    let balance = 0;

    for (let char of s) {
        balance += (char === 'R') ? 1 : -1;

        if (balance === 0) count++;
    }

    return count;
};
//🧠 Key Takeaway
//Balance counter → +1 / -1
//7️⃣ Find Most Frequent Vowel and Consonant
//✅ Solution
var maxFreqSum = function (s) {
    let map = new Map();
    let vowels = new Set(['a','e','i','o','u']);
    let maxVowel = 0, maxCon = 0;

    for (let char of s) {
        let count = (map.get(char) || 0) + 1;
        map.set(char, count);

        if (vowels.has(char)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxCon = Math.max(maxCon, count);
        }
    }

    return maxVowel + maxCon;
};