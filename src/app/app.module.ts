/*
Importar los Modulos que se van utilizando 
*/ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Routing/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/*
Importar los componentes que voy creando
*/ 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFounfComponent } from './Components/page-not-founf/page-not-founf.component';
import { MaterialNavComponent } from './Components/material-nav/material-nav.component';
import { MatTableComponent } from './Components/mat-Table/mat-table/mat-table.component';
import { ExampleService } from './Services/example.service';
import { AgePipe } from './Pipes/age.pipe';
import { StudentsComponent } from './Components/students/students.component';
import { StaffComponent } from './Components/staff/staff.component';
import { ImagesPipe } from './Pipes/images.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFounfComponent,
    MaterialNavComponent,
    MatTableComponent,
    AgePipe,
    StudentsComponent,
    StaffComponent,
    ImagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
