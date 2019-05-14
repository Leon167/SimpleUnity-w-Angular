import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TemplateServerComponent } from './_template/template-server/template-server.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { TemplateFooterComponent } from './_template/template-footer/template-footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AdminServerListComponent } from './admin/admin-server-list/admin-server-list.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AdminAddUserComponent } from './admin/admin-add-user/admin-add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TemplateServerComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    AdminLoginComponent,
    HomeComponent,
    NotFoundComponent,
    AdminServerListComponent,
    AdminUserListComponent,
    AdminAddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { 
        path: 'admin', 
        component: AdminComponent, 
        children: [ 
          { path: 'server-list', component: AdminServerListComponent }, 
          { path: 'user-list', component: AdminUserListComponent }, 
          { path: 'add-user', component: AdminAddUserComponent }  
        ] 
      },
      { path: 'admin/login', component: AdminLoginComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
