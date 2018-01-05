import {Experience} from './experience-form-data'; 

describe('Class: Experience', () => { 
    let experience: Experience;


  it('should clear values', () => { 
    experience = Object.create(Experience.prototype);
    experience.birth_name = "test";
    experience.clear();
    expect(experience.birth_name).toBe(''); 
  });

  it('should calculate average score correctly', () => { 
    experience = Object.create(Experience.prototype);
    experience.w1 = 1;
    experience.w2 = 2;
    experience.w3 = 3;
    experience.w4 = 4;
    experience.w5 = 5;
    expect(experience.score_w).toBe(3); 
  });

  it('should calculate average score with null values correctly', () => { 
    experience = Object.create(Experience.prototype);
    experience.m1 = 1;
    expect(experience.score_m).toBe(0.2); 
  });
});