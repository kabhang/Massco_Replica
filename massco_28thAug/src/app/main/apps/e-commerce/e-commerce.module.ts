import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule,MatMenuModule,MatChipsModule, MatFormFieldModule, MatIconModule, 
MatInputModule,MatDatepickerModule,MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule, 
MatSortModule, MatTableModule, MatTabsModule,MatDialogModule,MatExpansionModule,MatCardModule,MatListModule,
MatToolbarModule,MatSlideToggleModule, MatStepperModule,MatTreeModule,MatProgressBarModule } from '@angular/material';


import { UIFormsModule } from 'app/main/ui/forms/forms.module';
import { UIIconsModule } from 'app/main/ui/icons/icons.module';
import { UITypographyModule } from 'app/main/ui/typography/typography.module';
import { UIHelperClassesModule } from 'app/main/ui/helper-classes/helper-classes.module';
import { UIPageLayoutsModule } from 'app/main/ui/page-layouts/page-layouts.module';
import { UIColorsModule } from 'app/main/ui/colors/colors.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';


import { EcommerceDashboardComponent } from 'app/main/apps/e-commerce/dashboard/dashboard.component';
import { EcommerceDashboardService } from 'app/main/apps/e-commerce/dashboard/dashboard.service';
import { EcommerceProductsComponent } from 'app/main/apps/e-commerce/products/products.component';
import { EcommerceProductsService } from 'app/main/apps/e-commerce/products/products.service';
import { EcommerceProductComponent } from 'app/main/apps/e-commerce/product/product.component';
import { EcommerceProductService } from 'app/main/apps/e-commerce/product/product.service';
import { EcommerceOrdersComponent } from 'app/main/apps/e-commerce/orders/orders.component';
import { EcommerceOrdersService } from 'app/main/apps/e-commerce/orders/orders.service';
import { TransactionService} from'./products/transaction/transaction.service';
import { EcommerceOrderComponent } from 'app/main/apps/e-commerce/order/order.component';
import { EcommerceOrderService } from 'app/main/apps/e-commerce/order/order.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectOverviewComponent } from './product/project-overview/project-overview.component';

import { DocumentComponent } from './product/document/document.component';
import {ProjectBudgetComponent} from './product/project-budget/project-budget.component'
import {DialogContentExample,DialogContentExampleDialog} from'./product//dialog-content/dialog-content-example';
import {OverlayModule} from '@angular/cdk/overlay';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import {FormsComponent} from './forms/forms.component'
import { DistrictComponent } from './district/district.component';
import {DialogContactExample} from './products/dialog-contact/dialog-contact-example';


import { DialogLineItemExampleDialog} from'./products/products.component';
import { ProductNewComponent } from 'app/main/apps/e-commerce/product-new/product-new.component';
import { TransactionComponent,DialogContactExampleDialog,DialogAttachmentDialog } from './products/transaction/transaction.component';
import { AddNewComponent } from './products/add-new/add-new.component';
import {FormsOneComponent} from './products/formsOne/formsOne.component';
import { ContractNewComponent } from './contract-new/contract-new.component';
import { AmountTableComponent } from './amount-table/amount-table.component';
import { DialougeTableComponent } from './products/transaction/dialouge-table/dialouge-table.component';
import { AttachTableComponent } from './products/transaction/attach-table/attach-table.component';
import { AttachmentTreeComponent,DialogAddFolderDialog, DialogUploadFolderDialog, DialogDeleteFolderDialog, DialogMoveFolderDialog } from './attachment-tree/attachment-tree.component';
import { NotesComponent,DialogContentNotes } from './products/notes/notes.component';
import { DeleteAttachComponent } from './attachment-tree/delete-attach/delete-attach.component';
import { UploadFolderComponent } from './attachment-tree/upload-folder/upload-folder.component';
import { MoveFolderComponent } from './attachment-tree/move-folder/move-folder.component';
import { AssoAttachComponent } from './contract-new/asso-attach/asso-attach.component';
import { NOCComponent,DialogNocDialog } from './products/noc/noc.component';
import { ExpenseComponent, DialogAttDialog } from './products/expense/expense.component';




