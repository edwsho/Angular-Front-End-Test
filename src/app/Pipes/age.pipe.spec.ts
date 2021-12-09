import { AgePipe } from './age.pipe';

fdescribe('AgePipe', () => {
  it('create an instance', () => {
    const pipe = new AgePipe();
    expect(pipe).toBeTruthy();
  });


  it('Get Age of a date US Format', () => {
    const pipe = new AgePipe();
    
    let date = "1995-07-22";

    let value =  pipe.transform(date);

    expect(value).toEqual(26);

  });

  it('Get Age a - with', () => {
    const pipe = new AgePipe();
    let date = "";

    let value =  pipe.transform(date);

    expect(value).toEqual("-");

  });

  it('et Age of a date Latin Format', () => {
    const pipe = new AgePipe();
    
    let date = "22-07-1995";

    let value =  pipe.transform(date);

    expect(value).toEqual(26);

  });

});
