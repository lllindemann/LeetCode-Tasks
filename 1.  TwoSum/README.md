# Two Sum

## Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Solution

- use hash map to store nums and their indices
- iterate over the given array
- check for each entry wheather the hash map stores the complement value (difference value)
- if the hash map stores the complement return the current value & its complement
- if hash map does not store the complement add the current num with its index to the hash map
