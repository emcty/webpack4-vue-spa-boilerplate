<template>
    <div class="accRentIncome">
        <div class="rentBox">
            <div class="rentDiv">
                <p class="rentMoney ttfd-num">{{amount}}</p>
                <p class="rentText"><img src="./images/arrow.png">累计租金收入 (元)</p>
                <ul>
                    <li>
                        <p class="weekMoney ttfd-num"></p>
                        <p class="rentText">近一周租金收入 (元)</p>
                    </li>
                    <li>
                        <p class="weekMoney ttfd-num"></p>
                        <p class="rentText">近一月租金收入 (元)</p>
                    </li>
                    <div class="line"></div>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import {Row,Col} from 'element-ui';
	export default {
	    name:"accRentIncome",
	    data() {
	        return {
                pageData:null,  //页面数据
                listData:[],      //列表数据
	            amount:'',     //累计租金收入
                noMore:false,  //没有更多
                loading:false,     //loading
                matchMoneyBox:true, //盒子
                moneyEnd:null,      //是否还有数据
                selectTime:'',      //分页时间
	        }
	    },
	}
</script>
<style scoped>
@import url('./postcss.css');
/* @import url('./accRentIncome.scss'); */
</style>


