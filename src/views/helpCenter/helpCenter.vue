<template>
    <div class="help-wrap">
        <header class="header-fixed">
            <nav>
                <ul>
                    <li class="font-ws" >
                        <div  class="tab-line">aaaa</div>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="headDiv"><img src="./images/2.jpeg" alt=""></div>
        <section>
            <ul >
                <li>
                    <img src="./images/li-round.png" alt="问题列表">
                    <div class="des">
                        <h2 class="font-ws title">eeee</h2>
                        <div>dddd</div>
                        <div class="text">eetete</div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import {Row,Col} from 'element-ui';
    export default {
        name: "helpCenter",
        data() {
            return {
                startIndex: 0,
                listType : ['ttfd', 'zrzc', 'wd', 'syjs'],
                tabCont: [
                    {
                        name: "产品解释"
                    },
                    {
                        name: "转入转出"
                    },
                    {
                        name: "我的"
                    },
                    {
                        name: "收入计算"
                    }
                ],
                content: {},
                url: "/wap/open/helpCenter",
            }
        },
        async created() {
          await this.getData();
          console.log(4);
        },
        mounted() {
   
        },
        methods: {
          getData(){
            return new Promise((reslove,reject)=>{
              setTimeout(()=>{
                let a = [1,2,3,4].includes(4);
                console.log(a);
                reslove();
              },3000)
            });
          }
        }
    }
</script>
<style>
    html,body {
        width: 100%;
        background: #fff;
    }
    .font-ws {
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
    }
    .help-wrap {
        width: 80%;
        header {
            nav {
                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 108px;
                    box-shadow: 0px 6px 9px 0px rgba(233, 238, 246, 0.28);
                    li {
                        position: relative;
                        flex: 1;
                        height: 32px;
                        line-height: 32px;
                        font-size: 30px;
                        line-height: 30px;
                        color: #7e8698;
                        text-align: center;
                        border-right: 2px solid rgba(223, 229, 234, 0.3);
                        &:last-child {
                            border-right: none;
                        }
                        .tab-line {
                            background-color: #ed2c50;
                        }
                        .cur-line {
                            position: absolute;
                            bottom: -38px;
                            left: 50%;
                            width: 30px;
                            height: 4px;
                            transform: translateX(-50%);
                            border-radius: 2px;
                        }
                    }
                    .cur-li {
                        font-weight: 600;
                        color: #233251;
                    }
                }
            }
        }
        .header-fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 108px;
            background-color: #fff;
            z-index: 10;
        }
        .headDiv{
            width: 100%;
            height: 108px;
        }
        section {
            width: 100%;
            height: 200px;
            ul {
                display: none;
                padding: 0 40px;
                li {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding: 40px 0;
                    border-bottom: solid 2px #f0f2f7;
                    img {
                        position: relative;
                        top: 6px;
                        height: 18px;
                        width: 18px;
                        margin-right: 24px;
                    }
                    .des {
                        flex: 1;
                        .title {
                            height: 30px;
                            font-size: 28px;
                            line-height: 30px;
                            color: #233251;
                        }
                        p,.text {
                            margin-top: 28px;
                            font-size: 24px;
                            line-height: 40px;
                            color: #7e8698;
                        }
                    }
                }
            }
        }
        table{
            width: 100%;
            margin: 10px 0 30px;
            tr{
                height: 50px;
                td{
                    border: 1px solid #000;
                    text-align: center;
                    line-height: 50px;
                    &:nth-child(1){
                        width: 200px;
                    }
                }
                .different{
                  span{
                    position: relative;
                    margin-right: 15px;
                    em{
                      position: absolute;
                      font-style: normal;
                    }
                  }
                }
            }
        }
    }
</style>
