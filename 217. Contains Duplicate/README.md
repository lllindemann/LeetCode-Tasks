# Contains Duplicate
## Problem 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Solution 
- use Hash Set to store nums
- iterate over the given array
- check for each entry wheather the Hash Set already stores the num
- if the Hash Set already stores the num return true
- if Hash Set does not store the num add the current num with to the Hash Set
- if no duplicates found through the iteration return false