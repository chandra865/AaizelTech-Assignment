/* Two Sum
   Write a function that returns indices of two numbers that add up to a target.
*/

#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp; // To store number and its index
    for (int i = 0; i < nums.size(); i++) {
        int c = target - nums[i];
        if (mp.find(c) != mp.end()) {
            return {mp[c], i};
        }
        mp[nums[i]] = i;
    }
    return {}; 
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    if (!result.empty()) {
        cout << "Indices: " << result[0] << ", " << result[1] << endl;
    } else {
        cout << "No two sum solution found." << endl;
    }
    return 0;
}