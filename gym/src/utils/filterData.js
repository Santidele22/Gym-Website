export const filterData = (arr,key,value) => arr.filter(e => e[key].includes(value))
export const filterCategories = (arr,key) =>{
     const uniqueCategories = [...new Set(arr.map(obj => obj[key]))];
     return uniqueCategories;
}