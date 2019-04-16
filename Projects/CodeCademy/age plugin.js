const howOld = (age, year)=>{
  const currentYear = 2019;
  if (year>currentYear){
    return ("You will be "+(age+(year-currentYear))+" in the year "+year);
  }
  else if ((currentYear-year)>age){
    return ("the year "+year+" was "+((currentYear-year)-age)+" years before you were born")
  }
 else if ((currentYear-year)<age){
   return ("You were "+(age-(currentYear-year))+" in the year "+year)
 } 
};
console.log(howOld(19, 2028))