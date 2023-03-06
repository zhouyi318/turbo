<template>
    <div class="app">
        <div class="tdesign-demo-item--layout" style="height:100%">
            <t-layout style="height:100%">
                <t-header style="border-bottom: 1px solid #eee">
                    <t-head-menu value="item1" height="120px">
                        <h1 class="logo" slot="logo" style="margin-left:25px;"><img src="./assets/logo.svg" /><span
                                class="title">自建应用代码示例</span></h1>
                        <template #operations>
                            <div style="padding-right:30px;">
                                <div style="display:flex;align-items: center;" v-if="user.userid">
                                    <img :src="user.avatar" style="width:36px;height:36px;border-radius:3px" />
                                    <span style="margin-left:10px;">{{user.name}}</span>
                                </div>
                                <template v-else>
                                    <div>暂未登录</div>
                                </template>
                            </div>
                        </template>
                    </t-head-menu>
                </t-header>
                <t-layout style="height:100%">
                    <t-aside>
                        <t-menu defaultValue="intro" theme="light" style="margin-right: 50px" height="550px"
                            @change="eventMenuChange">
                            <t-menu-item value="intro">
                                <t-icon slot="icon" name="home" />基本信息
                            </t-menu-item>
                            <t-menu-item value="auth">
                                <t-icon slot="icon" name="user-circle" />身份验证
                            </t-menu-item>
                            <t-menu-item value="contacts">
                                <t-icon slot="icon" name="usergroup" />通讯录
                            </t-menu-item>
                            <t-menu-item value="message">
                                <t-icon slot="icon" name="logo-wecom" />消息推送
                            </t-menu-item>
                            <t-menu-item value="media">
                                <t-icon slot="icon" name="image" />素材管理
                            </t-menu-item>
                            <t-menu-item value="robot">
                                <t-icon slot="icon" name="logo-android" />机器人
                            </t-menu-item>
                        </t-menu>
                    </t-aside>
                    <t-layout style="border-left: 1px solid #eee;background: #fff;">
                        <t-content>
                            <div>
                                <router-view></router-view>
                            </div>
                        </t-content>
                        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved
                        </t-footer>
                    </t-layout>
                </t-layout>
            </t-layout>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            user: window.globalData?.user || {}
        }
    },
    methods: {
        eventMenuChange(hash) {
            if (`#/` + hash != location.hash) {
                this.$router.push(`/${hash}`)
            }

        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
    background: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.app {

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    ;
}

.wrap {
    height: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    align-items: center;
    box-sizing: content-box;
    background: #fff;
}

.navigation {
    border: 0 none !important;


}

.logo {
    display: flex;
    align-items: center;
    font-weight: 600;
}

.logo img {
    width: 32px;
}

.logo .title {
    font-family: Avenir;
    color: #333;
    font-weight: 500;
    font-size: 20px;
    /* color:rgba(0,0,255,0.4); */
    letter-spacing: -0.5px;
    padding-left: 5px;
}

.header-right {}

.header-profile {
    display: flex;
    align-items: center;
}

.header-profile-avatar {
    width: 36px;
    height: 36px;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 3px;
}

.qr_login {
    margin: 80px auto;
}

.left-menu {
    min-height: 100%;
}

.content-body {
    min-height: 680px;
}

.block {
    padding: 40px;
    border-radius: 10px;
    background: #fff;
    min-height: 680px;
    overflow: auto;
}

.block-header {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 20px;
}

.el-main {
    background: #fff;
}

.el-tree-node {
    margin: 3px 0;
}

.el-tree-node__content {
    height: 28px;
}

.el-textarea__inner {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
