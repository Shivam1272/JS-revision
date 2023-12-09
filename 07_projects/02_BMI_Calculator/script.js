const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const heightValue = parseInt(document.querySelector('#height').value)
    const weightValue = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')
    
    if(heightValue === '' || heightValue < 0 || isNaN(heightValue)){
        res.innerHTML = `Please provide valid height`
    }else if(weightValue === '' || weightValue < 0 || isNaN(weightValue)){
        res.innerHTML = `Please provide valid weight`
    }else{
        const bmi = (weightValue / ((heightValue**2)/10000)).toFixed(2);
        res.innerHTML = `<span>${bmi}</span>`
    }
})