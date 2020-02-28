import loadable from '@/components/loadable.js'

export default [
  {
		path: '/pages/test1/tab',
		component: loadable(() => import('@/pages/Test/Test1/Tab1.js'))
  },
  {
		path: '/pages/test2/tab1',
		component: loadable(() => import('@/pages/Test/Test2/Tab1.js'))
  },
  {
		path: '/pages/test2/tab2',
		component: loadable(() => import('@/pages/Test/Test2/Tab2.js'))
  },

]