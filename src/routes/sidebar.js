// get icon from https://demos.wrappixel.com/free-admin-templates/bootstrap/flexy-bootstrap-free/html/icon-material.html

import { route, AppPaths } from 'routes';
import { camelToRoute } from 'utils/helper'
import { ROLES } from 'constants'

let GROUP = {
  '/': '/'
};
Object.keys(AppPaths).map((key) => {
  if (AppPaths[key].index && key !== 'dashboard') {
    GROUP['/' + camelToRoute(key)] = AppPaths[key].index
  }
})

const MENUS = [
  // ------------------
  // dashboard
  // ------------------
  {
    to: route(AppPaths.dashboard.index),
    label: '대시보드',
    icon: 'mdi mdi-view-dashboard',
    role: [ROLES.super_admin, ROLES.admin]
  },
  // ------------------
  // user
  // - admin
  // - member
  // ------------------
  {
    to: null,
    label: '사용자 관리',
    icon: 'mdi mdi-account-multiple',
    role: [ROLES.super_admin, ROLES.admin],
    children: [
      {
        to: route(AppPaths.admin.list),
        label: '관리자 조회',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin]
      },
      {
        to: route(AppPaths.member.list),
        label: '회원 조회',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
    ]
  },
  // ------------------
  // award
  // - award prize
  // - award
  // ------------------
  {
    to: null,
    label: 'Awards 관리',
    icon: 'mdi mdi-trophy',
    role: [ROLES.super_admin, ROLES.admin],
    children: [
      {
        to: route(AppPaths.awardPrize.list),
        label: 'Awards 상품 관리',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
      {
        to: route(AppPaths.award.list),
        label: 'Awards 조회',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
    ]
  },
  // ------------------
  // Notice board Management
  // - notice
  // - faq
  // - 1:1 consultation
  // ------------------
  {
    to: null,
    label: '게시판 관리',
    icon: 'mdi mdi-note-text',
    role: [ROLES.super_admin, ROLES.admin],
    children: [
      {
        to: route(AppPaths.notice.list),
        label: '공지사항',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
      {
        to: route(AppPaths.faq.list),
        label: '자주하는 질문',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
      {
        to: route(AppPaths.consultation.list),
        label: '1:1 문의하기',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
    ]
  },
  // ------------------
  // Banner
  // ------------------
  {
    to: route(AppPaths.banner.list),
    label: '배너 관리',
    icon: 'mdi mdi-view-array',
    role: [ROLES.super_admin, ROLES.admin],
  },
  // ------------------
  // Push Notification
  // ------------------
  {
    to: route(AppPaths.pushNotification.list),
    label: 'PUSH 관리',
    icon: 'fas fa-bell',
    role: [ROLES.super_admin, ROLES.admin],
  },
  // ------------------
  // sale management
  // - payment history
  // - used character history
  // ------------------
  {
    to: null,
    label: '결제 관리',
    icon: 'mdi mdi-history',
    role: [ROLES.super_admin, ROLES.admin],
    children: [
      {
        to: route(AppPaths.paymentHistory.list),
        label: '결제 내역 조회',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin]
      },
      {
        to: route(AppPaths.usedCharacterHistory.list),
        label: '이용 내역 조회',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
    ]
  },
  // ------------------
  // point/coupon Management
  // - point history
  // - coupon history
  // ------------------
  {
    to: null,
    label: '포인트/쿠폰 관리',
    icon: 'mdi mdi-ticket',
    role: [ROLES.super_admin, ROLES.admin],
    children: [
      {
        to: route(AppPaths.point.list),
        label: '포인트 지급/회수',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
      {
        to: route(AppPaths.coupon.list),
        label: '쿠폰 지급/회수',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
    ]
  },
  // ------------------
  // video
  // - keyword
  // - template
  // - video share
  // ------------------
  {
    to: null,
    label: '영상편지 관리',
    icon: 'mdi mdi-message-video',
    role: [ROLES.super_admin, ROLES.admin],
    children: [
      {
        to: route(AppPaths.keyword.list),
        label: '키워드 관리',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
      {
        to: route(AppPaths.template.list),
        label: '템플릿 관리',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
      {
        to: route(AppPaths.videoShare.list),
        label: '공개 영상 관리',
        // icon: 'mdi mdi-share-variant',
        icon: 'mdi mdi-checkbox-blank-circle',
        role: [ROLES.super_admin, ROLES.admin]
      },
    ]
  },
]

export {GROUP}
export default MENUS
