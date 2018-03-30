import React, {Component} from 'react';

export default class Day_3 extends Component {
    componentDidMount() {
        console.log('-->day3', lengthOfLongestSubstring('abcabcbb'))
    }
    render() {
        return <div>Day3________</div>
    }
}

var lengthOfLongestSubstring = function(s) {
    let arr = s.split('');
    let maxLength = 0;
    let noSame = true;
    if(s.length == 1) {
        return 1
    }
  
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            //相邻两个是否相等
            if(arr[j - 1] == arr[j]) {
                let length = j - i;
                if(maxLength < length) {
                    maxLength = length;
                }
                noSame = false
                break;
            }else {
                if(arr[j] == arr[i]) {
                    let length = j - i;
                    if(maxLength < length) {
                        maxLength = length;
                    }
                    noSame = false
                    break;
                }
                if(j == arr.length - 1) {
                    let max = j - i + 1;
                    if(maxLength < max) {
                        maxLength = j - i + 1; 
                    }
                }
            }
        }
    }
    if(noSame) {
        maxLength = s.length;
    }
    return maxLength
};