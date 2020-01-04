/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s == "") return 0
    let wordsArray = [],
        wordLetters = [];
    for (let i = 0; i < s.length; i++) {
        if (!wordLetters.includes(s[i])) {
            wordLetters.push(s[i]);
            if (i == s.length - 1) {
                wordsArray.push(wordLetters.join(''));
            }
            continue
        } else {
            wordsArray.push(wordLetters.join(''));
            wordLetters = [];
            i = findLastCharacterIndex(s, i);
        }
    }
    return Math.max(...wordsArray.map(item => item.length))
};

function findLastCharacterIndex(str, limit) {
    for (let i = limit - 1; i >= 0; i--) {
        if (str[i] === str[limit]) {
            return i
        }
    }
}