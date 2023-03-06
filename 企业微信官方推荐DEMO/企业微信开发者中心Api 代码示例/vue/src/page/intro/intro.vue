<template>
    <div class="intro">
        <h2 style="margin: 0 0 1em">基本信息</h2>
        <t-table
            stripe
            bordered
            row-key="title"
            :data="cells"
            :columns="columns"
      />
    </div>    
</template>

<script>

export default {
    data(){
        return {
            columns:[
                {
                    colKey:'title',
                    title:'字段',
                    width:150
                },
                {
                    colKey:'value',
                    title:'值'
                },
                {
                    colKey:'note',
                    title:'说明',
                    width:150
                }
            ],
            cells:[]
        }
    },
    methods:{
    },

    async mounted(){
        
        
        const globalData = window.globalData             
            this.cells = [
                {
                   title:'CorpID',
                    value:globalData.config.corp_id || '请在 main.config.js 中填写 corp_id',
                    note:'企业ID'
                },
                {
                   title:'AgentID',
                    value:globalData.config.agent_id  || '请在 main.config.js 中填写 agent_id',
                    note:'应用ID'
                },
                {
                   title:'AppSecret',
                    value:globalData.config.app_secret || '请在 main.config.js 中填写 app_secret',
                    note:'应用secret'                    
                },
                {
                   title:'AccessToken',
                   value:globalData.access_token,
                    note:'接口调用凭证'
                },
                {
                   title:'ExpireTime',
                   value:globalData.expire_time,
                    note:'过期时间'
                },
            ]
    }
}
</script>

<style>
.intro{
    padding:40px;
}
</style>