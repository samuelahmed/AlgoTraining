/*
121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



STEPS:
Initialize profits at zero
Initialize min at prices[0]
Loop through prices starting from index 1 
If min > prices[i] set min=prices[i]
Else if prices[i] - min > profit set profit = prices[i] - min
Return profit

*/





const maxProfit = (prices) => {
    
    let profit = 0
    let min = prices[0]
    
    for(let i = 1; i < prices.length; i++) { 
        if(min > prices[i]) {
            min = prices[i]
        } else if(prices[i] - min > profit) {
            profit = prices[i] - min
        }
    }
    
    return profit
};