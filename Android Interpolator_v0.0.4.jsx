#target aftereffects

// Android Interpolaotr 0.0.4
// MartinRGB 2019 (qiuyinsen@gmail.com)

// An After Effects adaptation of Android Interpolator equations.


///////////////////////////////
// aescript expression
///////////////////////////////

var factor1 = 0.5,factor2 = 0.,factor3 = 0.;
var SPRING = new Object();
var BOUNCE = new Object();
var DAMPING = new Object();
var MOCOSSPRING = new Object();
var DIVIDE1 = new Object();
var ANDROIDSPRING = new Object();
var ANDROIDFLING = new Object();
var DIVIDE2 = new Object();
var ACCELERATEDECELERATE = new Object();
var ACCELERATE = new Object();
var ANTICIPATE = new Object();
var ANTICIPATEOVERSHOOT = new Object();
var BOUNCE2 = new Object();
var CYCLE = new Object();
var DECELERATE = new Object();
var LINEAR = new Object();
var OVERSHOOT = new Object();
var DIVIDE3 = new Object();
var BEZIER_FUNCTION = new Object();
var NORMALIZED_EASING_FUNCTION;
var KEYTIME_FUNCTION;


SPRING = {
name:"Spring",
code:
"//var factor = 0.5;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"function getCurrentInterpolation(ratio) {\n" + 
"        if (ratio == 0.0 || ratio == 1.0){\n" + 
"            return ratio;\n" + 
"    }\n" + 
"        else {\n" + 
"            var value =  Math.pow(2, -10 * ratio) * Math.sin((ratio - factor / 4.0) * (2.0 * Math.PI) / factor) + 1;\n" + 
"            return value;\n" + 
"        }\n" + 
"}\n" + 
"function calculate(a,b,c,d,e) {\n" + 
"        var k = c*getCurrentInterpolation(a/d)+b;\n" + 
"        return k;\n" + 
"}\n",
index:0,
slider1Range:1,
slider1Val:0.5/1,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};

BOUNCE = {
name:"Bounce",
code:
"//var mTension = 0.;\n" + 
"//var mFriction = 0.;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"//Parameters\n" + 
"var maxStifness = 50.;\n" + 
"var maxFrictionMultipler = 1.;\n" + 
"//Curve Position parameters(No Adjust)\n" + 
"var amplitude = 1.;\n" + 
"var phase = 0.;\n" + 
"//Original Scale parameters(Better No Adjust)\n" + 
"var originalStiffness = 12.;\n" + 
"var originalFrictionMultipler = 0.3;\n" + 
"var mass = 0.058;\n" + 
"//Internal parameters\n" + 
"var pulsation = Math.sqrt((originalStiffness + mTension) / mass);\n" + 
"var friction = (originalFrictionMultipler + mFriction) * pulsation;\n" + 
"function getCurrentInterpolation(ratio) {\n" + 
"    if (ratio == 0.0 || ratio == 1.0)\n" + 
"        return ratio;\n" + 
"    else {\n" + 
"        var value = amplitude * Math.exp(-friction * ratio) * Math.cos(pulsation * ratio + phase) ;\n" + 
"        return -Math.abs(value)+1.;\n" + 
"    }\n" + 
"}\n" + 
"function calculate(t,b,c,d) {\n" + 
"    return c*getCurrentInterpolation(t/d) + b;\n" + 
"}\n",
index:1,
slider1Range:100,
slider1Val:0,
slider1FixVal:null,
slider1Text:"Tension:",
slider2Range:10,
slider2Val:0,
slider2Text:"Friction:",
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var mTension = '+factor1.toString()+';\n var mFriction = '+factor2.toString()+';\n'};

DAMPING = {
name:"Damping",
code:
"//var mTension = 0.;\n" + 
"//var mFriction = 0.;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"//Parameters\n" + 
"var maxStifness = 50.;\n" + 
"var maxFrictionMultipler = 1.;\n" + 
"//Curve Position parameters(No Adjust)\n" + 
"var amplitude = 1.;\n" + 
"var phase = 0.;\n" + 
"//Original Scale parameters(Better No Adjust)\n" + 
"var originalStiffness = 12.;\n" + 
"var originalFrictionMultipler = 0.3;\n" + 
"var mass = 0.058;\n" + 
"//Internal parameters\n" + 
"var pulsation = Math.sqrt((originalStiffness + mTension) / mass);\n" + 
"var friction = (originalFrictionMultipler + mFriction) * pulsation;\n" + 
"function getCurrentInterpolation(ratio) {\n" + 
"    if (ratio == 0.0 || ratio == 1.0)\n" + 
"        return ratio;\n" + 
"    else {\n" + 
"        var value = amplitude * Math.exp(-friction * ratio) * Math.cos(pulsation * ratio + phase) ;\n" + 
"        return -value+1.;\n" + 
"    }\n" + 
"}\n" + 
"function calculate(t,b,c,d) {\n" + 
"    return c*getCurrentInterpolation(t/d) + b;\n" + 
"}\n",
index:2,
slider1Range:100,
slider1Val:0,
slider1FixVal:null,
slider1Text:"Tension:",
slider2Range:10,
slider2Val:0,
slider2Text:"Friction:",
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var mTension = '+factor1.toString()+';\n var mFriction = '+factor2.toString()+';\n'};

MOCOSSPRING = {
name:"MocosSpring",
code:
"//var tension = 100.;\n" + 
"//var damping = 15.;\n" + 
"//var v0 = 20.;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"var mGamma = 0., mVDiv2 = 0.;\n" + 
"var mEps = 0.001;\n" + 
"var mA = 0., mB = 0.;\n" + 
"var mDuration = 1000.;\n" + 
"if(4 * tension - damping * damping > 0){\n" + 
"        mGamma = Math.sqrt(4 * tension - damping * damping) / 2;\n" + 
"        mVDiv2 = damping / 2;\n" + 
"        mB = Math.atan(-mGamma / (v0 - mVDiv2));\n" + 
"        mA = -1 / Math.sin(mB);\n" + 
"        mDuration = Math.log(Math.abs(mA) / mEps) / mVDiv2;\n" + 
"}\n" + 
"else{\n" + 
"        mGamma = Math.sqrt(damping * damping - 4 * tension) / 2;\n" + 
"        mVDiv2 = damping / 2;\n" + 
"        mA = (v0 - (mGamma + mVDiv2)) / (2 * mGamma);\n" + 
"        mB = -1 - mA;\n" + 
"        mDuration = Math.log(Math.abs(mA) / mEps) / (mVDiv2 - mGamma);\n" + 
"}\n" + 
"function getDesiredDuration() {\n" + 
"    return mDuration;\n" + 
"}\n" + 
"function getCurrentInterpolation(ratio) {\n" + 
"    if (ratio >= 1) {\n" + 
"        return 1;\n" + 
"    }\n" + 
"    var t = ratio * mDuration;\n" + 
"        if(4 * tension - damping * damping > 0){\n" + 
"    return (mA * Math.exp(-mVDiv2 * t) * Math.sin(mGamma * t + mB) + 1) \n" + 
"    }\n" + 
"    else{\n" + 
"    return (mA * Math.exp((mGamma - mVDiv2) * t) + mB * Math.exp(-(mGamma + mVDiv2) * t) + 1)\n" + 
"    }\n" + 
"}\n" + 
"function calculate(t,b,c,d) {\n" + 
"    return c*getCurrentInterpolation(t/d) + b;\n" + 
"}\n",
index:3,
slider1Range:200,
slider1Val:100/200,
slider1FixVal:null,
slider1Text:"Tension:",
slider2Range:100,
slider2Val:15/100,
slider2Text:"Friction:",
slider3Range:100,
slider3Val:20/100,
slider3Text:"Velocity:",
defaultPara:'var tension = '+factor1.toString()+';\n var damping = '+factor2.toString()+';\n var v0 = '+factor3.toString()+';\n'};

DIVIDE1 = {
name:"-",
code:null,
index:4,
slider1Range:null,
slider1Val:null,
slider1FixVal:null,
slider2Range:null,
slider2Val:null,
slider2Text:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:null};

ANDROIDSPRING = {
name:"AndroidSpring",
code:
"//mStiffness = 1500;\n" + 
"//mDampingRatio = 0.5;\n" + 
"//mVelocity = 0.;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"function getCurrentInterpolation(progress,time){\n" + 
"    if (progress >= 1) {\n" + 
"        return 1;\n" + 
"    }else{\n" + 
"        var deltaT = time;\n" + 
"        var starVal = 0;\n" + 
"        var endVal = 1;\n" + 

"        var mNaturalFreq = Math.sqrt(mStiffness);\n" + 
"        var mDampedFreq = mNaturalFreq*Math.sqrt(1.0 - mDampingRatio* mDampingRatio);\n" + 
"        var lastVelocity =  mVelocity;\n" + 
"        var lastDisplacement  = progress -  endVal;\n" + 
"        var coeffB = 1.0 / mDampedFreq * (mDampingRatio * mNaturalFreq * lastDisplacement + lastVelocity);\n" + 
"        var displacement = Math.pow(Math.E,-mDampingRatio * mNaturalFreq * deltaT) * (lastDisplacement * Math.cos(mDampedFreq * deltaT) + coeffB * Math.sin(mDampedFreq * deltaT));\n" + 
"        var mValue = displacement + endVal;\n" + 

"        if(time = 0){\n" + 
"            return starVal;\n" + 
"        }\n" + 
"        else{\n" + 
"            return mValue;\n" + 
"        }\n" + 
"    }\n" + 
"}\n" + 
"function calculate(t,b,c,d) {\n" + 
"    return c*getCurrentInterpolation(t/d,t) + b;\n" + 
"} \n",
index:5,
slider1Range:3000,
slider1Val:1500/3000,
slider1FixVal:null,
slider1Text:"Stiffness:",
slider2Range:1,
slider2Val:0.5/1,
slider2Text:"Damping:",
slider3Range:500,
slider3Val:0/500,
slider3Text:"Velocity:",
defaultPara:'var mStiffness = '+factor1.toString()+';\n var mDampingRatio = '+factor2.toString()+';\n var mVelocity = '+factor3.toString()+';\n'};


ANDROIDFLING = {
name:"AndroidFling",
code:
"//mStartVelocity = -4000;\n" + 
"//mDampingRatio = 0.5;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"function calculate(t,b,c,d) {\n" + 
"    var startVal = b;\n" + 
"    var deltaT = t;\n" + 
"    mRealFriction = mDampingRatio*(-4.2);\n" + 
"    mFlingVelocity = ( mStartVelocity)*Math.exp(t *mRealFriction) ;\n" + 
"    valTransition =  (valueAtTime(time - 1/60) - mStartVelocity/mRealFriction) + ( mStartVelocity/ mRealFriction) * (Math.exp(mRealFriction * t ) ) \n" + 
"    mLastVal = valTransition;\n" + 
"    if(deltaT == 0)\n" + 
"        return b;\n" + 
"    else\n" + 
"        return valTransition;\n" + 
"} \n",
index:6,
slider1Range:10000,
slider1FixVal:5000,
slider1Val:(10000 - 5000 + (-4000))/10000,
slider1Text:"Velocity:",
slider2Range:1,
slider2Val:0.8/1,
slider2Text:"Damping:",
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var mStartVelocity = '+factor1.toString()+';\n var mDampingRatio = '+factor2.toString()+';\n'};

DIVIDE2 = {
name:"-",
code:null,
index:7,
slider1Range:null,
slider1Val:null,
slider1FixVal:null,
slider2Range:null,
slider2Val:null,
slider2Text:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:null};

ACCELERATEDECELERATE = {
name:"AccelerateDecelerate",
code:
"var config = undefined; \n" + 
"var isPathShape = false; \n" + 
"function AccelerateDecelerateInterpolator(t,c){\n" + 
"	return Math.cos((t + 1)*Math.PI)/2 + 0.5;\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* AccelerateDecelerateInterpolator(t/d,factor) + b; \n" + 
"}\n",
index:8,
slider1Range:null,
slider1Val:null,
slider1FixVal:null,
slider1Text:null,
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:''};

ACCELERATE = {
name:"Accelerate",
code:
"//var factor = 2.0; \n" + 
"var config = undefined; \n" + 
"var isPathShape = false; \n" + 
"function AccelerateInterpolator(t,c){\n" + 
"	return Math.pow(t,2*c)\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* AccelerateInterpolator(t/d,factor) + b; \n" + 
"}\n", 
index:9,
slider1Range:10,
slider1Val:2/10,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};
	
ANTICIPATE = {
name:"Anticipate",
code:
"//var factor = 2.0; \n" + 
"var config = undefined; \n" + 
"var isPathShape = false; \n" + 
"function AnticipateInterpolator(t,c){\n" + 
"	return (c+1)*Math.pow(t,3) - c * Math.pow(t,2);\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* AnticipateInterpolator(t/d,factor) + b; \n" + 
"}\n",
index:10,
slider1Range:10,
slider1Val:2/10,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};

ANTICIPATEOVERSHOOT = {
name:"AnticipateOvershoot",
code:
"//var factor = 2.0;\n" + 
"var config = undefined;\n" + 
"var isPathShape = false;\n" + 
"function aosiFunctionA(t,s) {\n" + 
"	return t * t * ((s + 1) * t - s);\n" + 
"}\n" + 
" function aosiFunctionB(t,s) {\n" + 
"	return t * t * ((s + 1) * t + s);\n" + 
"}\n" + 
"function AnticipateOvershootInterpolator(t,f) {\n" + 
"	if (t < 0.5){\n" + 
"		return 0.5 * aosiFunctionA(t * 2.0, f*1.5);\n" + 
"	}\n" + 
"	else{\n" + 
"		return 0.5 * (aosiFunctionB(t * 2.0 - 2.0, f*1.5) + 2.0);\n" + 
"	}\n" + 
"}	\n" + 
"function calculate(t,b,c,d) {\n" + 
"    return c* AnticipateOvershootInterpolator(t/d,factor) + b;\n" + 
"}\n",
index:11,
slider1Range:10,
slider1Val:2/10,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};

BOUNCE2 = {
name:"Bounce",
code:
"var config = undefined; \n" + 
"var isPathShape = false; \n" + 
"function bounce(t){\n" + 
"	return t * t * 8.0;\n" + 
"}\n" + 
"function BounceInterpolator(t){\n" + 
"	 t *= 1.1226;\n" + 
"	 if (t < 0.3535) return bounce(t);\n" + 
"	else if (t < 0.7408) return bounce(t - 0.54719) + 0.7;\n" + 
"	else if (t < 0.9644) return bounce(t - 0.8526) + 0.9;\n" + 
"	else return bounce(t - 1.0435) + 0.95;\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* BounceInterpolator(t/d) + b; \n" + 
"}\n",
index:12,
slider1Range:null,
slider1Val:null,
slider1FixVal:null,
slider1Text:null,
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:''};

CYCLE = {
name:"Cycle",
code:
"//var factor = 2.0; \n" + 

"var config = undefined; \n" + 
"var isPathShape = false; \n" + 

"function CycleInterpolator(t,c){\n" + 
"	return Math.sin(2*Math.PI * c * t);\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* CycleInterpolator(t/d,factor) + b; \n" + 
"}\n",
index:13,
slider1Range:10,
slider1Val:2/10,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};

DECELERATE = {
name:"Decelerate",
code:
"//var factor = 2.0; \n" + 

"var config = undefined; \n" + 
"var isPathShape = false; \n" + 

"function DecelerateInterpolator(t,c){\n" + 
"	return 1 - Math.pow(1-t,2 * c)\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* DecelerateInterpolator(t/d,factor) + b; \n" + 
"}\n",
index:14,
slider1Range:10,
slider1Val:2/10,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};

LINEAR = {
name:"Linear",
code:
"var config = undefined; \n" + 
"var isPathShape = false; \n" + 

"function LinearInterpolator(t){\n" + 
"	return t;\n" + 
"}\n" + 
"function calculate(t,b,c,d) { \n" + 
"    return c* LinearInterpolator(t/d) + b; \n" + 
"}\n",
index:15,
slider1Range:null,
slider1Val:null,
slider1FixVal:null,
slider1Text:null,
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:''};

OVERSHOOT = {
name:"Overshoot",
code:
"//var factor = 2.0; \n" + 

"var config = undefined; \n" + 
"var isPathShape = false; \n" + 

"function OvershootInterpolator(t,c){\n" + 
"	return (c + 1) * Math.pow(t - 1,3) + c * Math.pow(t - 1,2) + 1;\n" + 
"}\n" + 

"function calculate(t,b,c,d) { \n" + 
"    return c* OvershootInterpolator(t/d,factor) + b; \n" + 
"}\n",
index:16,
slider1Range:10,
slider1Val:2/10,
slider1FixVal:null,
slider1Text:"Factor:",
slider2Range:null,
slider2Val:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:'var factor = '+factor1.toString()+';\n'};

DIVIDE3 = {
name:"-",
code:null,
index:17,
slider1Range:null,
slider1Val:null,
slider1FixVal:null,
slider2Range:null,
slider2Val:null,
slider2Text:null,
slider3Range:null,
slider3Val:null,
slider3Text:null,
defaultPara:null};

var point1x,point1y,point2x,point2y;

BEZIER_FUNCTION = {
	Material_FastOutSlowIn:[0.40, 0.00, 0.20, 1.00],
	Material_LinearOutSlowIn:[0.00, 0.00, 0.20, 1.00],
	Material_FastOutLinear:[0.40, 0.00, 1.00, 1.00],
	iOS_CSS_Ease_Deafult:[0.25, 0.10, 0.25, 1.00],
	iOS_CSS_EaseIn:[0.42, 0.00, 1.00, 1.00],
	iOS_CSS_EaseOut:[0.00, 0.00, 0.58, 1.00],
	iOS_CSS_EaseInOut:[0.42, 0.00, 0.58, 1.00]
}

NORMALIZED_EASING_FUNCTION = 
"function getDimensions()\n" +
"{\n" +
"    try { key(1)[2]; return 3; } catch(e) { }\n" +
"    try { key(1)[1]; return 2; } catch(e) { }\n" +
"    return 1;\n" +
"}\n" +
"function getNormalizedValue(value, dim)\n" +
"{\n" +
"    if (dim == 1)\n" +
"        return [value];\n" +
"    var vals = []\n" +
"    for (var i=0; i < dim; i++)\n" +
"        vals.push(value[i]);\n" +
"    return vals;\n" +
"}\n" +
"function easeBootstrap()\n" +
"{\n" +
"    if (numKeys < 2)\n" +
"        return value;\n" +
"    var n = 0;\n" +
"    if (numKeys > 0) {\n" +
"        n = nearestKey(time).index;\n" +
"        if (key(n).time > time) { n-- }\n" +
"    }\n" +
"    try {\n" +
"        var key1 = key(n);\n" +
"        var key2 = key(n+1);\n" +
"    } catch(e) {\n" +
"        return null;\n" +
"    }\n" +
"    var t = time - key1.time;\n" +
"    var d = key2.time - key1.time;\n" +
"    // If there is a 3rd keyframe then stop at it.\n" +
"    if (numKeys >= n + 2)\n" +
"    {\n" +
"        key3 = key(n + 2);\n" +
"        if (time > key3.time)\n" +
"            return value;\n" +
"    }\n" +
"    if (isPathShape)\n" +
"    {\n" +
"        var b = key1.time;\n" +
"        var c = key2.time - key1.time;\n" +
"        return valueAtTime(calculate(t, b, c, d));\n" +
"    }\n" +
"    else\n" +
"    {\n" +
"        var values = [];\n" +
"        var propertyDimensions = getDimensions();\n" +
"        var vals = getNormalizedValue(value, propertyDimensions);\n" +
"        for (var i=0; i < propertyDimensions; i++)\n" +
"        {\n" +
"            var b = key1[i];\n" +
"            var c = key2[i] - key1[i];\n" +
"            values.push(calculate(t, b, c, d));\n" +
"        }\n" +
"        if (propertyDimensions == 1)\n" +
"            return values[0];\n" +
"        else\n" +
"            return values;\n" +
"    }\n" +
"}\n";

KEYTIME_FUNCTION = 
"if(time>key(1).time  &  time<key(2).time){\n" + 
"try { easeBootstrap() || value; } catch(e) { value; }\n" + 
"}\n" + 
"else{\n" + 
"value;\n" + 
"}\n";

function android_interpolator_script(ui_reference) {

	///////////////////////////////
	// preset
	///////////////////////////////

	var android_interpolator = {}; // put all global variables on this object to avoid namespace clashes

	android_interpolator.CLEAR_EXPRESSION_BTN     = false; // this adds a button to the palette, "clear", that deletes expressions on all selected properties. Off by default.
	android_interpolator.VERSION                  = "0.0.4";
	android_interpolator.interpolatorEquation           = "";
	android_interpolator.palette                  = {};

	// palette controls
	android_interpolator.interpolatorList               = {};

	// selected interpolator
	var INTERPOLATOR_MODE = 0;
	// array for storing interpolators' name
	var INTERPOLAOTR_STRING_ARRAY = new Array();
	// prefix code snippet 
	var prefixParameters
	// selected keyframe variable
	var key1Index,key2Index;

	android_interpolator.INTERPOLATOR_SETTINGS_KEY     = "androidinterpolator"; 

	// arrary for storing interpolators' object
	android_interpolator.interpolatorTypesAry = [SPRING,BOUNCE,DAMPING,MOCOSSPRING,DIVIDE1,ANDROIDSPRING,ANDROIDFLING,DIVIDE2,ACCELERATEDECELERATE,ACCELERATE,ANTICIPATE,ANTICIPATEOVERSHOOT,BOUNCE2,CYCLE,DECELERATE,LINEAR,OVERSHOOT,DIVIDE3];

	android_interpolator.TOOLTIP_INTERPOLATOR       = "选择插值器的类型";

	android_interpolator.strHelpText = 
	"Android Interpolaotr 使用 「时间轴 - 关键帧 - 插值」 的方式，去模拟 「迭代式」 力学动画，同时也整合了默认的安卓插值器动画\n" +
	"\n" +
	"首先选择关键帧，然后选择插值器类型，参数调节完成后点击 「应用」 按钮即可 \n" + 
	"\n" +
	"(其中的 AndroidSpring 是 Android API 25 中迭代动画系统 DynamicAnimation 的 插值版本，参数完全对齐，只要保证足够的动画时间即可)\n"
	

	function an_main(thisObj)
	{ 
		//add Object Name to An Array(by using of menu creating)
		for (var i = 0;i< android_interpolator.interpolatorTypesAry.length;i++){
			INTERPOLAOTR_STRING_ARRAY[i] = android_interpolator.interpolatorTypesAry[i].name
		}


		var objIndex = 0
		for ( var key in BEZIER_FUNCTION ){ 
			if (BEZIER_FUNCTION.hasOwnProperty(key)){
				INTERPOLAOTR_STRING_ARRAY[android_interpolator.interpolatorTypesAry.length + objIndex] = key
				objIndex++;
				//alert(BEZIER_FUNCTION[key])
				
			}
	   	}  
		an_createPalette(thisObj);
	
	}


	function an_set_interpolator_menu() {
		android_interpolator.interpolatorList.selection = 0;
	}

	function an_createPalette(thisObj)
	{
		var LIST_DIMENSIONS = [0, 0, 180, 15];
		var STATIC_TEXT_DIMENSIONS = [0, 0, 60, 15];

		android_interpolator.palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Easing", undefined, {resizeable: true});
		android_interpolator.palette.margins       = 6;
		android_interpolator.palette.alignChildren = 'left';

		// fix the text display in the popup menu - thanks Jeff Almasol
		var winGfx          = android_interpolator.palette.graphics;
		var darkColorBrush  = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);
		var lightColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [1,1,1], 1);

		// popup menus

		///////////////////////////////
		// slider group
		///////////////////////////////

		var	slGrp1 = android_interpolator.palette.add('group', undefined, 'Slider Group 1');
		var text1 = slGrp1.add('statictext', STATIC_TEXT_DIMENSIONS, 'Factor:');
		var slider1 = slGrp1.add("slider", undefined, thisObj.numRows, 0, 100.);
		slider1.size = 'width: 150, height: 20';
		var value1 = slGrp1.add('statictext', STATIC_TEXT_DIMENSIONS, '0.5f');
		slider1.onChanging = function () {  
			for (var i = 0;i< android_interpolator.interpolatorTypesAry.length;i++){
				if(INTERPOLATOR_MODE == i){
					if(android_interpolator.interpolatorTypesAry[i].slider1FixVal !=null){
						factor1 = (slider1.value/100. * android_interpolator.interpolatorTypesAry[i].slider1Range).toFixed(2) - android_interpolator.interpolatorTypesAry[i].slider1FixVal;
					}
					else{
						factor1 = (slider1.value/100. * android_interpolator.interpolatorTypesAry[i].slider1Range).toFixed(2);
					}
					value1.text = factor1.toString() + 'f';
				}
			}
			

		}
		slider1.value = 50.;
		factor1 = 0.5;
				
		var	slGrp2 = android_interpolator.palette.add('group', undefined, 'Slider Group 2');
		slGrp2.visible = false;
		var text2 = slGrp2.add('statictext', STATIC_TEXT_DIMENSIONS, 'Factor2:');
		var slider2 = slGrp2.add("slider", undefined, thisObj.numRows, 0, 100);
		slider2.size = 'width: 150, height: 20';
		var value2 = slGrp2.add('statictext', STATIC_TEXT_DIMENSIONS, '100.f');
		slider2.onChanging = function () {  
			for (var i = 0;i< android_interpolator.interpolatorTypesAry.length;i++){
				if(INTERPOLATOR_MODE == i){
					if(android_interpolator.interpolatorTypesAry[i].slider2Val !=null){
						factor2 = (slider2.value/100. * android_interpolator.interpolatorTypesAry[i].slider2Range).toFixed(2);
						value2.text = factor2.toString() + 'f';
					}
				}
			}
		}


		var	slGrp3 = android_interpolator.palette.add('group', undefined, 'Slider Group 3');
		slGrp3.visible = false;
		var text3 = slGrp3.add('statictext', STATIC_TEXT_DIMENSIONS, 'Factor3:');
		var slider3 = slGrp3.add("slider", undefined, thisObj.numRows, 0, 100);
		slider3.size = 'width: 150, height: 20';
		var value3 = slGrp3.add('statictext', STATIC_TEXT_DIMENSIONS, '100.f');
		slider3.onChanging = function () {  
			for (var i = 0;i< android_interpolator.interpolatorTypesAry.length;i++){
				if(INTERPOLATOR_MODE == i){
					if(android_interpolator.interpolatorTypesAry[i].slider3Val !=null){
						factor3 = (slider3.value/100. * android_interpolator.interpolatorTypesAry[i].slider3Range).toFixed(2);
						value3.text = factor3.toString() + 'f';
					}
				}
			}

		}
				

		///////////////////////////////
		// interpolator menu
		///////////////////////////////

		var	interpolatorGrp = android_interpolator.palette.add('group', undefined, 'Easing group');
		interpolatorGrp.add('statictext', STATIC_TEXT_DIMENSIONS, '插值类型:');


			android_interpolator.interpolatorList                          = interpolatorGrp.add('dropdownlist', LIST_DIMENSIONS, INTERPOLAOTR_STRING_ARRAY);

			android_interpolator.interpolatorList.helpTip                  = android_interpolator.TOOLTIP_INTERPOLATOR;
			android_interpolator.interpolatorList.graphics.foregroundColor = darkColorBrush;

			an_set_interpolator_menu();

			android_interpolator.interpolatorList.onChange = function() {
				if (this.selection == null) {
					// tried to select a greyed-out item, ignore
					an_set_interpolator_menu();
					return;
				} else {
					app.settings.saveSetting("androidinterpolator", android_interpolator.INTERPOLATOR_SETTINGS_KEY, this.selection.toString());
					//alert("yo, you selected item " + this.selection.index);
					INTERPOLATOR_MODE = this.selection.index;

					// Default Easing(Cubic-Bezier)in iOS/Web/Material  
					if (BEZIER_FUNCTION.hasOwnProperty(INTERPOLAOTR_STRING_ARRAY[INTERPOLATOR_MODE])){

						slGrp1.visible = false;
					}

					// Android Timing Function Interpolator
					for (var i = 0;i < android_interpolator.interpolatorTypesAry.length;i++){
						if(INTERPOLATOR_MODE == android_interpolator.interpolatorTypesAry[i].index){
							if(android_interpolator.interpolatorTypesAry[i].slider1Val == null){
								slGrp1.visible = false;
							}
							else{
								slGrp1.visible = true;
							}
							if(android_interpolator.interpolatorTypesAry[i].slider2Val == null){
								slGrp2.visible = false;
							}
							else{
								slGrp2.visible = true;
							}
							if(android_interpolator.interpolatorTypesAry[i].slider3Val == null){
								slGrp3.visible = false;
							}
							else{
								slGrp3.visible = true;
							}
							text1.text = android_interpolator.interpolatorTypesAry[i].slider1Text;
							text2.text = android_interpolator.interpolatorTypesAry[i].slider2Text;
							text3.text = android_interpolator.interpolatorTypesAry[i].slider3Text;

							slider1.value = android_interpolator.interpolatorTypesAry[i].slider1Val*100.;
							slider2.value = android_interpolator.interpolatorTypesAry[i].slider2Val*100.;
							slider3.value = android_interpolator.interpolatorTypesAry[i].slider3Val*100.;

							if(android_interpolator.interpolatorTypesAry[i].slider1FixVal !=null){
								factor1 = (android_interpolator.interpolatorTypesAry[i].slider1Val * android_interpolator.interpolatorTypesAry[i].slider1Range - android_interpolator.interpolatorTypesAry[i].slider1FixVal);
							}
							else{
								factor1 = android_interpolator.interpolatorTypesAry[i].slider1Val * android_interpolator.interpolatorTypesAry[i].slider1Range;
							}
							factor2 = android_interpolator.interpolatorTypesAry[i].slider2Val * android_interpolator.interpolatorTypesAry[i].slider2Range;
							factor3 = android_interpolator.interpolatorTypesAry[i].slider3Val * android_interpolator.interpolatorTypesAry[i].slider3Range;

							value1.text = (factor1).toFixed(2).toString() + 'f';
							value2.text = (factor2).toFixed(2).toString() + 'f';
							value3.text = (factor3).toFixed(2).toString() + 'f';
							prefixParameters = android_interpolator.interpolatorTypesAry[i].defaultPara;

						}
					}
				}
			}

		///////////////////////////////
		// apply button
		///////////////////////////////

		var buttonGrp = android_interpolator.palette.add('group', undefined, 'Button group');
		buttonGrp.add('statictext', STATIC_TEXT_DIMENSIONS, '');

		var applyBtn     = buttonGrp.add('button', undefined, '应用');
		applyBtn.onClick = an_setAnimationCurves;
		var helpBtn      = buttonGrp.add("button {text:'?', maximumSize:[30,30]}");
		helpBtn.onClick  = function() {alert("Android Interpolator v " + android_interpolator.VERSION + "\n" + android_interpolator.strHelpText, "Android Interpolator")};

		// var testGrp = android_interpolator.palette.add('group', undefined, 'Button group');
		// testGrp.add('statictext', STATIC_TEXT_DIMENSIONS, '');
		// var testBtn     = testGrp.add('button', undefined, 'Test');
		// testBtn.onClick = function(){
		// 	an_two_keyframe_cubicbeziers(0.2,0.5,0.1,1.0);
		// }

		if (android_interpolator.palette instanceof Window) {
			android_interpolator.palette.show();
		} else {
			android_interpolator.palette.layout.layout(true);
		}

	}

	//////////////////////////////////////////////////////////////
	// get selected interpolator's code 
	//////////////////////////////////////////////////////////////

	//TODO:Use for loop for select
	function getParameters(mode_num){
		switch(android_interpolator.interpolatorTypesAry[mode_num].name) {
			case "Spring":
				prefixParameters = 'var factor = '+factor1.toString()+'; \n';
				break;
			case "Bounce":
				prefixParameters = 'var mTension = '+factor1.toString()+';\nvar mFriction = '+factor2.toString()+';\n';
				break;
			case "Damping":
				prefixParameters = 'var mTension = '+factor1.toString()+';\nvar mFriction = '+factor2.toString()+';\n';
				break;
			case "MocosSpring":
				prefixParameters = 'var tension = '+factor1.toString()+';\nvar damping = '+factor2.toString()+';\nvar v0 = '+factor3.toString()+';\n';
				break;
			case "AndroidSpring":
				prefixParameters = 'var mStiffness = '+factor1.toString()+';\nvar mDampingRatio = '+factor2.toString()+';\nvar mVelocity = '+factor3.toString()+';\n';
				break;
			case "AndroidFling":
				prefixParameters = 'var mStartVelocity = '+factor1.toString()+';\nvar mDampingRatio = '+factor2.toString()+';\n';
				break;
			default:
				if(android_interpolator.interpolatorTypesAry[mode_num].defaultPara == null){
					prefixParameters = '';
				}
				else{
					prefixParameters = 'var factor = '+factor1.toString()+';\n';
				}

		}
	}

	//TODO:Use for loop for select
	function getInterpolatorType(mode_num){
		for (var i = 0; i < android_interpolator.interpolatorTypesAry.length; i++){
			if(mode_num == android_interpolator.interpolatorTypesAry[i].index){
				return android_interpolator.interpolatorTypesAry[i].code
			}
		}
	}

	//////////////////////////////////////////////////////////////
	// set aescript to layers' keyframes
	//////////////////////////////////////////////////////////////

	function an_setAnimationCurves(){
		if (!an_canProceed()) { return false; }
		if(INTERPOLATOR_MODE < android_interpolator.interpolatorTypesAry.length){
			an_two_keyframe_func();
		}
		else{

			//alert(point1x+","+point1y+","+point2x+","+point2y+"")
			var k0 = BEZIER_FUNCTION[INTERPOLAOTR_STRING_ARRAY[INTERPOLATOR_MODE]][0];
			var k1 = BEZIER_FUNCTION[INTERPOLAOTR_STRING_ARRAY[INTERPOLATOR_MODE]][1];
			var k2 = BEZIER_FUNCTION[INTERPOLAOTR_STRING_ARRAY[INTERPOLATOR_MODE]][2];
			var k3 = BEZIER_FUNCTION[INTERPOLAOTR_STRING_ARRAY[INTERPOLATOR_MODE]][3];
			
			an_two_keyframe_cubicbeziers(k0,k1,k2,k3);
			//an_two_keyframe_cubicbeziers(0.42, 0.00, 1.00, 1.00);
		}
	}


	function an_two_keyframe_func() {
		var activeItem = app.project.activeItem, props, n, p,currentLayer,myMarker1,myMarker2,myTime1,myTime2;  
		if (activeItem instanceof CompItem){  
			DT = Math.min(0.01, activeItem.frameDuration/10.0);  
			currentLayer = activeItem.selectedLayers;
			//alert(currentLayer[0].name);
			//props = activeItem.selectedProperties;
			for ( var x = 0; x <= (currentLayer.length - 1); x++)
			{

				props = currentLayer[x].selectedProperties;
				for (n=0; n<props.length; n++){  
					p = props[n];   //props[n]
					if (!p.numKeys) continue;  

					key1Index = p.selectedKeys[0];
					key2Index = p.selectedKeys[1];

					//alert(p.name)
					myMarker1 = new MarkerValue("",p.name + " Anim Begin");
					myMarker2 = new MarkerValue("",p.name + " Anim End");
					myTime1 = p.keyTime(p.selectedKeys[0]);
					myTime2 = p.keyTime(p.selectedKeys[1]);

					KEYTIME_FUNCTION = 
					"if(time>key("+key1Index+").time  &  time<key("+key2Index+").time){\n" + 
					"try { easeBootstrap() || value; } catch(e) { value; }\n" + 
					"}\n" + 
					"else{\n" + 
					"value;\n" + 
					"}\n";
	
					//#TODO,2 Layers Add Keyframe
					currentLayer[x].Marker.setValueAtTime(myTime1,myMarker1);
					currentLayer[x].Marker.setValueAtTime(myTime2,myMarker2);


					an_applyExpressions_singleLayer(x);

				};
			};
		};  
		return;  
	}

	function an_applyExpressions_singleLayer(layer_num) { // decide what external file to load

		
		app.beginUndoGroup("Android Interpolator");
		try {
			getParameters(INTERPOLATOR_MODE);
			android_interpolator.interpolatorEquation = prefixParameters + getInterpolatorType(INTERPOLATOR_MODE) + NORMALIZED_EASING_FUNCTION + KEYTIME_FUNCTION;
		} catch(e) {
			Window.alert(e);
			return false;
		}

		an_setProps_singeLayer(android_interpolator.interpolatorEquation,layer_num);
		app.endUndoGroup();
	}

	function an_setProps_singeLayer(expressionCode,layer_num)
	{
		var selectedLayers = app.project.activeItem.selectedLayers;
		for ( var x = 0; x <= (selectedLayers.length - 1); x++)
		{

			if( x == layer_num){
				var selectedProperties = selectedLayers[x].selectedProperties;
				var numOfChangedProperties = 0;

				for (var f in selectedProperties)
				{
					var currentProperty = selectedProperties[f];

					if ((currentProperty.propertyValueType == PropertyValueType.SHAPE)) {
						//alert(android_interpolator.CURVACEOUS_ERROR_TXT);
						alert ('wrong!');
						continue;
					}

					if (!currentProperty.canSetExpression) { continue } // don't do anything if we can't set an expression
					if (currentProperty.numKeys < 2) { continue }       // likewise if there aren't at least two keyframes
					currentProperty.expression = expressionCode;
					numOfChangedProperties++;
				}
				// clearOutput(); // TODO
				// an_trace("Ease and Wizz:")
				var easingType = android_interpolator.interpolatorList.selection.toString();
				if (numOfChangedProperties == 1) {
					an_trace("Applied \"" +  easingType + "\" to one property.");
				} else {
					an_trace("Applied \"" +  easingType + "\" to " + numOfChangedProperties + " properties.");
				}
			}
		}
	}

	//////////////////////////////////////////////////////////////
	// utils for debugging
	//////////////////////////////////////////////////////////////

	function an_trace(s) { // for debugging
		//$.writeln(s); // writes to the ExtendScript interface
		writeLn(s); // writes in the AE info window
	}
	
	function an_canProceed()
	{ 
		var activeItem = app.project.activeItem;
		if (activeItem === null) {
			alert("Select two keyframes in each layer.");
			return false;
		}
		if (activeItem.selectedProperties == "") {
			alert("Please select at least one keyframe in each layer.")
			return false;
		}
		var props = activeItem.selectedProperties,n,p;
		for (n=0; n<props.length; n++){  
			p = props[n];  
			if (!p.numKeys) continue;  
			//idx = p.nearestKeyIndex(comp.time);  
			if(p.selectedKeys.length != 2){
				alert('You can only select two keyframes in each layer!')
				return false;
			}
		};
		
		// var currentLayer = activeItem.selectedLayers;
		// if(currentLayer.length > 1){
		// 	alert('Only support one layer now!')
		// 	return false;
		// }

		return true;
	}

	function an_two_keyframe_cubicbeziers(x1,y1,x2,y2){
		var curItem = app.project.activeItem;
		var selectedLayers = curItem.selectedLayers;
		var props,p;
		if (selectedLayers == 0){
			alert("Please Select at least one Layer");
		}
		else if(selectedLayers !=0){
			for ( var x = 0; x <= (selectedLayers.length - 1); x++)
			{
	
				var p1x = x1;
				var p1y = y1;
				var p2x = x2;
				var p2y = y2;
				
				props = selectedLayers[x].selectedProperties;
				for (n=0; n<props.length; n++){  
					p = props[n];   //props[n]
					if (!p.numKeys) continue;  
					if (!p.canSetExpression) { continue; }
					// Clean expression
					//p.expression = '';

					var t1 = p.keyTime(p.selectedKeys[0]);
					var t2 = p.keyTime(p.selectedKeys[1]);
					var val1 = p.keyValue(p.selectedKeys[0]);
					var val2 = p.keyValue(p.selectedKeys[1]);
					var avSpeed;
					if(p.value.length == undefined){
						avSpeed = Math.abs(val2-val1)/(t2-t1);
						if(val1 == val2){
							//alert('values are equal!')
							alert("Error in layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nvalues are equal!")
							return false;
						}
					}
					else if(p.value.length == 2){
						if(val1[0] == val2[0] && val1[1] == val2[1]){
							//alert('values are equal!')
							alert("Error in layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nvalues are equal!")
							return false; 
						}
						avSpeed = Math.sqrt( Math.pow(val2[0] - val1[0], 2) + Math.pow(val2[1] - val1[1], 2))/(t2 - t1);
					}
					else if (p.value.length == 3){
						if(val1[0] == val2[0] && val1[1] == val2[1] && val1[2] == val2[2]){
							alert("Error in layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nvalues are equal!")
							return false;
						}
						avSpeed = Math.sqrt( Math.pow(val2[0] - val1[0], 2) + Math.pow(val2[1] - val1[1], 2) + Math.pow(val2[2] - val1[2], 2))/(t2 - t1);
					}
					else{
						if(val1 == val2){
							alert("Error in layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nvalues are equal!")
							return false;
						}
						avSpeed = Math.abs(val2-val1)/(t2-t1);
					}


						// Material_LinearOutSlowIn:[0.00, 0.00, 0.20, 1.00],
						// Material_FastOutLinear:[0.40, 0.00, 1.00, 1.00],
						// iOS_CSS_EaseIn:[0.42, 0.00, 1.00, 1.00],
						// iOS_CSS_EaseOut:[0.00, 0.00, 0.58, 1.00],

						// Material_FastOutSlowIn:[0.40, 0.00, 0.20, 1.00],
						// iOS_CSS_EaseInOut:[0.42, 0.00, 0.58, 1.00]
						// iOS_CSS_Ease_Deafult:[0.25, 0.10, 0.25, 1.00],

					if (val1<val2){//, this should reproduce your website:     
						
						// p.keyOutTemporalEase(p.selectedKeys[0])[0].influence = x1*100.;
						// p.keyOutTemporalEase(p.selectedKeys[0])[0].speed = y1 * avSpeed / x1;
						// p.keyInTemporalEase(p.selectedKeys[1])[0].influence = (1.-x2)*100.;
						// p.keyInTemporalEase(p.selectedKeys[1])[0].speed = (1 - y2)/(1. - x2)*avSpeed;
						// alert('2-0')
						var prevIn = new KeyframeEase(p.keyInTemporalEase(p.selectedKeys[0])[0].speed,p.keyInTemporalEase(p.selectedKeys[0])[0].influence);
						var nextOut = new KeyframeEase(p.keyOutTemporalEase(p.selectedKeys[1])[0].speed,p.keyOutTemporalEase(p.selectedKeys[1])[0].influence);
						var easeOut = (p1x == 0) ? new KeyframeEase(0.,0.1):new KeyframeEase(p1y * avSpeed / p1x, p1x*100);
						var easeIn  = (p2x == 1) ? new KeyframeEase(0.,0.1):new KeyframeEase((1.- p2y)/(1. - p2x)*avSpeed, (1.-p2x)*100);
						p.setTemporalEaseAtKey(p.selectedKeys[0], [prevIn], [easeOut]);
						p.setTemporalEaseAtKey(p.selectedKeys[1], [easeIn], [nextOut]);
						
						// alert('2-3')
					}
					if (val2<val1){//, to get a curve starting from point [0,1] going to point [1,0], it would be:
						p2x = 1-p2x;
						// p.keyOutTemporalEase(p.selectedKeys[0])[0].influence = x1*100.;
						// p.keyOutTemporalEase(p.selectedKeys[0])[0].speed = y1 * avSpeed /(-x1);
						// p.keyInTemporalEase(p.selectedKeys[1])[0].influence = x2*100.;
						// p.keyInTemporalEase(p.selectedKeys[1])[0].speed = (y2-1.)/x2*avSpeed;
						var prevIn = new KeyframeEase(p.keyInTemporalEase(p.selectedKeys[0])[0].speed,p.keyInTemporalEase(p.selectedKeys[0])[0].influence);
						var nextOut = new KeyframeEase(p.keyOutTemporalEase(p.selectedKeys[1])[0].speed,p.keyOutTemporalEase(p.selectedKeys[1])[0].influence);
						

						var easeOut = (p1x == 0) ? new KeyframeEase(0.,0.1):new KeyframeEase(p1y * avSpeed / (-p1x), p1x*100);
						var easeIn  = (p2x == 0) ? new KeyframeEase(0.,0.1):new KeyframeEase((p2y-1.)/p2x*avSpeed, p2x*100);

						p.setTemporalEaseAtKey(p.selectedKeys[0], [prevIn], [easeOut]);
						p.setTemporalEaseAtKey(p.selectedKeys[1], [easeIn], [nextOut]);
					}
					if (val1==val2){
						p2x = 1-p2x;
						// x2 = 1.-x2;
						// var x1 = p.keyOutTemporalEase(p.selectedKeys[0])[0].influence /100;  
						// p.keyOutTemporalEase(p.selectedKeys[0])[0].influence = x1*100.;
						// var y1 = 0. ;
						// var x2 = p.keyInTemporalEase(p.selectedKeys[1])[0].influence /100;
						var prevIn = new KeyframeEase(p.keyInTemporalEase(p.selectedKeys[0])[0].speed,p.keyInTemporalEase(p.selectedKeys[0])[0].influence);
						var nextOut = new KeyframeEase(p.keyOutTemporalEase(p.selectedKeys[1])[0].speed,p.keyOutTemporalEase(p.selectedKeys[1])[0].influence);
						var easeOut = new KeyframeEase(0., p1x*100);
						var easeIn = new KeyframeEase(0., p2x*100);
						p.setTemporalEaseAtKey(p.selectedKeys[0], [prevIn], [easeOut]);
						p.setTemporalEaseAtKey(p.selectedKeys[1], [easeIn], [nextOut]);
						
					}
					
					
				};

			}
		}
	}
	
	//////////////////////////////////////////////////////////////
	// backup functions
	//////////////////////////////////////////////////////////////

	function getCubicbeziers(){
		var curItem = app.project.activeItem;
		var selectedLayers = curItem.selectedLayers;
		var props,p;
		if (selectedLayers == 0){
			alert("Please Select at least one Layer");
		}
		else if(selectedLayers !=0){
			for ( var x = 0; x <= (selectedLayers.length - 1); x++)
			{
	
				props = selectedLayers[x].selectedProperties;
				for (n=0; n<props.length; n++){  
					p = props[n];   //props[n]
					if (!p.numKeys) continue;  

					var t1 = p.keyTime(p.selectedKeys[0]);
					var t2 = p.keyTime(p.selectedKeys[1]);
					var val1 = p.keyValue(p.selectedKeys[0]);
					var val2 = p.keyValue(p.selectedKeys[1]);
					var avSpeed;
					if(p.value.length == undefined){
						if(val1 == val2){
							alert('values are equal!')
							return false;
						}
						avSpeed = Math.abs(val2-val1)/(t2-t1);
					}
					else if(p.value.length == 2){
						if(val1[0] == val2[0] && val1[1] == val2[1]){
							alert('values are equal!')
							return false;
						}
						avSpeed = Math.sqrt( Math.pow(val2[0] - val1[0], 2) + Math.pow(val2[1] - val1[1], 2))/(t2 - t1);
					}
					else if (p.value.length == 3){
						if(val1[0] == val2[0] && val1[1] == val2[1] && val1[2] == val2[2]){
							alert('values are equal!')
							return false;
						}
						avSpeed = Math.sqrt( Math.pow(val2[0] - val1[0], 2) + Math.pow(val2[1] - val1[1], 2) + Math.pow(val2[2] - val1[2], 2))/(t2 - t1);
					}
					else{
						if(val1 == val2){
							alert('values are equal!')
							return false;
						}
						avSpeed = Math.abs(val2-val1)/(t2-t1);
					}



					if (val1<val2){//, this should reproduce your website:     
						var x1 = p.keyOutTemporalEase(p.selectedKeys[0])[0].influence /100;
						var y1 = x1*p.keyOutTemporalEase(p.selectedKeys[0])[0].speed / avSpeed;
						var x2 = 1-p.keyInTemporalEase(p.selectedKeys[1])[0].influence /100;
						var y2 = 1-(1-x2)*(p.keyInTemporalEase(p.selectedKeys[1])[0].speed / avSpeed);
						alert("layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nkeyframe: " + " Cubic-bezier["+Math.abs(x1).toFixed(2)+", "+Math.abs(y1).toFixed(2) +", "+Math.abs(x2).toFixed(2)+", "+Math.abs(y2).toFixed(2) +"]")
						alert('1')
					}
					if (val2<val1){//, to get a curve starting from point [0,1] going to point [1,0], it would be:
						var x1 = p.keyOutTemporalEase(p.selectedKeys[0])[0].influence /100;
						var y1 = (-x1)*p.keyOutTemporalEase(p.selectedKeys[0])[0].speed / avSpeed;
						var x2 = p.keyInTemporalEase(p.selectedKeys[1])[0].influence /100;
						var y2 = 1+x2*(p.keyInTemporalEase(p.selectedKeys[1])[0].speed / avSpeed);
						x2 = 1-x2;
						alert("layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nkeyframe: " + " Cubic-bezier["+Math.abs(x1).toFixed(2)+", "+Math.abs(y1).toFixed(2) +", "+Math.abs(x2).toFixed(2)+", "+Math.abs(y2).toFixed(2) +"]")
						alert('2')
					}
					if (val1==val2){
						var x1 = p.keyOutTemporalEase(p.selectedKeys[0])[0].influence /100;
						var y1 = (-x1)*p.keyOutTemporalEase(p.selectedKeys[0])[0].speed *(t2-t1);
						var x2 = p.keyInTemporalEase(p.selectedKeys[1])[0].influence /100;
						var y2 = 1+x2*(p.keyInTemporalEase(p.selectedKeys[1])[0].speed*(t2-t1));
						x2 = 1-x2;
						alert("layer: [" + selectedLayers[x].name + "]\nproperty: [" + p.name +  "]\nkeyframe: " + " Cubic-bezier["+Math.abs(x1).toFixed(2)+", "+Math.abs(y1).toFixed(2) +", "+Math.abs(x2).toFixed(2)+", "+Math.abs(y2).toFixed(2) +"]")
					}
					
					
				};

			}
		}
	}

	function an_applyExpressions() { // decide what external file to load

		if (!an_canProceed()) { return false; }

		app.beginUndoGroup("Android Interpolator");

		try {
			
			getParameters(INTERPOLATOR_MODE);
			android_interpolator.interpolatorEquation = prefixParameters + getInterpolatorType(INTERPOLATOR_MODE) + NORMALIZED_EASING_FUNCTION + KEYTIME_FUNCTION;
		} catch(e) {
			Window.alert(e);
			return false;
		}

		an_setProps(android_interpolator.interpolatorEquation);
		app.endUndoGroup();
	}

	function an_clearExpressions()
	{//{{{
		// TODO : "Object is invalid"
		// TODO : "null is not an object"
		var selectedProperties = activeItem.selectedProperties;
		for (var f in selectedProperties)
		{
			var currentProperty = selectedProperties[f];
			if (!currentProperty.canSetExpression) { continue; }
			currentProperty.expression = '';
		}
	}

	function an_setProps(expressionCode)
	{
		var selectedProperties = app.project.activeItem.selectedProperties;
		var numOfChangedProperties = 0;

		for (var f in selectedProperties)
		{
			var currentProperty = selectedProperties[f];

			if ((currentProperty.propertyValueType == PropertyValueType.SHAPE)) {
				//alert(android_interpolator.CURVACEOUS_ERROR_TXT);
				alert ('wrong!');
				continue;
			}

			if (!currentProperty.canSetExpression) { continue } // don't do anything if we can't set an expression
			if (currentProperty.numKeys < 2) { continue }       // likewise if there aren't at least two keyframes
			currentProperty.expression = expressionCode;
			numOfChangedProperties++;
		}
		// clearOutput(); // TODO
		var easingType = android_interpolator.interpolatorList.selection.toString();
		if (numOfChangedProperties == 1) {
			an_trace("Applied \"" +  easingType + "\" to one property.");
		} else {
			an_trace("Applied \"" +  easingType + "\" to " + numOfChangedProperties + " properties.");
		}
	}

	an_main(ui_reference);

}

android_interpolator_script(this);
