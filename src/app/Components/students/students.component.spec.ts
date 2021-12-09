import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
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
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatInputModule, MatNativeDateModule, MatCardModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [ StudentsComponent, ImagesPipe, AgePipe ],
      providers: [ExampleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('Prueba Metodos addStudent', () => {
    
  //   component.addForm.controls['name'].setValue('Harry');
  //   component.addForm.controls['species'].setValue('Human');
  //   component.addForm.controls['gender'].setValue('Male');
  //   component.addForm.controls['house'].setValue('Gryffindor');
  //   component.addForm.controls['dateOfBirth'].setValue('1995-12-12');
  //   component.addForm.controls['yearOfBirth'].setValue('1995');
  //   component.addForm.controls['wizard'].setValue(true);
  //   component.addForm.controls['ancestry'].setValue('Half-Blood');
  //   component.addForm.controls['eyeColour'].setValue('Brown');
  //   component.addForm.controls['hairColour'].setValue('Yellow');
  //   component.addForm.controls['wand'].setValue('Nogal');
  //   component.addForm.controls['patronus'].setValue('Lion');
  //   component.addForm.controls['hogwartsStudent'].setValue(true);
  //   component.addForm.controls['hogwartsStaff'].setValue(false);
  //   component.addForm.controls['actor'].setValue('Daniel');
  //   component.addForm.controls['alive'].setValue(true);
  //   component.addForm.controls['image'].setValue('');
    
  //   component.dataApi = [];

  //   component.addStudent();

  //   localStorage.setItem('usuario', JSON.stringify([
  //     {
  //       "name": "PEDRO",
  //       "species": "Human",
  //       "gender": "male",
  //       "house": "slytherin",
  //       "dateOfBirth": "1899-11-11",
  //       "yearOfBirth": "1899",
  //       "wizard": true,
  //       "ancestry": "half-blood",
  //       "eyeColour": "s",
  //       "hairColour": "s",
  //       "wand": "A",
  //       "patronus": "a",
  //       "hogwartsStudent": true,
  //       "hogwartsStaff": false,
  //       "actor": "a",
  //       "alive": true,
  //       "image": ""
  //     }
  //   ]));

  //   console.log(localStorage.getItem('usuario'));

  //   expect(localStorage.getItem('usuario')).not.toBeNull;

  // })


  it('Prueba activateFormControl True Path', () => {

    const dataSourceSolicitudes = new MatTableDataSource();
    
    localStorage.setItem('usuario', null);

    component.edited = true;

    component.activateFormControl();

    expect(component.edited).toBe(false);

  })

  
  it('Prueba activateFormControl false Path', () => {

    const dataSourceSolicitudes = new MatTableDataSource();
    
    localStorage.setItem('usuario', null);

    component.edited = false;

    component.activateFormControl();

    expect(component.edited).toBe(true);

  })
 
  it('Prueba onselectFile', () => {

    const blob = new Blob();

    const _file = new File([blob],'image.png',);
    
    let e = {
      target:{
        files : [_file]
      }
    } 

    component.onselectFile(e);


    expect(component.Blob).not.toBeNull();

  })





});
