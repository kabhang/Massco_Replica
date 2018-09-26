import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : '_District',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Series A',
                        type : 'item',
                        url  : '/apps/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id   : 'project',
                        title: 'Project',
                        type : 'item',
                        url  : '/apps/calendar',
                        exactMatch: true
                       
                     }
                ]
            },         
          

            {
                id       : 'e-commerce',
                title    : 'Anaheim',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'today',
                children : [
                    {
                        id   : 'dashboard',
                        title: '5th Floor CTE & 2nd Floor Room 215',
                        type : 'item',
                        url  : '/apps/calendar'
                    },
                    {
                        id        : 'products',
                        title     : '7th and 10th Floors Buildout',
                        type      : 'item',
                        url       : '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Mass Communications & Security Systems Upgrade',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Planning-AC (Non Project Specific)',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Reactivate 1st Floor Warehouse Areas for Storage',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    }
                ]
            },


            {
                id       : 'e-commerce',
                title    : 'Anaheim',
                translate: 'NAV.ECOMMERCE',
                type     : 'item',
                icon     : 'today',
            },
            {
                id       : 'e-commerce',
                title    : 'Cypress',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id   : 'dashboard',
                        title: 'Central Plant / TES',
                        type : 'item',
                        url  : '/apps/calendar'
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Library-Learning Resource Center Expansion',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Mass Communications & Security Systems Upgrade',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'New Science, Engineering, and Mathematics Building',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'New Veterans Resource Center & Student Activities Center Expansion',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'New Veterans Resource Center & Student Activities Center Expansion',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Planning-CC (Non Project Specific)',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Swing Space Projects',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    } ,
                    {
                        id        : 'orderDetail',
                        title     : 'Update/Improve Infrastructure',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Veterans Memorial Bridge',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    }   
                ]
            },
            {
                id       : 'academy',
                title    : 'Fullerton',
                translate: 'NAV.ACADEMY',
                type     : 'collapsable',
                icon     : 'school',
                children : [
                    {
                        id   : 'dashboard',
                        title: 'Central Plant / TES',
                        type : 'item',
                        url  : '/apps/calendar'
                    },
                    {
                        id        : 'products',
                        title     : 'Library-Learning Resource Center Expansion',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Mass Communications & Security Systems Upgrade',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'New Science, Engineering, and Mathematics Building',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'New Veterans Resource Center & Student Activities Center Expansion',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'New Veterans Resource Center & Student Activities Center Expansion',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Planning-CC (Non Project Specific)',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Swing Space Projects',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Update/Improve Infrastructure',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Veterans Memorial Bridge',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    }   
                ]
            },
            {
                id       : 'academy',
                title    : 'Administration',
                translate: 'NAV.ACADEMY',
                type     : 'collapsable',
                icon     : 'school',
                children : [
                    {
                        id   : 'dashboard',
                        title: 'My Settings',
                        type : 'item',
                        url  : '/apps/e-commerce/orders'
                    },
                    {
                        id        : 'products',
                        title     : 'Maintain District Bond Website Info',
                        type      : 'item',
                        url       : '/apps/e-commerce/maintainDistrict',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'CM/DM Report Notes',
                        type      : 'item',
                        url       : '/apps/e-commerce/ReportNotes',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Table Maintenance',
                        type      : 'collapsable',                
                         children:[
                        {
                            id        : 'productDetail',
                            title     : 'Object Codes',
                            type      : 'item',
                            url       : '/apps/e-commerce/ObjectCode',
                            exactMatch: true
                        },
                        {
                            id        : 'productDetail',
                            title     : 'Project',
                            type      : 'collapsable',
                           children:[
                            {
                                id        : 'productDetail',
                                title     : 'Activity Code',
                                type      : 'item',
                                url       : '/apps/e-commerce/AcivityMode',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'BondFundCategory',
                                type      : 'item',
                                url       : '/apps/e-commerce/BoundFund',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'BondSeriesNumber',
                                type      : 'item',
                                url       : '/apps/e-commerce/BoundSeries',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Category',
                                type      : 'item',
                                url       : '/apps/e-commerce/category',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'CBOC_CutoffDates',
                                type      : 'item',
                                url       : '/apps/e-commerce/CutoffDates',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Phase',
                                type      : 'item',
                                url       : '/apps/e-commerce/phase',
                                exactMatch: true
                            }
                           ]
                        },
                        {
                            id        : 'productDetail',
                            title     : 'Contractors',
                            type      : 'collapsable', 
                            children:[
                                {
                                    id        : 'productDetail',
                                    title     : 'ContractorType',
                                    type      : 'item',
                                    url       : '/apps/e-commerce/contractType',
                                    exactMatch: true
                                }
                            ]
                        },
                        {
                            id        : 'productDetail',
                            title     : 'Contacts',
                            type      : 'collapsable',
                            children:[
                                {
                                    id        : 'productDetail',
                                    title     : 'Surety',
                                    type      : 'item',
                                    url       : '/apps/e-commerce/Surety',
                                    exactMatch: true
                                }
                            ]                            
                        },
                        {
                            id        : 'productDetail',
                            title     : 'Amendments/COs',
                            type      : 'collapsable',
                            children:[
                                {
                                    id        : 'productDetail',
                                    title     : 'Category',
                                    type      : 'item',
                                    url       : '/apps/e-commerce/ReportNotes',
                                    exactMatch: true
                                },
                                {
                                    id        : 'productDetail',
                                    title     : 'DetailType',
                                    type      : 'item',
                                    url       : '/apps/e-commerce/ReportNotes',
                                    exactMatch: true    
                                }

                            ]
                            
                        },
                       ]
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'District Settings (Current District)',
                        type      : 'collapsable',
                        children:[
                            {
                                id        : 'productDetail',
                                title     : 'Tab Visibility',
                                type      : 'item',
                                url       : '/apps/e-commerce/tabVisibility',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Widget Visbility',
                                type      : 'item',
                                url       : '/apps/e-commerce/widgetVisibility',
                                exactMatch: true    
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Menu Visibility',
                                type      : 'item',
                                url       : '/apps/e-commerce/menuVisibility',
                                exactMatch: true    
                            }                        

                        ]
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'System Settings',
                        type      : 'collapsable',
                        children:[
                            {
                                id        : 'productDetail',
                                title     : 'Tab Visibility',
                                type      : 'item',
                                url       : '/apps/e-commerce/tabVisibility',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Widget Visbility',
                                type      : 'item',
                                url       : '/apps/e-commerce/widgetVisibility',
                                exactMatch: true    
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Menu Visibility',
                                type      : 'item',
                                url       : '/apps/e-commerce/menuVisibility',
                                exactMatch: true    
                            }                        

                        ]
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Maintain Clients/Districts/Colleges',
                        type      : 'item',
                        url       : '/apps/e-commerce/maintainClient',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Maintain Users',
                        type      : 'item',
                        url       : '/apps/e-commerce/maintainUser',
                        exactMatch: true
                    } ,
                    {
                        id        : 'orderDetail',
                        title     : 'Maintain User Roles',
                        type      : 'item',
                        url       : '/apps/e-commerce/maintainUserRole',
                        exactMatch: true
                    }   ,
                    {
                        id        : 'orderDetail',
                        title     : 'Maintain Help Files',
                        type      : 'item',
                        url       : '/apps/e-commerce/MaintainHelp',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Maintain Reports',
                        type      : 'item',
                        url       : '/apps/e-commerce/maintainReport',
                        exactMatch: true
                    },      
                    {
                        id        : 'orderDetail',
                        title     : 'Update Prompt Announcement',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'System Utilities',
                        type      : 'item',
                        url       : '/apps/e-commerce/systeamUtilities',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Workflow Settings',
                        type      : 'collapsable',
                        children:[
                            {
                                id        : 'productDetail',
                                title     : 'Maintain Workflow Roles',
                                type      : 'item',
                                url       : '/apps/e-commerce/MaintainWorkflow',
                                exactMatch: true
                            },
                            {
                                id        : 'productDetail',
                                title     : 'Maintain Workflow Scenerios',
                                type      : 'item',
                                url       : '/apps/e-commerce',
                                exactMatch: true    
                            },
                            {
                                id        : 'productDetail',
                                title     : 'View Transaction Import Batch Log',
                                type      : 'item',
                                url       : '/apps/e-commerce',
                                exactMatch: true    
                            }                        

                        ]
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'User Activity Report',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Test Report Viewer',
                        type      : 'item',
                        url       : '/apps/calendar',
                        exactMatch: true
                    },
                ]
            },           
            
            {
                id       : 'calendar',
                title    : 'Dashboard',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : 'apps/dashboards/analytics'
            },
            {
                id       : 'calendar',
                title    : 'District Overview',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/e-commerce/district/'
            },
            {
                id       : 'calendar',
                title    : 'Contacts',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/e-commerce/contacts'
            },
            {
                id       : 'calendar',
                title    : 'Companies',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/e-commerce/companies'
            },
            {
                id       : 'calendar',
                title    : 'Reports',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            },
            {
                id       : 'calendar',
                title    : 'Forms',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            },
            {
                id       : 'calendar',
                title    : 'Procedures & Guidelines',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            },
            {
                id       : 'calendar',
                title    : 'Administration',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            }
        ]
    }

    
];
