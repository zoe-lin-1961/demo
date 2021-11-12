import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
//import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
   
    {
      path: '/',
      name: '首页',
      component: TabsView ,
      redirect: '/login',
      children: [
          {
          path: 'playerList',
          name: '玩家列表',
          meta: {
            icon: 'team'
          },
           component: BlankView,
          // component: () => import('@/pages/playerList'),
          children: [
            {
              path: 'playerList',
              meta: {
                icon: 'user'
              },
              name: '玩家列表 ',
              component: () => import('@/pages/playerList'),
            },
            {
              path: 'blockade',
              meta: {
                icon: 'disconnect'
              },
              name: '凍結玩家',
              component: () => import('@/pages/blockade'),
            },
            {
              path: 'onlinePlayer',
              meta: {
                icon: 'link'
              },
              name: '在線玩家',
              component: () => import('@/pages/onlinePlayer'),
            }
          ]
        },
        {
          path: 'funds',
          name: '玩家資金',
          meta: {
            icon: 'dollar'
          },
          component: BlankView,
          children: [
            {
              path: 'deposit',
              meta: {
                icon: 'file-search'
              },
              name: '存款歷史',
              component: () => import('@/pages/depositHis'),
            },
            {
              path: 'accountReport',
              meta: {
                icon: 'profile'
              },
              name: '帳務報表',
              component: () => import('@/pages/profile'),
            },
            {
              path: 'remain',
              meta: {
                icon: 'tool'
              },
              name: '修改玩家餘額',
              component: () => import('@/pages/remain'),
            }
          ]
        },
        {
          path: 'reportCenter',
          name: '報表中心',
          meta: {
            icon: 'bar-chart'
          },
          component: BlankView,
          children: [
            {
              path: 'decisionCompaney',
              meta: {
                icon: 'profile'
              },
              name: '公司輸贏',
              component: () => import('@/pages/decisionCompaney'),
            },
            {
              path: 'decisionPlayer',
              meta: {
                icon: 'profile'
              },
              name: '玩家輸贏',
              // component: () => import('@/pages/depositHis'),
            }
          ]
        },
        {
          path: 'tableLog',
          name: '後台日誌',
          meta: {
            icon: 'file-search'
          },
          component: BlankView,
          children: [
            {
              path: 'modify',
              meta: {
                icon: 'form'
              },
              name: '修改紀錄',
              // component: () => import('@/pages/depositHis'),
            },
            {
              path: 'loginHistory',
              meta: {
                icon: 'export'
              },
              name: '登入紀錄',
              // component: () => import('@/pages/depositHis'),
            },
            {
              path: 'fundsHistory',
              meta: {
                icon: 'dollar'
              },
              name: '資金操作紀錄',
              // component: () => import('@/pages/depositHis'),
            }
          ]
        },
        {
          path: 'gameManage',
          name: '遊戲管理',
          meta: {
            icon: 'apartment'
          },
          component: BlankView,
          children: [
            {
              path: 'gameOptionSetting',
              meta: {
                icon: 'setting'
              },
              name: '遊戲功能設置',
              component: () => import('@/pages/gameManerge'),
            }]
        },
        //{
        //   path: 'openpalte',
        //   meta: {
        //     icon: 'dollar'
        //   },
        //   name: 'openpalte',
        //   component: () => import('@/pages/gameManerge/openpalte'),
        // }
        // {
        //   name: '验权页面',
        //   path: 'auth/demo',
        //   meta: {
        //     icon: 'file-ppt',
        //     authority: {
        //       permission: 'form',
        //       role: 'manager'
        //     },
        //     component: () => import('@/pages/demo')
        //   }
        // }
      ]
    }
  ]
}

export default options
