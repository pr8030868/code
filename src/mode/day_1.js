import React, {Component} from 'react';
import './day_1.css';
export default class Day_1 extends Component {
    //given an array of integers,return indices of the two numbers such that they add up to a specific target.
    doLog(nums, target) {
        let length = nums.length;
        let result = [];
        let target_ = false;
        let start_ = new Date();
        for(let i = 0; i < length; i++) {
            if(target_) break;
            for(let j = i+1; j < length; j++) {
                if(nums[i] + nums[j] == target) {
                    result = [i,j];
                    target_ = true;
                    break;
                }
            }
        }
        let end_ = new Date();
        console.log(end_ - start_);
        return result
    }
    add_string(add1, add2) {
        let add1_arr = add1.split('').reverse();
        let add2_arr = add2.split('').reverse();
        let all = 0
        let limit = 0;
        if(add1_arr.length >= add2_arr.length) {
            all = add1_arr.length;
            limit = add2_arr.length
        }else {
            all = add2_arr.length;
            limit = add1_arr.length
        }
        let result_arr = [];
        for(let i = 0; i < all; i++) {
            let anouce_ = 0;
            if(result_arr[i] == undefined) {
                result_arr[i] = 0;
            }else {
                anouce_ = result_arr[i]
            }

            if(result_arr[i+1] ==undefined && i < limit) {
                result_arr[i+1] = 0;
            }
            if(add1_arr[i] == undefined) {
                add1_arr[i] = 0;
            }
            if(add2_arr[i] == undefined) {
                add2_arr[i] = 0;
            }
      
            let res = +add1_arr[i] + +add2_arr[i] + anouce_;
            if(res >= 10) {
                console.log('--->', result_arr[i])
                result_arr[i] = res - 10;//计算结果
                result_arr[i+1] = 1;
            }else {
                result_arr[i] = res;
            }
        }
        return result_arr.reverse().join('');
    }
    componentDidMount() {
        console.log(this.add_string('54','573'))
    }
    render() {
        const testArr = [2, 7, 11, 15];
        const target = 9;
        console.log(this.doLog(testArr, target))
        //定宽度剧中布局
        const style_1 = {
            width : '180px',
            margin : 'auto',
            height : '80px',
            background : '#fff'
        }
        
        return (
            <div>
                <div className="layout_1">
                    <div>居中布局_固定宽度</div>
                    <div>
                        <div className="layout_box">
                            <div style={style_1}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="word">
                    <div>Words or sentences</div>
                </div>
            </div>
        )
    }
}