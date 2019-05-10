import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { TemplateServerComponent } from './_template/template-server/template-server.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { PageAdminLoginComponent } from './page-admin-login/page-admin-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { RouterModule } from '@angular/router';
import { PageAdminServerListComponent } from './page-admin-server-list/page-admin-server-list.component';
import { PageAdminUserListComponent } from './page-admin-user-list/page-admin-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAdminComponent,
    TemplateServerComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    PageAdminLoginComponent,
    PageHomeComponent,
    PageNotfoundComponent,
    PageAdminServerListComponent,
    PageAdminUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: PageHomeComponent },
      { 
        path: 'admin', 
        component: PageAdminComponent, 
        children: [ 
          { path: 'server-list', component: PageAdminServerListComponent }, 
          { path: 'user-list', component: PageAdminUserListComponent }  
        ] 
      },
      { path: 'admin/login', component: PageAdminLoginComponent },
      { path: '**', component: PageNotfoundComponent }
    ])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
