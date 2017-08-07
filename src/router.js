const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/resume',
        meta: {
            title: '我的简历'
        },
        component: (resolve) => require(['./views/resume.vue'], resolve)
    },
    {
        path: '/product',
        meta: {
            title: '作品集'
        },
        component: (resolve) => require(['./views/product.vue'], resolve)
    }
];
export default routers;