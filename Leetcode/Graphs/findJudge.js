/*
997. Find the Town Judge
https://leetcode.com/problems/find-the-town-judge/


In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

STEPS: 




*/




const findJudge = (n, trust) => {
    
    let trusted = new Array(n+1).fill(0);
    
    for(let [i,j] of trust) {
        trusted[i] -= 1;
        trusted[j] += 1;
    }
    for(let i = 1; i < trusted.length; i++) {
        if ((n-1) === trusted[i]) {
            return i;
        }
    }
    
    return -1;
};