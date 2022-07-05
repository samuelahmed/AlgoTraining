/*/
1672. Richest Customer Wealth
https://leetcode.com/problems/richest-customer-wealth/


You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.



NOTES: 

    //initalize an answer 
    //loop through the accounts 
    //initatize a temp variable
    //loop within accounts and add up wealth
    //return the account with most wealth
/*/



const maximumWealth = (accounts) => {
    let res = 0;

    for(let i=0; i<accounts.length; i++){
        let temp = 0;
        for(let j = 0; j< accounts[i].length; j++){
            temp += accounts[i][j];
        }
        res = Math.max(res, temp);
    }
    return res;
}