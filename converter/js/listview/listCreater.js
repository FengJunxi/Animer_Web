const mAnimatorDataSet = {
  "platform": [
      {
      "id": 0,
      "type": "Android",
      "subclass":[
          {
          "id": 0,
          "tag":0,
          "type": "Spring",
          "calculator":"SpringAnimationCalculator",
          "animation_data":["Stiffness:",1500,0,3000,"Damping:",0.5,0.01,1,"Velocity",0,0,500]
          },
          {
          "id": 1,
          "tag":1,
          "type": "Fling",
          "calculator":"FlingAnimationCalculator",
          "animation_data":["Velocity:",-4000,-5000,5000,"Damping:",0.8,0.01,10]
          },
          {
          "id": 2,
          "type": "Divide"
          },
          {
          "id": 3,
          "tag":2,
          "type": "AccelerateDecelerate",
          "calculator":"InterpolatorCalculator",
          "animation_data":[null]
          },
          {
          "id": 4,
          "tag":3,
          "type": "Accelerate",
          "calculator":"InterpolatorCalculator",
          "animation_data":["Factor:",2,0,5]
          },
          {
          "id": 5,
          "tag":4,
          "type": "Decelerate",
          "calculator":"InterpolatorCalculator",
          "animation_data":["Factor:",2,0,5]
          },
          {
          "id": 6,
          "tag":5,
          "type": "Anticipate",
          "calculator":"InterpolatorCalculator",
          "animation_data":["Factor:",2,0,5]
          },
          {
          "id": 7,
          "tag":6,
          "type": "Overshoot",
          "calculator":"InterpolatorCalculator",
          "animation_data":["Factor:",2,0,5]
          },
          {
          "id": 8,
          "tag":7,
          "type": "AnticipateOvershoot",
          "calculator":"InterpolatorCalculator",
          "animation_data":["Factor:",2,0,5]
          },
          {
          "id": 9,
          "tag":8,
          "type": "Bounce",
          "calculator":"InterpolatorCalculator",
          "animation_data":[null]
          },
          {
          "id": 10,
          "tag":9,
          "type": "Cycle",
          "calculator":"InterpolatorCalculator",
          "animation_data":["Factor:",2,0,5]
          },
          {
          "id": 11,
          "tag":10,
          "type": "Linear",
          "calculator":"InterpolatorCalculator",
          "animation_data":[null]
          },
          {
          "id": 12,
          "type": "Divide"
          },
          {
          "id": 13,
          "tag":11,
          "type": "FastOutSlowIn",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.40, 0.00, 0.20, 1.00]
          },
          {
          "id": 14,
          "tag":12,
          "type": "LinearOutSlowIn",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.00, 0.00, 0.20, 1.00]
          },
          {
          "id": 15,
          "tag":13,
          "type": "FastOutLinear",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.40, 0.00, 1.00, 1.00]
          }
          ,{
          "id": 16,
          "type": "Divide"
          },
          {
          "id": 17,
          "tag":14,
          "type": "CustomMocosSpring",
          "calculator":"CustomMocosSpringCalculator",
          "animation_data":["Tension:", 100, 0, 200,"Friction:",15,0,100,"Velocity:",0,0,1000]
          },
          {
          "id": 18,
          "tag":15,
          "type": "CustomSpring",
          "calculator":"CustomSpringCalculator",
          "animation_data":["Factor:", 0.5, 0, 5]
          },
          {
          "id": 19,
          "tag":16,
          "type": "CustomBounce",
          "calculator":"CustomBounceCalculator",
          "animation_data":["Tension:", 0, 0, 100,"Friction:",0,0,10]
          },
          {
          "id": 20,
          "tag":17,
          "type": "CustomDamping",
          "calculator":"CustomDampingCalculator",
          "animation_data":["Tension:", 0, 0, 100,"Friction:",0,0,10]
          }
      ]
      },
      {
      "id": 1,
      "type": "iOS",
      "subclass":[
          {
          "id": 0,
          "tag":18,
          "type": "UIViewSpring",
          "calculator":"SpringAnimationCalculator",
          "converter":"UIViewSpringConverter",
          "animation_data":["Damping:", 0.5, 0, 1,"Duration:",0.5,0,1]
          },
          {
          "id": 1,
          "tag":18,
          "type": "CASpring",
          "calculator":"SpringAnimationCalculator",
          "converter":"FramerDHOConverter",
          "animation_data":["Stiffness:", 100, 0, 1000,"Damping:",10,0,100,"Mass:",1,0,10,"Velocity:",0,0,1000]
          },
          {
          "id": 2,
          "type": "Divide"
          },
          {
          "id": 3,
          "tag":20,
          "type": "Linear",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.25, 0.25, 0.75, 0.75]
          },
          {
          "id": 4,
          "tag":21,
          "type": "Default",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.25, 0.10, 0.25, 1.00]
          },
          {
          "id": 5,
          "tag":22,
          "type": "EaseIn",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.42, 0.00, 1.00, 1.00]
          },
          {
          "id": 6,
          "tag":23,
          "type": "EaseOut",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.00, 0.00, 0.58, 1.00]
          },
          {
          "id": 7,
          "tag":24,
          "type": "EaseInOut",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.42, 0.00, 0.58, 1.00]
          }
      ]
      },
      {
      "id": 2,
      "type": "Web",
      "subclass":[
          {
          "id": 0,
          "tag":25,
          "type": "Linear",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.25, 0.25, 0.75, 0.75]
          },
          {
          "id": 1,
          "tag":26,
          "type": "Ease",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.25, 0.10, 0.25, 1.00]
          },
          {
          "id": 2,
          "tag":27,
          "type": "EaseIn",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.42, 0.00, 1.00, 1.00]
          },
          {
          "id": 3,
          "tag":28,
          "type": "EaseOut",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.00, 0.00, 0.58, 1.00]
          },
          {
          "id": 3,
          "tag":29,
          "type": "EaseInOut",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.42, 0.00, 0.58, 1.00]
          },
      ]
      },
      {
      "id": 3,
      "type": "Cubic Beizer",
      "subclass":[
          {
          "id": 0,
          "tag":30,
          "type": "Cubic Bezier",
          "calculator":"CubicBezierCalculator",
          "animation_data":[0.50, 0.00, 0.50, 1.00]
          }
      ]
      },
      {
      "id": 4,
      "type": "Design Tools",
      "subclass":[
          {
          "id": 0,
          "tag":31,
          "type": "Origami POP Spring",
          "calculator": "SpringAnimationCalculator",
          "converter": "OrigamiSpringConverter",
          "animation_data":["Bounciness:", 5, 0, 100,"Speed:",10,0,100]
          },
          {
          "id": 1,
          "tag":32,
          "type": "Framer RK4 Spring",
          "calculator": "SpringAnimationCalculator",
          "converter": "FramerRK4Converter",
          "animation_data":["Tension:", 200, 0, 1000,"Friction:",25,0,100]
          },
          {
          "id": 2,
          "tag":33,
          "type": "Framer DHO Spring",
          "calculator": "SpringAnimationCalculator",
          "converter": "FramerDHOConverter",
          "animation_data":["Stiffness:", 50, 0, 1000,"Damping:",2,0,100,"Mass:",1,0,10,"Velocity:",0,0,1000]
          },
          {
          "id": 3,
          "tag":34,
          "type": "Protopie Spring",
          "calculator": "SpringAnimationCalculator",
          "converter": "FramerRK4Converter",
          "animation_data":["Tension:", 300, 0, 1000,"Friction:",15,0,100]
          }
      ]
      }
  ]
}



