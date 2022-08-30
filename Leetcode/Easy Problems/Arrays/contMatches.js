/*/
https://leetcode.com/problems/count-items-matching-a-rule/
1773. Count Items Matching a Rule

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

1. create rule index
2. reduce ans & items so that rule index [rule key] is equal to ruleValue
3. if equal increase ans by 1
4. if not equal answer is 0 


/*/


const countMatches = (items, ruleKey, ruleValue) => {
    let ruleIndex = {
        'type': 0,
        'color': 1,
        'name': 2
    };
    
    return items.reduce((ans,item) => 
    item[ruleIndex[ruleKey]] === ruleValue ? ans + 1 : ans, 0);
};


