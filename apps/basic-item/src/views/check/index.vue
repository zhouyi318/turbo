<!--
 * @Author: 周毅
 * @Date: 2023-02-23 10:57:31
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-24 20:06:29
 * @FilePath: /wework/apps/basic-item/src/views/check/index.vue
-->

<template>
  <div class="check">
    <div class="check-header">
      <div class="check-header-title">身份认证</div>
      <div class="check-header-describe">
        <van-icon name="info-o" color="#ee0a24" />
        为保障您的账号权益，请先进行身份安全认证。安全认证仅在首次授权时进行。
      </div>
    </div>
    <div class="check-main">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="userNo"
            name="userNo"
            label="OA号"
            required
            placeholder="请输入OA号"
            :rules="[{ required: true, message: '请输入OA号' }]"
          />

          <van-field
            v-model="mobile"
            type="tel"
            name="mobile"
            label="手机号"
            required
            readonly
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />

          <van-field
            v-model="sms"
            center
            clearable
            label="图形码"
            placeholder="请输入图形码"
          >
            <template #button>
              <div size="small" type="primary">ABCD</div>
            </template>
          </van-field>

          <van-field
            v-model="sms"
            type="digit"
            center
            clearable
            label="短信验证码"
            placeholder="请输入验证码"
          >
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="check-footer">
      <img :src="getImageUrl('mingsheng_logo.png')" alt="logo" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl } from "@/basic-utils/index.js";

const userNo = ref("");
const password = ref("");

const onSubmit = (values) => {
  console.log("submit", values);
};
</script>

<style lang="less">
@import "./style.less";
</style>
