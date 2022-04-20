export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybooh" */'@/modules/dayBook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'@/modules/dayBook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybooh-no-entry" */'@/modules/dayBook/views/EntryView.vue'),
        },
    ]

}