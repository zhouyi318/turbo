/*
 * @Author: 周毅
 * @Date: 2023-03-09 14:55:49
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 16:01:43
 * @FilePath: /wework/apps/basic-item/src/stores/customer_radar.js
 */
import { defineStore } from "pinia";
import { $http } from "utils";

export const useCustomerRadarStore = defineStore("customerRadar", {
  state: () => {
    return {
      // 日
      radarDayList: [],
      radarDayCount: 0,
      // 周
      radarWeekList: [],
      radarWeekCount: 0,
      // 月
      radarMonthList: [],
      radarMonthCount: 0,
    };
  },
  actions: {
    getRadarList(props) {
      return $http
        .post("/getRadarList", {
          ...props,
        })
        .then((res) => {
          const { data } = res;
          if (props.dateType === "1") {
            // 日
            this.radarDayList = data.recordList;
            this.radarDayCount = data.visitCount;
          }

          if (props.dateType === "2") {
            // 周
            this.radarWeekList = data.recordList;
            this.radarWeekCount = data.visitCount;
          }

          if (props.dateType === "3") {
            // 月
            this.radarMonthList = data.recordList;
            this.radarMonthCount = data.visitCount;
          }
        });
    },
  },
});
