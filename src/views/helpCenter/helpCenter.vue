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

</style>
