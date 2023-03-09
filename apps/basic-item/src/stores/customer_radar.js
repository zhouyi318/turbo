/*
 * @Author: 周毅
 * @Date: 2023-03-09 14:55:49
 * @LastEditors: mskj-zhouyi zhouyi@mskj.com
 * @LastEditTime: 2023-03-09 19:51:14
 * @FilePath: /wework/apps/basic-item/src/stores/customer_radar.js
 */
import { defineStore } from "pinia";
import { $http } from "utils";

export const useCustomerRadarStore = defineStore("customerRadar", {
  state: () => {
    return {
      loading: false,
      // 日
      radarDayList: [],
      radarDayCount: 0,
      // 周
      radarWeekList: [],
      radarWeekCount: 0,
      radarWeekCardList: [],
      // 月
      radarMonthList: [],
      radarMonthCount: 0,
    };
  },
  actions: {
    getRadarList(props) {
      this.loading = true;
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
            if (data.recordList.length > 0) {
              let [tempData, outputData] = [[], []];

              // 将所有数据合并
              for (let i = 0, len = data.recordList.length; i < len; i++) {
                tempData = tempData.concat(...data.recordList[i].list);
              }

              // 两个一组
              for (let i = 0, len = tempData.length; i < len; i += 2) {
                outputData.push(tempData.slice(i, i + 2));
              }

              // 最多显示3组
              outputData = outputData.slice(0, 3);
              this.radarWeekCardList = outputData;
              console.log(outputData)
            }
          }

          if (props.dateType === "3") {
            // 月
            this.radarMonthList = data.recordList;
            this.radarMonthCount = data.visitCount;
          }
          this.loading = false;
        });
    },
  },
});
