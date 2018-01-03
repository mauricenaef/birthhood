import {Experience} from './experience-form-data'; 

describe('Class: Experience', () => { 
    let experience: Experience;


  it('should calculate the correct distance', () => { 
    experience = new Experience;
    experience.birth_name = "test";
    experience.clear();
    expect(experience.birth_name).toBe(''); 
  });
});