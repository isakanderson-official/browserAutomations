

// Input selector of table you would like to target
const tableSelector = 'download-reports-financial-page > console-block-1-column:nth-child(3) > div > div > download-reports-table'

// Input Row Selector, this would usually stay the same
const rowSelector = ' .particle-table-row'


const selector = tableSelector + rowSelector;

const arrayOfElements = [...document.querySelectorAll(selector)]
console.log(arrayOfElements.map(e=>e.textContent))

let i = 0
let interval = setInterval(()=> {
    if(i > arrayOfElements.length){
        clearInterval(interval);
        console.log('Done!')
    }
    func(i)
    
    i++;
}, 1200)

 const func = (i) =>{
const el = arrayOfElements[i];
     console.log(i,el)
try{
if(el.textContent.includes('arrow_right')){
      
    el.querySelector('button').click()
  
    }else{
       
        const downloadBtn = el.querySelector('console-table-download-cell a');
        downloadBtn.click()
        console.log('clicked')
            
        
    }
    catch(err){
    console.eror(err)
    }
 }
