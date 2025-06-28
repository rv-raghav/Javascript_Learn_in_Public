const form = document.querySelector('form')
// This use case will give u empty value
   // const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault() //to prevent submit and reload of form

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'please give a valid height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'please give a valid weight';
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<p>BMI =<span>${bmi}</span></p>`
    }

});