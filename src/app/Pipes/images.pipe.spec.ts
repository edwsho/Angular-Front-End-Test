import { ImagesPipe } from './images.pipe';

fdescribe('ImagesPipe', () => {
  it('create an instance', () => {
    const pipe = new ImagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Image Transform if path', () => {

    const pipe = new ImagesPipe();
    
    let value =  pipe.transform("");
    
    expect(value).toEqual("/assets/Imagennodisponible.png");
  });

  it('Image Transform else path', () => {

    const pipe = new ImagesPipe();
    
    let value =  pipe.transform("/assets/Imagennodisponible.png");
    
    expect(value).toEqual("/assets/Imagennodisponible.png");
  });
  


});
