
import rateLimit from 'express-rate-limit';

export const requestRateLimit = () => {
  return rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
}

export const isStringBlank = ( value: string ) => {
  return !value || !value.toString().trim() || /^[\s\b\0]+$/.test(value.toString());
}

export const isEmpty = ( value:any ) => {
  return ( value === null || value === undefined || value === '')
}

export const isValuesEmpty = ( values:any ) => {
  let result = false;
  for(let key in values){
      if( isEmpty(values[key]) ){
          result=true
      }
  }
  return result;
}