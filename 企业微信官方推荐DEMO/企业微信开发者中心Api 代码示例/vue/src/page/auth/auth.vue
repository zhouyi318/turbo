<template>
    <div class="auth">
        <h2 style="margin:0 0 1em 0">身份验证</h2>
        <t-table stripe bordered row-key="title" :data="cells" :columns="columns" />

        <h2 style="margin:1em 0">网页授权登录<span style="font-weight:normal;font-size:13px;color:#555">（仅在企业微信中使用）</span></h2>        
        <div>
            <t-button theme="primary" @click="eventLoginBase" variant="base">静默授权登录</t-button>
            <t-button theme="primary" @click="eventLoginPrivate" variant="base" style="margin-left:20px;">手动授权登录</t-button>
        </div>

        

        <h2 style="margin:1em 0">扫码授权登录<span style="font-weight:normal;font-size:13px;color:#555">（仅在浏览器中使用）</span></h2>        
        <div>
            <t-popup :visible="visible" placement="right" showArrow>
                <t-button theme="primary" @click="eventQrLogin" variant="base">扫码登录</t-button>
                <template #content>
                    <div slot="content" id="qr_login" style="padding:20px 0 10px"></div>
                </template>
            </t-popup>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    colKey: 'title',
                    title: '字段',
                    width: 150
                },
                {
                    colKey: 'value',
                    title: '值'
                },
                {
                    colKey:'note',
                    title:'说明',
                    width:200
                }
            ],
            cells: [],
            globalData: {},
            isLogin:false,
            visible: false
        }
    },
    methods: {
        initData() {
            const globalData = this.globalData
            this.isLogin = globalData.user?.user_id ? true : false;
            this.cells = [
                {
                    title: '网站根路径',
                    value: globalData.config.site_base,
                    note:'须与可信域名一致'
                },
                // {
                //     title: '应用主页',
                //     value: globalData.config.site_base + globalData.config.home_path
                // },

                {
                    title: '授权后跳转页面',
                    value: globalData.redirect_uri,
                    note:'redirect_uri，在企业微信客户端中打开'
                },
                {
                    title: '网页授权链接',
                    value: globalData.login_url_base,
                    note:'静默授权，scope=snsapi_base'
                },
                {
                    title: '网页授权链接',
                    value: globalData.login_url_private,
                    note:'手动授权，scope=snsapi_privateinfo，agent_id 必填'
                },

            ]
        },
        eventLoginBase() {
            location.href = this.globalData.login_url_base
        },
        eventLoginPrivate(){
            location.href = this.globalData.login_url_private
        },
        eventQrLogin() {
            this.visible = !this.visible
            if(!this.visible) return;
            setTimeout(() => {
                window.getQRCode({
                    "id": "qr_login",
                    "appid": this.globalData.config.corp_id,
                    "agentid": this.globalData.config.agent_id,
                    "redirect_uri": encodeURI(this.globalData.redirect_uri),
                    "state": "hellowecom",
                    "href": "",
                    "lang": "zh",
                });
            }, 100);
        }
    },
    async mounted() {        
        this.globalData = window.globalData;        
        this.initData();

    }
}
</script>

<style>
.auth {
    padding: 40px;
}
</style>