function createAnimatorListView(canvas,listView,caculator,bezierController,bezierContainer,bezierInput,sliderContainer,applyBtn,timePara){

  var animatorTitleArray = [];
  var calculatorArray = [];
  var animationDataArray = [];
  var converterDataArray = [];
  var animationIndex = 0;


  // ######### Layout #########
  for (var i = 0; i < mAnimatorDataSet.platform.length; i++) {
    var platform = document.createElement('li');
    platform.className = 'animator-platform';

    var platformArrow = document.createElement('div');
    platformArrow.className = 'animator-platform-arrow';
    

    var platformTitle = document.createElement('a');
    platformTitle.className = 'animator-platform-title';
    platformTitle.href = "#"        
    platformTitle.innerHTML = mAnimatorDataSet.platform[i].type;


    platformTitle.addEventListener('click',function(e){
      //e.target.parentElement;
      if(e.target.nextSibling.style.display == 'none'){
        e.target.nextSibling.style.display = 'block';
        e.target.previousElementSibling.style.transform = 'translate3d(0px, 2px, 0px) rotate(90deg)'
      }
      else{
        e.target.nextSibling.style.display = 'none';
        e.target.previousElementSibling.style.transform = 'translate3d(0px, 2px, 0px) rotate(0deg)'
      }
    })


    var subUlElement = document.createElement('ul');
    subUlElement.className = "animator-type"
    subUlElement.style.display = 'none';


    for (var a = 0; a < mAnimatorDataSet.platform[i].subclass.length; a++) {
      if(mAnimatorDataSet.platform[i].subclass[a].type == 'Divide'){
        var divide = document.createElement('div');
        divide.className = 'animator-divide';
        subUlElement.appendChild(divide)

      }
      else{
        var animator = document.createElement('li');
        animator.className = 'animator';
    
        var animatorTitle = document.createElement('a');
        animatorTitle.className = 'animator-title';
        animatorTitle.href = "#"
        animatorTitle.innerHTML = mAnimatorDataSet.platform[i].subclass[a].type;
        animatorTitle.animIndex = animationIndex;
        animationIndex++;

        var currCalculator = mAnimatorDataSet.platform[i].subclass[a].calculator;
        var currAnimationData = mAnimatorDataSet.platform[i].subclass[a].animation_data;
        var currConverterData = mAnimatorDataSet.platform[i].subclass[a].converter;
        // var currType = mAnimatorDataSet.platform[i].subclass[a].type;

        animatorTitleArray.push(animatorTitle);
        calculatorArray.push(currCalculator);
        animationDataArray.push(currAnimationData);
        converterDataArray.push(currConverterData);

        animatorTitle.addEventListener('click',function(e){

          for (var b = 0; b < animatorTitleArray.length; b++) {
          
            if(b == e.target.animIndex){
              animatorTitleArray[b].style.color ='#029CFF'
              checkBezierContainer(calculatorArray[b],animatorTitleArray[b]);
              checkSliderContainer(calculatorArray[b]);
              updateCaculatorDataToSilder(calculatorArray[b],animationDataArray[b])
              selectCalculator(calculatorArray[b],animatorTitleArray[b],animationDataArray[b],converterDataArray[b])
              listSelectEstimatedPara(caculator,timePara)

            }
            else{
              animatorTitleArray[b].style.color ='white'
            }
          }
          document.getElementById("graph-title").innerHTML = (this).innerHTML

        })
    
        animator.appendChild(animatorTitle)
        subUlElement.appendChild(animator)
      }
    }

    platform.appendChild(platformArrow)
    platform.appendChild(platformTitle)

    if(mAnimatorDataSet.platform[i].subclass.length != 0){
      platform.appendChild(subUlElement);
    }

    listView.appendChild(platform)

  }
  // ######### Right Para #########
  function checkSliderContainer(calculatorType){
    apply_button.style.marginTop = (calculatorType == "CubicBezierCalculator")?'167px':'27px';
    sliderContainer.style.display = (calculatorType == "CubicBezierCalculator")?'none':'block';
  }

  function checkBezierContainer(calculatorType,animatorTitle){
    bezierInput.style.display = (calculatorType == "CubicBezierCalculator")?'block':'none';
    bezierContainer.style.display = (calculatorType == "CubicBezierCalculator")?'block':'none';

    bezierInput.readOnly = (animatorTitle.innerHTML == "Cubic Bezier")?false:true;
    bezierInput.style.color = (animatorTitle.innerHTML == "Cubic Bezier")?'white':'#A9A9A9';
    bezierContainer.children[0].style.pointerEvents = (animatorTitle.innerHTML == "Cubic Bezier")?'auto':'none';
    bezierContainer.children[1].style.pointerEvents = (animatorTitle.innerHTML == "Cubic Bezier")?'auto':'none';
    bezierContainer.children[0].style.border = (animatorTitle.innerHTML == "Cubic Bezier")?'3px solid #009CFF':'3px solid #a7a7a7';
    bezierContainer.children[1].style.border = (animatorTitle.innerHTML == "Cubic Bezier")?'3px solid #009CFF':'3px solid #a7a7a7';
    bezierController.editable = (animatorTitle.innerHTML == "Cubic Bezier")?true:false;
  }

  function updateCaculatorDataToSilder(calculatorType,animationData){

      for(var i = 0;i < 4;i++){

        if(i >= Math.round(animationData.length/4)){

          sliderContainer.children[i].style.display = 'none'
        }
        else{
          sliderContainer.children[i].style.display = 'block'
        }
      }

      

      for(var i = 0;i<Math.round(animationData.length/4);i++){
        //console.log(animationData[4*i+1])
        
        sliderContainer.children[i].children[0].innerHTML = (calculatorType == "CubicBezierCalculator")?"Value":animationData[4*i];
        sliderContainer.children[i].children[1].value = (calculatorType == "CubicBezierCalculator")?0:animationData[4*i+1];
        sliderContainer.children[i].children[2].value = (calculatorType == "CubicBezierCalculator")?0:animationData[4*i+1];

        sliderContainer.children[i].children[2].min = (calculatorType == "CubicBezierCalculator")?0:animationData[4*i+2];
        sliderContainer.children[i].children[2].max = (calculatorType == "CubicBezierCalculator")?1:animationData[4*i+3];

        var mProgress = (animationData[4*i+1] - animationData[4*i+2])/(animationData[4*i+3] - animationData[4*i+2])*100;

        sliderContainer.children[i].children[3].style.left = 149 + (266-149)*mProgress/100 + 'px';

        sliderContainer.children[i].children[2].style.background = 'linear-gradient(to right, #029CFF 0%, #029CFF '+ mProgress +'%, #363636 ' + mProgress + '%, #363636 100%)'
        
      }

  }

  // ######### CalculatorData #########
  function selectCalculator(calculatorType,animatorTitle,animationData,converterType){

    if(calculatorType == "InterpolatorCalculator"){
      setCurrentInterpolatorType(animatorTitle.innerHTML);
    }
    else{
      setCurrentInterpolatorType(null);
    }

    switch(calculatorType) {
      case "SpringAnimationCalculator":

          if(converterType == null){
            caculator = new SpringAnimationCalculator(animationData[1],animationData[5],animationData[9]);
            DrawCurve(canvas,caculator,true);
            setCurrentConverterType(null);
          }
          else{
      
            var converter;
            switch(Math.round(animationData.length/4)){
              case 1:
                eval("converter = new " + converterType + "(" + animationData[1] + ")");
                break;
              case 2:
                eval("converter = new " + converterType + "(" + animationData[1] + "," + animationData[5] + ")");
                break;                   
              case 3:
                eval("converter = new " + converterType + "(" + animationData[1] + "," + animationData[5] + "," + animationData[9] + ")");
                break;
              case 4:

                eval("converter = new " + converterType + "(" + animationData[1] + "," + animationData[5] + "," + animationData[9] + "," + animationData[13] + ")");
                break;
              default:
            }

            caculator = new SpringAnimationCalculator(converter.stiffness,converter.dampingRatio,(converter.velocity == null)?0:converter.velocity);
            setCurrentConverterType(converter);
            DrawCurve(canvas,caculator,true);
          }

          break;

      case "InterpolatorCalculator":
          caculator = new InterpolatorCalculator(animatorTitle.innerHTML,2);
          DrawCurve(canvas,caculator,false)
          break;
      case "CubicBezierCalculator":
          var p1 = animationData[0];
          var p2 = animationData[1];
          var p3 = animationData[2];
          var p4 = animationData[3];
          caculator = new CubicBezierCalculator(p1,p2,p3,p4);
          bezierController.setBezierWithCalculator(caculator);
          break;
      default:
          switch(Math.round(animationData.length/4)){
            case 1:
              eval("caculator = new " + calculatorType + "(" + animationData[1] + ")");
              break;
            case 2:
              eval("caculator = new " + calculatorType + "(" + animationData[1] + "," + animationData[5] + ")");
              break;                   
            case 3:
              eval("caculator = new " + calculatorType + "(" + animationData[1] + "," + animationData[5] + "," + animationData[9] + ")");
              break;
            case 4:
              eval("caculator = new " + calculatorType + "(" + animationData[1] + "," + animationData[5] + "," + animationData[9] + "," + animationData[13] + ")");
              break;
            default:
          }

          DrawCurve(canvas,caculator,true);
          // console.log(caculator)
    }
    setCurrentCalculatorType(calculatorType)
  }

}