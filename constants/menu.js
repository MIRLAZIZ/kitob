import { adminRoot } from "./config";

const data = [
  {
    id: "dashboards",
    icon: "iconsminds-dashboard",
    label: "menu.dashboards",
    to: `${adminRoot}/dashboards/default`,
    meta: { con: 'DashboardController', action: 'index' },
  },
  {
    id: "book",
    icon: "iconsminds-book",
    label: "menu.book",
    to: `${adminRoot}/book`,
    meta: { con: 'BookController', action: 'index' },
    subs: [
      {
        icon: "simple-icon-list",
        label: "menu.list",
        to: `${adminRoot}/book/default`,
        meta: { con: 'BookController', action: 'index' },
      },
      {
        icon: "simple-icon-magnifier-add",
        label: "menu.list",
        to: `${adminRoot}/book-add/step/1`,
        meta: { con: 'BookController', action: 'store' },
      },
      // {
      //   icon: "simple-icon-magnifier-add",
      //   label: "menu.add-new",
      //   to: `${adminRoot}/book/add`,
      // },
      // {
      //   icon: "simple-icon-magnifier-add",
      //   label: "menu.add-new",
      //   to: `${adminRoot}/book/add/step/1`,
      // },
      {
        id: "book-group",
        icon: "iconsminds-men",
        label: "menu.book-group",
        to: `${adminRoot}/book-group`,
        meta: { con: 'GroupController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/book-group/default`,
            meta: { con: 'GroupController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/book-group/add`,
            meta: { con: 'GroupController', action: 'store' },
          },
        ]
      },
      {
        id: "series",
        icon: "iconsminds-men",
        label: "menu.series",
        to: `${adminRoot}/book-series`,
        meta: { con: 'BookSeriesController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/book-series/default`,
            meta: { con: 'BookSeriesController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/book-series/add`,
            meta: { con: 'BookSeriesController', action: 'store' },
          },
        ]
      },
      {
        id: "category",
        icon: "iconsminds-men",
        label: "category.category",
        to: `${adminRoot}/book-category`,
        meta: { con: 'CategoryController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/book-category/default`,
            meta: { con: 'CategoryController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/book-category/add`,
            meta: { con: 'CategoryController', action: 'store' },
          },
        ]
      },
      {
        id: "coupon",
        icon: "iconsminds-men",
        label: "menu.coupon",
        to: `${adminRoot}/coupon`,
        meta: { con: 'CouponController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/coupon/default`,
            meta: { con: 'CouponController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/coupon/add`,
            meta: { con: 'CouponController', action: 'store' },
          },
        ]
      },
      {
        id: "notification",
        icon: "iconsminds-men",
        label: "menu.notification",
        to: `${adminRoot}/notification`,
        meta: { con: 'NotificationController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/notification/default`,
            meta: { con: 'NotificationController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/notification/add`,
            meta: { con: 'NotificationController', action: 'store' },
          },
        ]
      },
      // {
      //   id: "epub",
      //   icon: "iconsminds-men",
      //   label: "menu.epub",
      //   to: `${adminRoot}/epub`,
      //   meta: {con: 'BookController', action: 'epub'},
      //   subs: [
      //     {
      //       icon: "simple-icon-list",
      //       label: "menu.list",
      //       to: `${adminRoot}/epub/default`,
      //       meta: {con: 'BookController', action: 'epub'},
      //     },
      //     {
      //       icon: "simple-icon-magnifier-add",
      //       label: "menu.add-new",
      //       to: `${adminRoot}/epub/add`,
      //       meta: {con: 'BookController', action: 'htmlToString'},
      //     },
      //
      //   ]
      // },
      {
        id: "author",
        icon: "iconsminds-men",
        label: "menu.author",
        to: `${adminRoot}/author`,
        meta: { con: 'AuthorController', action: 'index' },

        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/author/default`,
            meta: { con: 'AuthorController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/author/add`,
            meta: { con: 'AuthorController', action: 'store' },
          },
        ]
      },
      {
        id: "bookshelf",
        icon: "iconsminds-men",
        label: "kitob jovoni",
        to: `${adminRoot}/bookshelf`,
        meta: { con: 'AuthorController', action: 'index' },

        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/bookshelf`,
            meta: { con: 'AuthorController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/author/add`,
            meta: { con: 'AuthorController', action: 'store' },
          },
        ]
      }
    ]   
  },
    {
        id: "book-store",
        icon: "iconsminds-bank",
        label: "menu.book-store",
        to: `${adminRoot}/book-store`,
        meta: { con: 'BookTypeController', action: 'index' },
        subs: [
            {
                icon: "simple-icon-list",
                label: "menu.list",
                to: `${adminRoot}/book-store/default`,
                meta: { con: 'BookTypeController', action: 'index' },
            },
            {
                icon: "simple-icon-magnifier-add",
                label: "menu.add-new",
                to: `${adminRoot}/book-store/add`,
                meta: { con: 'BookTypeController', action: 'store' },
            },
            {
                icon: "iconsminds-add-cart",
                label: "Add by CODE",
                to: `${adminRoot}/book-store/add-by-code`,
                meta: { con: 'BookTypeController', action: 'store' },
            },
            {
                icon: "iconsminds-add-cart",
                label: "Income orders",
                to: `${adminRoot}/book-store/warehouse`,
                meta: { con: 'BookTypeController', action: 'store' },
            },
        ]
    },
  {
    id: "order",
    icon: "iconsminds-basket-coins",
    label: "menu.order",
    to: `${adminRoot}/order`,
    meta: { con: 'PaymentController', action: 'index' },
    subs: [
      {
        icon: "simple-icon-list",
        label: "createBook.CreateOrder",
        to: `${adminRoot}/order/create`,
        meta: { con: 'PaymentController', action: 'index' },
      },
      {
        icon: "simple-icon-list",
        label: "menu.list",
        to: `${adminRoot}/order/default`,
        meta: { con: 'PaymentController', action: 'index' },
      },
      {
        icon: "simple-icon-list",
        label: "menu.uzcard",
        to: `${adminRoot}/order/uzcard`,
        meta: { con: 'PaymentController', action: 'uzcard' },
      },
      {
        icon: "simple-icon-magnifier-add",
        label: "menu.add-new",
        to: `${adminRoot}/order/add-card`,
        meta: { con: 'PaymentController', action: 'token' },
      },
      {
        icon: "simple-icon-magnifier-add",
        label: "menu.pay",
        to: `${adminRoot}/order/pay`,
        meta: { con: 'PaymentController', action: 'uzcardList' },
      },
      {
        icon: "simple-icon-list",
        label: "menu.pay",
        to: `${adminRoot}/order/my-invoice`,
        meta: { con: 'PaymentController', action: 'uzcardList' },
      }
    ]
  },
  {
    id: "balance",
    icon: "iconsminds-dollar",
    label: "menu.balance",
    to: `${adminRoot}/balance`,
    meta: { con: 'BalanceController', action: 'index' },
  },
  {
    id: "user",
    icon: "simple-icon-people",
    label: "menu.user",
    to: `${adminRoot}/user`,
    meta: { con: 'UserController', action: 'index' },
    subs: [
      {
        icon: "simple-icon-list",
        label: "menu.list",
        to: `${adminRoot}/user/default`,
        meta: { con: 'UserController', action: 'index' },
      },
      {
        icon: "simple-icon-magnifier-add",
        label: "menu.add-new",
        to: `${adminRoot}/user/add`,
        meta: { con: 'UserController', action: 'createUser' },
      },
    ]
  },
  {
    id: "license",
    icon: "simple-icon-people",
    label: "menu.license",
    to: `${adminRoot}/license`,
    meta: { con: 'UserController', action: 'index' },
    subs: [
      {
        icon: "simple-icon-list",
        label: "menu.list",
        to: `${adminRoot}/license/default`,
        meta: { con: 'UserController', action: 'index' },
      }
    ]
  },
  {
    id: "settings",
    icon: "simple-icon-settings",
    label: "menu.settings",
    to: `${adminRoot}/settings`,
    meta: { con: 'RoleController', action: 'index' },
    subs: [
      {
        id: "role",
        icon: "iconsminds-anchor",
        label: "menu.role",
        to: `${adminRoot}/role`,
        meta: { con: 'RoleController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/role/default`,
            meta: { con: 'RoleController', action: 'index' },
          }
        ]
      },
      {
        id: "controller",
        icon: "iconsminds-anchor",
        label: "menu.controller",
        to: `${adminRoot}/controller`,
        meta: { con: 'ContsController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/controller/default`,
            meta: { con: 'ContsController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/controller/add`,
            meta: { con: 'ContsController', action: 'store' },
          },
        ]
      },
      {
        id: "action",
        icon: "iconsminds-anchor",
        label: "menu.action",
        to: `${adminRoot}/action`,
        meta: { con: 'ActionController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/action/default`,
            meta: { con: 'ActionController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/action/add`,
            meta: { con: 'ActionController', action: 'store' },
          },
        ]
      },
      {
        id: "faq",
        icon: "iconsminds-anchor",
        label: "menu.faq",
        to: `${adminRoot}/faq`,
        meta: { con: 'FaqController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/faq/default`,
            meta: { con: 'FaqController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/faq/add`,
            meta: { con: 'FaqController', action: 'store' },
          },
        ]
      },
      {
        id: "knowledge",
        icon: "iconsminds-anchor",
        label: "menu.knowledge",
        to: `${adminRoot}/knowledge`,
        meta: { con: 'KnowledgeController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/knowledge/default`,
            meta: { con: 'KnowledgeController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/knowledge/add`,
            meta: { con: 'KnowledgeController', action: 'store' },
          },
        ]
      },
    ]
  },

  {
    id: "tickets",
    icon: "iconsminds-check",
    label: "menu.ticket",
    to: `${adminRoot}/ticket`,
    meta: { con: 'TicketController', action: 'index' },
    subs: [
      {
        id: "ticket",
        icon: "iconsminds-dollar",
        label: "menu.list",
        to: `${adminRoot}/ticket/default`,
        meta: { con: 'TicketController', action: 'index' },
      },
      {
        id: "tcategory",
        icon: "iconsminds-dollar",
        label: "menu.tcategory",
        to: `${adminRoot}/tcategory`,
        meta: { con: 'TicketCategoryController', action: 'index' },
        subs: [
          {
            icon: "simple-icon-list",
            label: "menu.list",
            to: `${adminRoot}/tcategory/default`,
            meta: { con: 'TicketCategoryController', action: 'index' },
          },
          {
            icon: "simple-icon-magnifier-add",
            label: "menu.add-new",
            to: `${adminRoot}/tcategory/add`,
            meta: { con: 'TicketCategoryController', action: 'store' },
          },
        ]
      }
    ]
  },

];
export default data;
