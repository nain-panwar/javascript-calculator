let result = document.querySelector('.result input')

      function addInput(buttonValue){
          result.value += buttonValue
      }

      function allClear(){
          result.value = ''
      }

      function showResult(){   
          try{
              result.value = eval(result.value)
          }catch(error){
              result.value = 'Wrong Input'
          }
      }   
