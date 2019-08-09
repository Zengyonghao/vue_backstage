<template>
    <div class="login_container">
       <el-form ref="loginForm" :model="loginFrom" :rules="loginRules"  class="login_form" auto-complete="on" label-position="left">
        <h3 class="title">智能助手管理后台</h3>
           <el-form-item prop="userName" class="el_form_item_form">
            <span class="svg_container">
                <svg class="user">
                    <use xlink:href="#password"></use>
                </svg>
            </span>
            <el-input v-model="loginFrom.userName" name = "userName" type="text" auto-complete="on" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="el_form_item_form">
            <span class="svg_container">
                <svg class="password">
                <use xlink:href="#user"></use>
                </svg>

            </span>
            <el-input :type:="pwdType"
                      v-model="loginFrom.password"
                      name="password"
                      auto-complete="true"
                      placeholder="请输入密码"
                      @keyup.enter.native="handleLogin"></el-input>
            <el-button :loading="loading" type="primary" style="..." @click.native.prevent="handleLogin">
                登录
            </el-button>
        </el-form-item>
       </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",

        data() {
            // 处理rules结果的具体逻辑 value就是是否符合规则
            const validateUsername =(rule,value,callback) => {
                if (!value){
                    callback(new Error("请输入密码"))
                }else
                    {
                        callback();
                }

            };
            return{
                pwdType: "password",
                loading: false,
                loginFrom:{
                    userName: "",
                    password: "",
                    is_pc: ""
                },
                // 登录方法的rule required表示需要输出 不得为空 trigger表示 什么时候触发开始验证 blur表示失去焦点的时候提示
                loginRules:{
                    userName:[{required:true,trigger:"blur",validator: validateUsername}]
            },

            }
        },

        methods: {
            handleLogin() {
                alert("登录")
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    $bg:#39454B;
    $light_gray:#eee;
    .login_container{
        .el-input{
            display: inline-block;
            height: 47px;
            width: 85%;
            input{
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                border-radius: 0;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                &:-webkit-autofill{
                    -webkit-box-shadow: 0 0 0 1000px $bg inset !important;
                    -webkit-text-fill-color: #fff !important;

                }

            }
        }
    .el_form_item_form{
        border:1px solid rgba(255,255,255,0.1);
        background: rgba(0,0,0,0.1);
        border-radius: 5px;
        color: #454545;

    }

    }

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    /*声明变量 用$表示*/
    $bg:#39454B;
    $dark_gray:#889aa4;
    $light_gray:#eee;
.login_container{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    .login_form{
        /*postion表示以何种方式定位 比如以窗体定位 以父布局定位*/
        position: absolute;
        left: 0;
        right: 0;
        width: 520px;
        max-width: 100%;
        /*顺时针方向*/
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }
    .svg_container{
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .title{
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }
}
</style>