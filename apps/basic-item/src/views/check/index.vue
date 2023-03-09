<!--
 * @Author: 周毅
 * @Date: 2023-02-23 10:57:31
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 12:28:51
 * @FilePath: /wework/apps/basic-item/src/views/check/index.vue
-->

<style lang="less">
@import "./style.less";
</style>

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
      <van-form ref="form" validate-trigger="onChange" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="userSN"
            name="userSN"
            label="OA号"
            required
            placeholder="请输入OA号"
            :rules="[
              {
                required: true,
                message: '请输入OA号',
              },
            ]"
          />

          <van-field
            v-model="mobile"
            name="mobile"
            type="tel"
            label="手机号"
            required
            maxlength="11"
            placeholder="请输入手机号"
            :rules="[
              {
                required: true,
                message: '请输入正确的手机号',
                pattern: mobilePattern,
              },
            ]"
            @change="onChangeMobile"
          />

          <van-field
            v-model="verifyCode"
            name="verifyCode"
            v-if="isVerifyCode"
            center
            required
            maxlength="4"
            label="图形码"
            placeholder="请输入图形码"
            :rules="[
              {
                required: true,
                message: '请输入图形码',
                validator: validatorVerifyCode,
              },
            ]"
          >
            <template #button>
              <div size="small" type="primary" @click="getVerifyCode">
                <img
                  style="width: 78px"
                  :src="`data:image/jpg;base64,${store.securityCode}`"
                  alt="验证码"
                />
              </div>
            </template>
          </van-field>

          <van-field
            v-model="msgContent"
            name="msgContent"
            type="digit"
            center
            required
            maxlength="6"
            label="短信验证码"
            placeholder="请输入验证码"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
                :disabled="isDisabledSMS"
                @click="getMsm"
                >{{ smsName }}</van-button
              >
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            :disabled="isDisabledBtn"
            block
            type="primary"
            native-type="submit"
          >
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
import { ref, watch } from "vue";
import { $storage } from "utils";
import { useCheckStore } from "@/stores/check.js";
import { getImageUrl } from "@/basic-utils/index.js";

const store = useCheckStore();

const userSN = ref("");
const mobile = ref("");
const verifyCode = ref("");
const smsName = ref("发送验证码");
const timer = ref(null);
const msgContent = ref("");
const isVerifyCode = ref(false);
const isDisabledSMS = ref(true);
const isDisabledBtn = ref(true);

// 校验手机号
const mobilePattern = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
const onChangeMobile = (e) => {
  const mobileVal = e.target.value;
  isDisabledSMS.value = !mobilePattern.test(mobileVal);
};

// 校验图形码
const validatorVerifyCode = (val) => {
  if (val.toUpperCase() !== store.verifyCode.toUpperCase()) {
    return "图形码错误";
  }
};

// 监听表单数据，控制提交按钮
watch(
  () => [
    userSN.value,
    mobile.value,
    msgContent.value,
    verifyCode.value,
    isVerifyCode.value,
  ],
  (value) => {
    console.log("message", value);
    if (value[0] !== "" && mobilePattern.test(value[1]) && value[2] !== "") {
      isDisabledBtn.value = false;
      if (
        isVerifyCode.value &&
        value[3].toUpperCase() !== store.verifyCode.toUpperCase()
      ) {
        isDisabledBtn.value = true;
      }
    } else {
      isDisabledBtn.value = true;
    }
  }
);

// 短信验证码倒计时
const SMSVerifyCode = () => {
  let TIME_COUNT = 60;
  if (!timer.value) {
    smsName.value = TIME_COUNT;
    isDisabledSMS.value = true;
    timer.value = setInterval(() => {
      if (smsName.value > 0 && smsName.value <= TIME_COUNT) {
        smsName.value--;
      } else {
        clearInterval(timer.value);
        timer.value = null;
        smsName.value = "发送验证码";
        isDisabledSMS.value = false;
      }
    }, 1000);
  }
};

// 获取短信验证码
const getMsm = () => {
  store.getSMS({
    userSN: userSN.value,
    mobile: mobile.value,
    spName: "85006",
    data: "FIELD0|企业微信授权|FIELD1|登录",
    appId: "AI2",
  });
  SMSVerifyCode();
};

// 获取图形验证码
const getVerifyCode = () => {
  if (isVerifyCode.value) {
    verifyCode.value = "";
  }
  return store.getCode();
};

// 提交数据
const onSubmit = ({ userSN, mobile, msgContent }) => {
  const { QW_CORP_ID, QW_AGENTID } = $storage.getSession("wework_config");
  const params = {
    taskId: store.taskId,
    corpId: QW_CORP_ID,
    agentId: QW_AGENTID,
    qwUserId: userSN,
    oaAccount: userSN,
    mobile: mobile,
    msgContent: msgContent,
  };
  store.submit(params).then((res) => {
    if (res.STATUS === "3014") {
      getVerifyCode().then(() => {
        isVerifyCode.value = true;
      });
    } else {
      // 身份认证成功，重走登录逻辑
      window.location.href = window.location.origin;
    }
  });
};
</script>
