import { SortbyPipe } from './sortby.pipe';

fdescribe('SortbyPipe', () => {
  it('create an instance', () => {
    const pipe = new SortbyPipe();
    expect(pipe).toBeTruthy();
  });

  it('providing no value returns fallback', () => {
    const pipe = new SortbyPipe();
    const inputarray = [
      {
        name: "b"
      },{
        name: "c"
      },{
        name: "a"
      }
    ]
    const outputarray = [
      {
        name: "a"
      },{
        name: "b"
      },{
        name: "c"
      }
    ]
    expect(pipe.transform(inputarray, 'name')[0].name).toBe(outputarray[0].name);
    expect(pipe.transform(inputarray, 'name')[1].name).toBe(outputarray[1].name);
    expect(pipe.transform(inputarray, 'name')[2].name).toBe(outputarray[2].name);
  });
});
