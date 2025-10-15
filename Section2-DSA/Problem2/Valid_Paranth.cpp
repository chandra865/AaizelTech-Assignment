/*
Valid Parentheses 
   Check if a string containing ()[]{} is valid.
*/

#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;
            }
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    string s = "{[()]}";
    if (isValid(s)) {
        cout << "The string is valid." << endl;
    } else {
        cout << "The string is not valid." << endl;
    }
    return 0;
}
