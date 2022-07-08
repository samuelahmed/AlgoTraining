/*
1108. Defanging an IP Address

https://leetcode.com/problems/defanging-an-ip-address/

A defanged IP address replaces every period "." with "[.]".



NOTES: 

STEPS:

*/

const defangIPaddr = (address) => {
    return address.split('.').join('[.]')
}