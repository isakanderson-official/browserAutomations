

// Input selector of table you would like to target
const tableSelector = 'download-reports-financial-page > console-block-1-column:nth-child(3) > div > div > download-reports-table'

// Input Row Selector, this would usually stay the same
const rowSelector = ' .particle-table-row'

const selector = tableSelector + rowSelector;

let arrayOfElements = [...document.querySelectorAll(selector)]

console.log('Loading...')
// Expands all rows
arrayOfElements.forEach((i)=>{
    try{
    if(i.textContent.includes('arrow_right')){
        i.querySelector('button').click()
        }
    }catch(err){}
})

// Wait to gather new rows
setTimeout(()=>{
console.log('Done Loading! Downloads starting...')
arrayOfElements = [...document.querySelectorAll(selector)]
    
let i = 0
let interval = setInterval(()=> {
    if(i == arrayOfElements.length){
        clearInterval(interval);
        console.log('Done!')
    }
    // Runs download function at current index
    downloadFunc(i)
    i++;
}, 1200)

 const downloadFunc = (i) =>{
const el = arrayOfElements[i];
    try{
        const downloadBtn = el.querySelector('console-table-download-cell a');
        downloadBtn.click()
        console.log('Clicked',el.textContent,'✅')
        }
        catch(err){}
        }
    },3000)
