import Vue from "vue";
import VueRouter from "vue-router";
import AuthRequired from "./utils/AuthRequired";
import { adminRoot } from "./constants/config";
import { getCurrentUser } from "./utils";
import { ability } from "./store/index";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () =>
            import(/* webpackChunkName: "userLogin" */ "./views/user/Login")
    },
    {
        path: adminRoot,
        meta: {
            requiredAuth: true
        },
        component: () => import(/* webpackChunkName: "app" */ "./views/app"),
        redirect: `${adminRoot}/dashboards/default`,
        beforeEnter: AuthRequired,
        children: [
            {
                path: "dashboards/default",
                meta: {
                    action: "index",
                    subject: "DashboardController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "dashboards" */ "./views/app/dashboards/Analytics"
                    )
            },
            {
                path: "author/default",
                meta: {
                    action: "index",
                    subject: "AuthorController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "author" */ "./views/app/pages/author/Author"
                    )
            },
            {
                path: "author/add",
                meta: {
                    action: "store",
                    subject: "AuthorController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddAuthor" */ "./views/app/pages/author/AddAuthor"
                    )
            },
            {
                path: "author/edit/:id",
                meta: {
                    action: "edit",
                    subject: "AuthorController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditAuthor" */ "./views/app/pages/author/EditAuthor"
                    )
            },
            {
                path: "book-store/default",
                meta: {
                    action: "index",
                    subject: "BookTypeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book-store" */ "./views/app/pages/book-store/BookType"
                    )
            },
            {
                path: "book-store/warehouse",
                meta: {
                    action: "warehouse",
                    subject: "BookTypeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book-storeWarehouse" */ "./views/app/pages/book-store/Warehouse"
                    )
            },
            {
                path: "book-store/warehouse/edit/:id",
                meta: {
                    action: "warehouseEdit",
                    subject: "BookTypeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book-storeWarehouseEdit" */ "./views/app/pages/book-store/WarehouseEdit"
                        )
            },
            {
                path: "book-store/add",
                meta: {
                    action: "store",
                    subject: "BookTypeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book-storeAdd" */ "./views/app/pages/book-store/Add"
                    )
            },
            {
                path: "book-store/add-by-code",
                meta: {
                    action: "store",
                    subject: "BookTypeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book-storeAdd" */ "./views/app/pages/book-store/AddByCode"
                    )
            },
            {
                path: "book-store/edit/:id",
                meta: {
                    action: "edit",
                    subject: "BookTypeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book-storeEdit" */ "./views/app/pages/book-store/Edit"
                    )
            },
            {
                path: "book-category/default",
                meta: {
                    action: "index",
                    subject: "CategoryController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "CategoryList" */ "./views/app/pages/book-category/Tree"
                    )
            },
            {
                path: "book-category/add",
                meta: {
                    action: "store",
                    subject: "CategoryController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddCategory" */ "./views/app/pages/book-category/Add"
                    )
            },
            {
                path: "book-category/edit/:id",
                meta: {
                    action: "edit",
                    subject: "CategoryController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditCategory" */ "./views/app/pages/book-category/Edit"
                    )
            },
            {
                path: "book-group/default",
                meta: {
                    action: "index",
                    subject: "BookGroupController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "BookGroup" */ "./views/app/pages/book-group/List"
                    )
            },
            {
                path: "book-group/add",
                meta: {
                    action: "store",
                    subject: "BookGroupController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddBookGroup" */ "./views/app/pages/book-group/AddGroup"
                    )
            },
            {
                path: "book-group/edit/:id",
                meta: {
                    action: "edit",
                    subject: "BookGroupController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditBookGroup" */ "./views/app/pages/book-group/EditGroup"
                    )
            },
            {
                path: "book-group/add-books/:id",
                meta: {
                    action: "addBook",
                    subject: "BookGroupController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddBooks" */ "./views/app/pages/book-group/AddBooks"
                    )
            },
            {
                path: "book-series/default",
                meta: {
                    action: "index",
                    subject: "BookSeriesController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "bookSeries" */ "./views/app/pages/book-series/Series"
                    )
            },
            {
                path: "book-series/add",
                meta: {
                    action: "store",
                    subject: "BookSeriesController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "bookAddSeries" */ "./views/app/pages/book-series/AddSeries"
                    )
            },
            {
                path: "book-series/edit/:id",
                meta: {
                    action: "edit",
                    subject: "BookSeriesController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "bookEditSeries" */ "./views/app/pages/book-series/EditSeries"
                    )
            },
            {
                path: "book-series/add-books/:id",
                meta: {
                    action: "addBook",
                    subject: "BookSeriesController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "bookAddBooks" */ "./views/app/pages/book-series/AddBooks"
                    )
            },
            {
                path: "coupon/default",
                meta: {
                    action: "index",
                    subject: "CouponController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "coupon" */ "./views/app/pages/coupon/Coupon"
                    )
            },
            {
                path: "coupon/add",
                meta: {
                    action: "store",
                    subject: "CouponController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddCoupon" */ "./views/app/pages/coupon/AddCoupon"
                    )
            },
            {
                path: "coupon/edit/:id",
                meta: {
                    action: "edit",
                    subject: "CouponController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditCoupon" */ "./views/app/pages/coupon/EditCoupon"
                    )
            },
            {
                path: "notification/default",
                meta: {
                    action: "index",
                    subject: "NotificationController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "book" */ "./views/app/pages/notification/Notification"
                    )
            },
            {
                path: "notification/add",
                meta: {
                    action: "store",
                    subject: "NotificationController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddNotification" */ "./views/app/pages/notification/Add"
                    )
            },
            {
                path: "notification/edit/:id",
                meta: {
                    action: "edit",
                    subject: "NotificationController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Editnotification" */ "./views/app/pages/notification/Edit"
                    )
            },
            {
                path: "epub/user/:id",
                meta: {
                    action: "epub",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Epub" */ "./views/app/pages/epub/Epub"
                    )
            },
            {
                path: "epub/add",
                meta: {
                    action: "htmlToString",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddEpub" */ "./views/app/pages/epub/AddEpub"
                    )
            },
            {
                path: "epub/show/:id",
                meta: {
                    action: "showMyBooks",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Epubshow" */ "./views/app/pages/epub/Epubshow"
                    )
            },
            {
                path: "book/default",
                meta: {
                    action: "index",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "bookIndex" */ "./views/app/pages/book/Book"
                    )
            },
            {
                path: "book/add",
                meta: {
                    action: "store",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddBook" */ "./views/app/pages/book/AddBook"
                    )
            },
            {
                path: "book-add/step",
                meta: {
                    action: "store",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddBook" */ "./views/app/pages/book/addstep/AddBook"
                    )
            },
            {
                path: "book-add/step/:id",
                meta: {
                    action: "store",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddBook" */ "./views/app/pages/book/addstep/AddBook"
                    )
            },
            {
                path: "book/edit/:id",
                meta: {
                    action: "edit",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditBook" */ "./views/app/pages/book/EditBook"
                    )
            },
            {
                path: "book/add-translation/:id",
                meta: {
                    action: "addTranslation",
                    subject: "BookController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddTranslation" */ "./views/app/pages/book/AddTranslation"
                    )
            },
            {
                path: "user/default",
                meta: {
                    action: "index",
                    subject: "UserController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "User" */ "./views/app/pages/user/User"
                    )
            },
            {
                path: "user/add",
                meta: {
                    action: "createUser",
                    subject: "UserController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddUser" */ "./views/app/pages/user/AddUser"
                    )
            },
            {
                path: "user/edit/:id",
                meta: {
                    action: "edit",
                    subject: "UserController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditUser" */ "./views/app/pages/user/EditUser"
                    )
            },
            {
                path: "controller/default",
                meta: {
                    action: "index",
                    subject: "ContsController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "controllerDefault" */ "./views/app/pages/controller/Controller"
                    )
            },
            {
                path: "controller/add",
                meta: {
                    action: "store",
                    subject: "ContsController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddController" */ "./views/app/pages/controller/AddController"
                    )
            },
            {
                path: "controller/edit/:id",
                meta: {
                    action: "edit",
                    subject: "ContsController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditController" */ "./views/app/pages/controller/EditController"
                    )
            },
            {
                path: "role/default",
                meta: {
                    action: "index",
                    subject: "RoleController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "role" */ "./views/app/pages/role/Role"
                    )
            },
            {
                path: "role/permission/:role_id",
                meta: {
                    action: "edit",
                    subject: "RoleController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "permission" */ "./views/app/pages/role/Permission"
                    )
            },
            {
                path: "action/default",
                meta: {
                    action: "index",
                    subject: "ActionController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "actionDefault" */ "./views/app/pages/action/Action"
                    )
            },
            {
                path: "action/add",
                meta: {
                    action: "store",
                    subject: "ActionController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddAction" */ "./views/app/pages/action/AddAction"
                    )
            },
            {
                path: "action/edit/:id",
                meta: {
                    action: "edit",
                    subject: "ActionController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditAction" */ "./views/app/pages/action/EditAction"
                    )
            },
            {
                path: "faq/default",
                meta: {
                    action: "index",
                    subject: "FaqController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "faqDefault" */ "./views/app/pages/faq/Faq"
                    )
            },
            {
                path: "faq/add",
                meta: {
                    action: "store",
                    subject: "FaqController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddFaq" */ "./views/app/pages/faq/AddFaq"
                    )
            },
            {
                path: "faq/edit/:id",
                meta: {
                    action: "edit",
                    subject: "FaqController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditFaq" */ "./views/app/pages/faq/EditFaq"
                    )
            },
            {
                path: "knowledge/default",
                meta: {
                    action: "index",
                    subject: "KnowledgeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "knowledge" */ "./views/app/pages/knowledge/Knowledge"
                    )
            },
            {
                path: "knowledge/add",
                meta: {
                    action: "store",
                    subject: "KnowledgeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddKnowledge" */ "./views/app/pages/knowledge/AddKnowledge"
                    )
            },
            {
                path: "knowledge/edit/:id",
                meta: {
                    action: "edit",
                    subject: "KnowledgeController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditKnowledge" */ "./views/app/pages/knowledge/EditKnowledge"
                    )
            },
            {
                path: "ticket/default",
                meta: {
                    action: "index",
                    subject: "TicketController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Ticket" */ "./views/app/pages/ticket/Ticket"
                    )
            },
            {
                path: "ticket/edit/:id",
                meta: {
                    action: "edit",
                    subject: "TicketController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Ticket" */ "./views/app/pages/ticket/TicketEdit"
                    )
            },
            {
                path: "balance",
                meta: {
                    action: "index",
                    subject: "BalanceController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Balance" */ "./views/app/pages/balance/Balance"
                    )
            },
            {
                path: "balance/add",
                meta: {
                    action: "store",
                    subject: "BalanceController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Balance" */ "./views/app/pages/balance/AddBalance"
                    )
            },
            {
                path: "order/default",
                meta: {
                    action: "index",
                    subject: "PaymentController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "Order" */ "./views/app/pages/order/Order"
                    )
            },
            {
                path: "order/edit/:id",
                meta: {
                    action: "edit",
                    subject: "PaymentController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "orderEdit" */ "./views/app/pages/order/Edit"
                    )
            },
            {
                path: "order/uzcard",
                meta: {
                    action: "uzcard",
                    subject: "PaymentController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "orderUzcard" */ "./views/app/pages/order/Uzcard"
                    )
            },
            {
                path: "order/pay",
                meta: {
                    action: "uzcardList",
                    subject: "PaymentController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "orderPay" */ "./views/app/pages/order/Pay"
                    )
            },
            {
                path: "order/add-card",
                meta: {
                    action: "token",
                    subject: "PaymentController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "orderAddCard" */ "./views/app/pages/order/AddCard"
                    )
            },
            {
                path: "order/my-invoice",
                meta: {
                    action: "uzcardList",
                    subject: "PaymentController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "orderAddCard" */ "./views/app/pages/order/Myinvoice"
                    )
            },
            {
                path: "tcategory/default",
                meta: {
                    action: "index",
                    subject: "TicketCategoryController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "tcategory" */ "./views/app/pages/tcategory/TCategory"
                    )
            },
            {
                path: "tcategory/add",
                meta: {
                    action: "store",
                    subject: "TicketCategoryController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "AddTCategory" */ "./views/app/pages/tcategory/AddTCategory"
                    )
            },
            {
                path: "tcategory/edit/:id",
                meta: {
                    action: "edit",
                    subject: "TicketCategoryController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "EditTCategory" */ "./views/app/pages/tcategory/EditTCategory"
                    )
            },
            {
                path: "settings",
                meta: {
                    action: "index",
                    subject: "RoleController"
                },
                component: () =>
                    import(
                        /* webpackChunkName: "settings" */ "./views/app/pages/settings"
                    )
            },
            {
                path: "license/default",
                component: () =>
                    import(
                        /* webpackChunkName: "license" */ "./views/app/pages/license/License"
                    )
            }
        ]
    },
    {
        path: "/notfound",
        meta: { requiresAuth: false },
        component: () => import(/* webpackChunkName: "error" */ "./views/Error")
    },
    {
        path: "/login",
        meta: { requiresAuth: false },
        component: () =>
            import(/* webpackChunkName: "userLogin" */ "./views/user/Login")
    },
    {
        path: "/forgot-password",
        meta: { requiresAuth: false },
        component: () =>
            import(
                /* webpackChunkName: "userForgotPassword" */ "./views/user/ForgotPassword"
            )
    },
    {
        path: "/reset-password",
        meta: { requiresAuth: false },
        component: () =>
            import(
                /* webpackChunkName: "userResetPassword" */ "./views/user/ResetPassword"
            )
    },
    {
        path: "*",
        component: () => import(/* webpackChunkName: "error" */ "./views/Error")
    }
];

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredAuth)) {
        const user = getCurrentUser();
        if (user) {
            if (user.role.name != "admin") {
                const checkPerm = to.matched.some(route => {
                    return ability.can("index", "DashboardController");
                });
                if (!checkPerm) {
                    return next("/notfound");
                }
            }
            next();
        }
    } else {
        next();
    }
});
export default router;
