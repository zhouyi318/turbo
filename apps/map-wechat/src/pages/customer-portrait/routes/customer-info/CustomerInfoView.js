/*
 * @Author: Zhou Yi
 * @Date: 2021-08-11 17:11:54
 * @LastEditors: Zhou Yi
 * @LastEditTime: 2021-08-14 16:42:48
 */
import React from 'react';
import {
  WhiteSpace,
  List,
  Flex,
  Tabs,
  Drawer,
  Icon,
  InputItem,
  TextareaItem,
  Button,
} from 'antd-mobile';
import dayjs from 'dayjs';
import { Instagram } from 'react-content-loader';
import {
  SEX,
  MARST,
  INDUSTRY,
  FACE_SIGNATURE,
  CUST_GRADE,
  RISK_GRADE,
  CATEGORY,
} from '@/constants/dictionary';
import { getAgeGroup, noPassByMobile, noPassByName } from '@/utils';
import noData from 'public/null.png';
import styles from './CustomerInfoView.less';

const prefixCls = 'customer-info-view';
const Item = List.Item;

function CustomerInfoView(props) {
  const { form, data = {}, isOpen, onOpenChange, onSave } = props;
  const { getFieldProps, validateFields } = form;
  const { custInfo = {}, externalUserInfo = {} } = data;
  const { external_contact = {}, follow_user = [] } = externalUserInfo;
  const { custBaseInfo = {}, custLabelInfo = {}, masterList = [] } = custInfo;
  const followUser = follow_user[0] ? follow_user[follow_user.length - 1] : {};

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        console.log(value);
        onSave(value);
      }
    });
  };

  const getCardType = values => {
    let cardTypes = [];
    const cardNames = [];

    values.map(item => {
      cardTypes.push(item.CATEGORY);
    });

    cardTypes = new Set(cardTypes);

    cardTypes = Array.from(cardTypes);

    cardTypes.map(item => {
      cardNames.push(CATEGORY[item]);
    });

    return cardNames.join(',');
  };

  const sidebar = (
    <div
      className={styles[`${prefixCls}-drawer`]}
      style={
        document.documentElement.clientHeight > 480
          ? {}
          : {
              height: document.documentElement.clientHeight,
              overflowY: 'scroll',
            }
      }
    >
      <div className={styles[`${prefixCls}-drawer-title`]}>
        <div>备注信息</div>
        <div role='button' tabIndex={0} onClick={onOpenChange}>
          <Icon type='cross' color='#666' />
        </div>
      </div>

      <div className={styles[`${prefixCls}-drawer-main`]}>
        <div className={styles[`${prefixCls}-drawer-main-item`]}>
          <div>备注名</div>
          <InputItem
            {...getFieldProps('remark', {
              initialValue: followUser.remark,
            })}
            placeholder='添加备注名'
          />
        </div>

        <div className={styles[`${prefixCls}-drawer-main-item`]}>
          <div>手机号</div>
          <InputItem
            {...getFieldProps('remark_mobiles', {
              initialValue: followUser.remark_mobiles
                ? followUser.remark_mobiles.join(',')
                : undefined,
            })}
            placeholder='添加手机号'
          />
        </div>

        <div className={styles[`${prefixCls}-drawer-main-item`]}>
          <div>描述</div>
          <TextareaItem
            placeholder='添加描述'
            rows={5}
            count={150}
            {...getFieldProps('description', {
              initialValue: followUser.description,
            })}
          />
        </div>

        <div className={styles[`${prefixCls}-drawer-main-btn`]}>
          <Button type='primary' onClick={onSubmit}>
            保存
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {JSON.stringify(data) === '{}' ? (
        <Instagram height='100%' />
      ) : (
        <Drawer
          className={styles[prefixCls]}
          position='bottom'
          open={isOpen}
          sidebar={isOpen ? sidebar : <div />}
        >
          <div style={{ height: '60PX' }} className={styles[`${prefixCls}-header`]}>
            <div className={styles[`${prefixCls}-header-img`]}>
              <img style={{ width: '60PX' }} src={external_contact.avatar} alt='头像' />
            </div>
            <div className={styles[`${prefixCls}-header-info`]}>
              <div>姓名:&nbsp;{external_contact.name}</div>
              <div>
                添加时间：&nbsp;
                {followUser.createtime
                  ? dayjs(followUser.createtime * 1000).format('YYYY-MM-DD hh:mm:ss')
                  : '--'}
              </div>
            </div>
          </div>

          <List className={styles[`${prefixCls}-remark`]}>
            <Item arrow='horizontal' multipleLine onClick={onOpenChange} platform='android'>
              备注信息
            </Item>
          </List>

          <WhiteSpace />

          {JSON.stringify(custInfo) === '{}' ? (
            <div className={styles[`${prefixCls}-nodata`]}>
              <div>
                <div>
                  <img src={noData} alt='没有客户信息' />
                </div>
                <div className={styles[`${prefixCls}-nodata-title`]}>暂无客户信息</div>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <div className={styles[`${prefixCls}-tag`]}>
                <div className={styles[`${prefixCls}-tag-title`]}>标签</div>
                <div className={styles[`${prefixCls}-tag-list`]}>
                  {custLabelInfo.grade && (
                    <Flex wrap='wrap' align='start' justify='start'>
                      <div className={styles[`${prefixCls}-tag-list-item`]}>
                        {CUST_GRADE[custLabelInfo.grade]}
                      </div>
                    </Flex>
                  )}
                </div>
              </div>

              <WhiteSpace />

              <div className={styles[`${prefixCls}-tabs`]}>
                <Tabs
                  tabs={[{ title: '客户信息' }, { title: '业务属性' }]}
                  initialPage={0}
                  onChange={(tab, index) => {
                    console.log('onChange', index, tab);
                  }}
                  onTabClick={(tab, index) => {
                    console.log('onTabClick', index, tab);
                  }}
                >
                  <List>
                    <Item>
                      <span>客户姓名</span>
                      <span>{noPassByName(custBaseInfo.custName)}</span>
                    </Item>

                    <Item>
                      <span>手机号</span>
                      <span>{noPassByMobile(custBaseInfo.mobile)}</span>
                    </Item>

                    <Item>
                      <span>性别</span>
                      <span>{SEX[custBaseInfo.custGender] || '未知'}</span>
                    </Item>

                    <Item>
                      <span>年龄</span>
                      <span>{getAgeGroup(custBaseInfo.custBirthday)}</span>
                    </Item>

                    <Item>
                      <span>家庭情况</span>
                      <span>{MARST[custBaseInfo.marst] || '未知'}</span>
                    </Item>

                    <Item>
                      <span>职业类型</span>
                      <span>{INDUSTRY[custBaseInfo.industry] || '未知'}</span>
                    </Item>

                    <Item>
                      <span>所属分行</span>
                      <span>{custBaseInfo.belongBrchOrgName}</span>
                    </Item>
                  </List>
                  <List>
                    <Item>
                      <span>卡片类型</span>
                      <span>{getCardType(masterList)}</span>
                    </Item>

                    <Item>
                      <span>风评渠道</span>
                      <span>{FACE_SIGNATURE[custLabelInfo.faceSignatureLabel] || '情况未知'}</span>
                    </Item>

                    <Item>
                      <span>风评到期日</span>
                      <span>{custLabelInfo.riskGradeDateEnd}</span>
                    </Item>

                    <Item>
                      <span>风险等级</span>
                      <span>{RISK_GRADE[custLabelInfo.custRiskGrade]}</span>
                    </Item>
                  </List>
                </Tabs>
              </div>
            </React.Fragment>
          )}
        </Drawer>
      )}
    </React.Fragment>
  );
}

export default CustomerInfoView;
