/*Group Anagrams
   Given an array of strings, group anagrams together.
*/

#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> mp; // To store sorted string and its anagrams
    for (const string& s : strs) {
        string sortedStr = s;
        sort(sortedStr.begin(), sortedStr.end());
        mp[sortedStr].push_back(s);
    }
    vector<vector<string>> result;
    for (auto& pair : mp) {
        result.push_back(move(pair.second));
    }
    return result;
}

int main() {
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    vector<vector<string>> res = groupAnagrams(strs);
    for (auto& grp : res) {
        for (auto& s : grp) {
            cout << s << " ";
        }
        cout << endl;
    }
    return 0;
}