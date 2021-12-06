import { calculateBiorhythm } from "../../../biorhythm-calculator/src/calculations";

it('Calculates the Physical ' , () =>{
   const {Physical} = calculateBiorhythm ('1979-09-30','2021-08-26');
   expect(Physical).toBeCloseTo(0.1362);
});

it('Calculates the Emotional ' , () =>{
    const {Emotional} = calculateBiorhythm ('1979-09-30','2021-08-26');
    expect(Emotional).toBeCloseTo(-0.7818);
 });

 it('Calculates the Intellectual ' , () =>{
    const {Intellectual} = calculateBiorhythm ('1979-09-30','2021-08-26');
    expect(Intellectual).toBeCloseTo(-0.9096);
 });