<template>
    <div class="partyinfo">
        <div class="partyinfo-banner">
            <div class="partyinfo-title">部门详情</div>            
        </div>
        <div class="partyinfo-content">
            <slot></slot>            
        </div>
    </div>
</template>
<script>
export default {
    components: {
        
    },
    props: {
        partyid: Number
    },
    methods: {
        
    },
}
</script>
<style lang="css" scoped>
    .partyinfo-banner {
        padding:10px 20px;
        margin-bottom: 15px;
        background: #f7f7f7;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>