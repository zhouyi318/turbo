/*
 * @Author: 周毅
 * @Date: 2023-02-27 16:22:59
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-02-27 22:56:13
 * @FilePath: /wework/apps/basic-item/src/stores/check.js
 */
import { defineStore } from "pinia";
import { $http } from "utils";

export const useCheckStore = defineStore("check", {
  state: () => {
    return {
      taskId: null,
      verifyCode: null,
      securityCode: null,
    };
  },
  actions: {
    getSMS(props) {
      return $http
        .post("/commonSmsSendService", {
          ...props,
        })
        .then((res) => {
          this.taskId = res.taskId;
        });
    },
    getCode(props) {
      return $http
        .post("/securityCodeService", {
          ...props,
        })
        .then((res) => {
          this.verifyCode = res.verifyCode;
          this.securityCode = res.securityCode;
          return res;
        });
    },
    submit(props) {
      return $http.post("/cmbcCheckSmsBindEmp", {
        ...props,
      });
    },
  },
});
