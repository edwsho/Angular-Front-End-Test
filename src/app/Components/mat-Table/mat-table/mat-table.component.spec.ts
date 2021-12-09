import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableComponent } from './mat-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleService } from 'src/app/Services/example.service';
import { ImagesPipe } from 'src/app/Pipes/images.pipe';
import { AgePipe } from 'src/app/Pipes/age.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('MatTableComponent', () => {
  let component: MatTableComponent;
  let fixture: ComponentFixture<MatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatInputModule, MatNativeDateModule, MatCardModule, HttpClientTestingModule ],
      declarations: [ MatTableComponent, ImagesPipe, AgePipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('API CALL SUCCESS', () => {

    let house = 'gryffindor';
    
    component.getfromJson(house);

    expect(component.dataSource).not.toBeNull;
  });

  


});