const routes: Routes = [
    {
        path     : 'dashboard',
        component: EcommerceDashboardComponent,
        resolve  : {
            data: EcommerceDashboardService
        }
    },

    {
        path     : 'district',
        component: DistrictComponent,
        // resolve  : {
        //     data: EcommerceDashboardService
        // }
    },
    {
        path     : 'products',
        component: EcommerceProductsComponent,
        resolve  : {
            data: EcommerceProductsService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'transaction',
        component: TransactionComponent,
        resolve  : {
            data: TransactionService
        }
    },
    {
        path     : 'contract-new',
        component: ContractNewComponent,
        // resolve  : {
        //     data: EcommerceProductsService
        // }
    },
    {
        path     : 'product-new',
        component: ProductNewComponent,
        // resolve  : {
        //     data: EcommerceProductsService
        // }
    },
    {
        path     : 'products/:id',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: EcommerceProductComponent,
        resolve  : {
            data: EcommerceProductService
        }
    },
    {
        path     : 'orders',
        component: EcommerceOrdersComponent,
        resolve  : {
            data: EcommerceOrdersService
        }
    },
    {
        path     : 'orders/:id',
        component: EcommerceOrderComponent,
        resolve  : {
            data: EcommerceOrderService
        }
    }
];

@NgModule({
    declarations: [
        EcommerceDashboardComponent,
        EcommerceProductsComponent,
        EcommerceProductComponent,
        EcommerceOrdersComponent,
        EcommerceOrderComponent,
        ProjectOverviewComponent,
        DistrictComponent,
        DocumentComponent,
        ProjectBudgetComponent,
        DialogContentExample,DialogContentExampleDialog,
        DialogContactExample,DialogContactExampleDialog,DialogAttachmentDialog,
        DialogUploadFolderDialog, DialogDeleteFolderDialog, DialogMoveFolderDialog,
        AssoAttachComponent,
        DialogContentNotes,
        DialogAddFolderDialog,
        DialogLineItemExampleDialog,
        AddNewContactComponent,
        FormsComponent,
        ProductNewComponent,
        TransactionComponent,
        AddNewComponent,
        FormsOneComponent,
        ContractNewComponent,
        AmountTableComponent,
        DialougeTableComponent,
        AttachTableComponent,
        AttachmentTreeComponent,
        NotesComponent,
        DeleteAttachComponent,
        UploadFolderComponent,
        MoveFolderComponent,
        NOCComponent,DialogNocDialog,
        ExpenseComponent,DialogAttDialog
      
        
       
    ],
    imports: [
        RouterModule.forChild(routes),
        MatExpansionModule,
        MatButtonModule,
        MatMenuModule,
        MatChipsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatTreeModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatStepperModule,
        MatCardModule,
        MatSelectModule,
        MatSortModule,
        UIFormsModule,
        UIIconsModule,
        MatProgressBarModule,
        UITypographyModule,
        UIHelperClassesModule,
        UIPageLayoutsModule,
        UIColorsModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatTableModule,
        MatTabsModule,
        MatListModule,
        MatGridListModule,
        MatSlideToggleModule,
        MatDialogModule,
        OverlayModule,
        MatToolbarModule,
        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule,
    ],
    entryComponents: [DialogContentExample, DialogContentExampleDialog,DialogContactExample,DialogContactExampleDialog,DialogLineItemExampleDialog,DialogAttachmentDialog,DialogContentNotes,DialogAddFolderDialog,DialogUploadFolderDialog, DialogDeleteFolderDialog, DialogMoveFolderDialog,DialogNocDialog,DialogAttDialog],  
      providers   : [
        EcommerceDashboardService,
        EcommerceProductsService,
        EcommerceProductService,
        EcommerceOrdersService,
        EcommerceOrderService,
        TransactionService
    ]
})
export class EcommerceModule
{
}