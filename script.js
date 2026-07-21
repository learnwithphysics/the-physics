function toggleAnswer(id, button){

    const answer = document.getElementById(id);

    if(answer.style.display === "none" || answer.style.display === ""){

        answer.style.display = "block";
        button.innerHTML = "🙈 Hide Answer";

    }else{

        answer.style.display = "none";
        button.innerHTML = "👀 Show Answer";

    }

}
function moveObject(){

let value=document.getElementById("speedSlider").value;

document.getElementById("runner").style.left=value*5+"px";

if(value<30){

document.getElementById("graphText").innerHTML="🐢 Slow Motion";

}else if(value<70){

document.getElementById("graphText").innerHTML="🚶 Uniform Motion";

}else{

document.getElementById("graphText").innerHTML="🏃 Fast Motion";

}

}

function checkSpeed(){

let ans=document.getElementById("speedAnswer").value;

if(ans==5){

document.getElementById("speedResult").innerHTML="✅ Correct! Speed = 5 m/s";

document.getElementById("speedResult").style.color="lime";

}else{

document.getElementById("speedResult").innerHTML="❌ Wrong! Try Again.";

document.getElementById("speedResult").style.color="red";

}

}
function startCar(){

document.getElementById("road").style.display="block";

let car=document.getElementById("car");

let x=10;

let move=setInterval(function(){

x+=5;

car.style.left=x+"px";

if(x>500){

clearInterval(move);

document.getElementById("question").style.display="block";

}

},30);

}

function correctAnswer(){

document.getElementById("result").innerHTML="✅ Correct! The car is in motion.";

document.getElementById("result").style.color="lime";

}

function wrongAnswer(){

document.getElementById("result").innerHTML="❌ Wrong! Try Again.";

document.getElementById("result").style.color="red";

}

function moveObject(){

let value=document.getElementById("speedSlider").value;

document.getElementById("runner").style.left=value*5+"px";

if(value<30){

document.getElementById("graphText").innerHTML="🐢 Slow Motion";

}else if(value<70){

document.getElementById("graphText").innerHTML="🚶 Uniform Motion";

}else{

document.getElementById("graphText").innerHTML="🏃 Fast Motion";

}

}

function checkSpeed(){

let ans=document.getElementById("speedAnswer").value;

if(ans==5){

document.getElementById("speedResult").innerHTML="✅ Correct! Speed = 5 m/s";

document.getElementById("speedResult").style.color="lime";

}else{

document.getElementById("speedResult").innerHTML="❌ Wrong! Try Again.";

document.getElementById("speedResult").style.color="red";

}

}
function checkForce(type){

if(type=="correct"){

document.getElementById("forceResult").innerHTML="✅ Correct! Balanced forces are equal.";

document.getElementById("forceResult").style.color="lime";

}else{

document.getElementById("forceResult").innerHTML="❌ Wrong! Try Again.";

document.getElementById("forceResult").style.color="red";

}

}

function checkLaw(value){

if(value==1){

document.getElementById("lawResult").innerHTML="✅ Correct! Newton's First Law.";

document.getElementById("lawResult").style.color="lime";

}else{

document.getElementById("lawResult").innerHTML="❌ Wrong Answer.";

document.getElementById("lawResult").style.color="red";

}

}

function checkForceAnswer(){

let ans=document.getElementById("forceAnswer").value;

if(ans==20){

document.getElementById("forceAns").innerHTML="✅ Correct! Force = 20 N";

document.getElementById("forceAns").style.color="lime";

}else{

document.getElementById("forceAns").innerHTML="❌ Wrong! Correct Answer = 20 N";

document.getElementById("forceAns").style.color="red";

}

}
function teamA(){

document.getElementById("winner").innerHTML="🏆 Team A Wins! (Unbalanced Force)";
document.getElementById("rope").style.marginLeft="120px";

}

function teamB(){

document.getElementById("winner").innerHTML="❌ Team B Lost.";
document.getElementById("rope").style.marginLeft="0px";

}
function pushBox(){

    document.getElementById("box").style.left = "420px";

    document.getElementById("boxResult").innerHTML =
    "✅ The box moved because an unbalanced force acted on it.";

    document.getElementById("boxResult").style.color = "lime";

}

function launchRocket(){

    document.getElementById("rocket").style.bottom = "180px";

    document.getElementById("rocketResult").innerHTML =
    "🚀 Action: Gases move downward. Reaction: Rocket moves upward.";

    document.getElementById("rocketResult").style.color = "lime";

}

function checkAcceleration(){

    let ans = document.getElementById("accAnswer").value;

    if(ans == 5){

        document.getElementById("accResult").innerHTML =
        "✅ Correct! Acceleration = 5 m/s²";

        document.getElementById("accResult").style.color = "lime";

    }else{

        document.getElementById("accResult").innerHTML =
        "❌ Wrong! Correct Answer = 5 m/s²";

        document.getElementById("accResult").style.color = "red";

    }

}
function startRefraction(){

document.getElementById("ray").style.transform="rotate(55deg)";

document.getElementById("refractionResult").innerHTML=
"✅ Light bends because its speed changes while entering another medium.";

document.getElementById("refractionResult").style.color="lime";

}
function dropApple(){

document.getElementById("apple").style.top="180px";

document.getElementById("appleResult").innerHTML=
"🍎 The apple falls because of Earth's gravitational force.";

document.getElementById("appleResult").style.color="lime";

}
function startFiltration(){

document.getElementById("dirtyWater").style.left="20px";

document.getElementById("cleanWater").style.opacity="1";

document.getElementById("filterResult").innerHTML="✅ Filtration separated sand from water successfully.";

document.getElementById("filterResult").style.color="lime";

}
function startReaction(){

document.getElementById("beaker1").style.left="220px";

document.getElementById("beaker2").style.right="220px";

document.getElementById("product").style.opacity="1";

document.getElementById("reactionResult").innerHTML=
"✅ Reactants combined to form a new product.";

document.getElementById("reactionResult").style.color="lime";

}
function floatWood(){

document.getElementById("object").innerHTML="🪵";
document.getElementById("object").style.top="60px";

document.getElementById("floatResult").innerHTML=
"✅ The wooden block is floating.";

document.getElementById("floatResult").style.color="lime";

}

function sinkStone(){

document.getElementById("object").innerHTML="🪨";
document.getElementById("object").style.top="170px";

document.getElementById("floatResult").innerHTML=
"✅ The stone sank to the bottom.";

document.getElementById("floatResult").style.color="orange";

}
function buildAtom(){

document.getElementById("atomCenter").style.opacity="1";

document.getElementById("electron").style.opacity="1";

document.getElementById("electron").style.left="65%";
document.getElementById("electron").style.top="25%";

document.getElementById("atomResult").innerHTML=
"✅ Atom created successfully. The nucleus is at the centre and electrons surround it.";

document.getElementById("atomResult").style.color="lime";

}
function startWork(){

document.getElementById("workBox").style.left="420px";

document.getElementById("workResult").innerHTML=
"✅ Work is done because the box moved after applying force.";

document.getElementById("workResult").style.color="lime";

}

function energyDemo(){

document.getElementById("ball").style.top="180px";

document.getElementById("energyResult").innerHTML=
"⚡ Potential Energy changed into Kinetic Energy.";

document.getElementById("energyResult").style.color="lime";

}
function heatTransfer(){

document.getElementById("rod").style.background=
"linear-gradient(to right, red, orange, yellow, gray)";

document.getElementById("heatResult").innerHTML=
"🔥 Heat travels through the metal rod by conduction.";

document.getElementById("heatResult").style.color="lime";

}

function showRadiation(){

document.getElementById("radiationResult").innerHTML=
"☀ Heat reaches the Earth from the Sun by radiation.";

document.getElementById("radiationResult").style.color="lime";

}
function ringBell(){

let bell=document.getElementById("bell");

bell.style.transform="rotate(15deg)";

setTimeout(function(){

bell.style.transform="rotate(-15deg)";

},150);

setTimeout(function(){

bell.style.transform="rotate(0deg)";

},300);

document.getElementById("bellResult").innerHTML=
"🔊 The bell vibrated and produced sound.";

document.getElementById("bellResult").style.color="lime";

}

function vibrateString(){

document.getElementById("string").innerHTML=
"≈≈≈≈≈≈≈≈≈≈≈≈";

document.getElementById("stringResult").innerHTML=
"🎵 Vibrating strings produce sound.";

document.getElementById("stringResult").style.color="lime";

setTimeout(function(){

document.getElementById("string").innerHTML=
"────────────";

},1000);

}
function explainLesson(){

let text="Welcome. I will explain this lesson in simple English. Read each topic carefully, observe the examples, complete the activities and finally revise the summary.";

document.getElementById("aiExplanation").style.display="block";

document.getElementById("aiExplanation").innerHTML=
"<h3>🤖 AI Teacher</h3><p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function explainLesson1(){

let text="Reflection is the bouncing back of light from a surface. Curved mirrors can produce different images depending on the object's position. In this lesson, you will learn concave mirrors, convex mirrors and image formation with simple examples.";

document.getElementById("aiLesson").style.display="block";

document.getElementById("aiLesson").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function moveMirrorObject(){

let value=document.getElementById("mirrorSlider").value;

let object=document.getElementById("object");

let image=document.getElementById("image");

let text=document.getElementById("imageType");

object.style.left=(40+(value*45))+"px";

if(value==5){

image.style.left="250px";
image.style.transform="scale(0.7) rotate(180deg)";
text.innerHTML="✅ Beyond C → Real, Inverted, Diminished";

}

else if(value==4){

image.style.left="300px";
image.style.transform="scale(1) rotate(180deg)";
text.innerHTML="✅ At C → Real, Inverted, Same Size";

}

else if(value==3){

image.style.left="360px";
image.style.transform="scale(1.3) rotate(180deg)";
text.innerHTML="✅ Between C and F → Real, Inverted, Enlarged";

}

else if(value==2){

image.style.left="470px";
image.style.transform="scale(1.8) rotate(180deg)";
text.innerHTML="✅ At Focus → Image at Infinity";

}

else{

image.style.left="560px";
image.style.transform="scale(1.4)";
text.innerHTML="✅ Between Pole and Focus → Virtual, Erect, Enlarged";

}

}
function explainChemicalEquation(){

let text="A chemical equation is the symbolic representation of a chemical reaction. Reactants combine together to form products. In this lesson you will learn different types of chemical reactions with simple examples.";

document.getElementById("aiChemical").style.display="block";

document.getElementById("aiChemical").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function balancedCorrect(){

document.getElementById("balanceResult").innerHTML=
"✅ Correct! This equation is balanced.";

document.getElementById("balanceResult").style.color="lime";

}

function balancedWrong(){

document.getElementById("balanceResult").innerHTML=
"❌ Wrong! Count the atoms again.";

document.getElementById("balanceResult").style.color="red";

}
function burnMagnesium(){

let mg=document.getElementById("mg");

mg.innerHTML="✨";

mg.style.fontSize="90px";

document.getElementById("mgResult").innerHTML=
"✅ Magnesium burns with a bright white flame and forms Magnesium Oxide (MgO).";

document.getElementById("mgResult").style.color="lime";

}

function mixChemicals(){

let s=document.getElementById("solution");

s.style.background="gold";

document.getElementById("solutionResult").innerHTML=
"🟡 Colour changed! A chemical reaction has taken place.";

document.getElementById("solutionResult").style.color="lime";

}
function explainAcidLesson(){

let text="Acids taste sour and release hydrogen ions. Bases are bitter and release hydroxide ions. When an acid reacts with a base, salt and water are formed. This is called neutralization.";

document.getElementById("acidAI").style.display="block";

document.getElementById("acidAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function checkPH(value){

if(value==7){

document.getElementById("phResult").innerHTML="✅ Correct! Pure water has pH 7 (Neutral).";

document.getElementById("phResult").style.color="lime";

}else{

document.getElementById("phResult").innerHTML="❌ Wrong! The correct answer is pH 7.";

document.getElementById("phResult").style.color="red";

}

}
function testAcid(){

document.getElementById("litmusPaper").style.background="red";

document.getElementById("litmusResult").innerHTML=
"✅ Blue Litmus changed to Red. It is an Acid.";

document.getElementById("litmusResult").style.color="lime";

}

function testBase(){

document.getElementById("litmusPaper").style.background="blue";

document.getElementById("litmusResult").innerHTML=
"✅ Red Litmus changed to Blue. It is a Base.";

document.getElementById("litmusResult").style.color="lime";

}

function testNeutral(){

document.getElementById("litmusPaper").style.background="green";

document.getElementById("litmusResult").innerHTML=
"✅ No colour change. It is Neutral.";

document.getElementById("litmusResult").style.color="lime";

}

function updatePH(){

let value=document.getElementById("phSlider").value;

document.getElementById("phValue").innerHTML="pH = "+value;

if(value<7){

document.getElementById("phColor").style.background="red";

document.getElementById("phNature").innerHTML="Acidic Solution";

}

else if(value==7){

document.getElementById("phColor").style.background="green";

document.getElementById("phNature").innerHTML="Neutral Solution";

}

else{

document.getElementById("phColor").style.background="blue";

document.getElementById("phNature").innerHTML="Basic Solution";

}

}
function explainRefraction(){

let text="Refraction is the bending of light when it passes from one transparent medium to another because its speed changes. Examples include a spoon appearing bent in water and a swimming pool appearing shallower.";

document.getElementById("refractionAI").style.display="block";

document.getElementById("refractionAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function changeAngle(){

let angle=document.getElementById("angleSlider").value;

document.getElementById("incidentRay").style.transform="rotate("+angle+"deg)";

document.getElementById("refractedRay").style.transform="rotate("+(angle-15)+"deg)";

document.getElementById("angleResult").innerHTML=
"Angle of Incidence = "+angle+"°";

}

function mediumCorrect(){

document.getElementById("mediumResult").innerHTML=
"✅ Correct! Light bends towards the normal when it enters a denser medium.";

document.getElementById("mediumResult").style.color="lime";

}

function mediumWrong(){

document.getElementById("mediumResult").innerHTML=
"❌ Wrong! Try again.";

document.getElementById("mediumResult").style.color="red";

}
function explainEye(){

let text="The human eye works like a camera. The cornea allows light to enter. The pupil controls the amount of light. The eye lens focuses the image on the retina, and the optic nerve sends signals to the brain.";

document.getElementById("eyeAI").style.display="block";

document.getElementById("eyeAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function focusNear(){

let lens=document.getElementById("eyeLens");

lens.style.width="90px";
lens.style.height="130px";

document.getElementById("eyeResult").innerHTML=
"✅ Lens becomes thicker to focus a nearby object.";

document.getElementById("eyeResult").style.color="lime";

}

function focusFar(){

let lens=document.getElementById("eyeLens");

lens.style.width="55px";
lens.style.height="95px";

document.getElementById("eyeResult").innerHTML=
"✅ Lens becomes thinner to focus a distant object.";

document.getElementById("eyeResult").style.color="lime";

}

function correctLens(){

document.getElementById("lensResult").innerHTML=
"✅ Correct! Myopia is corrected using a Concave Lens.";

document.getElementById("lensResult").style.color="lime";

}

function wrongLens(){

document.getElementById("lensResult").innerHTML=
"❌ Wrong! Try again.";

document.getElementById("lensResult").style.color="red";

}

function showRainbow(){

document.getElementById("rainbow").style.background=
"linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)";

document.getElementById("rainbowResult").innerHTML=
"🌈 Rainbow formed due to refraction, dispersion and internal reflection.";

document.getElementById("rainbowResult").style.color="lime";

}

function retinaCorrect(){

document.getElementById("quizResult").innerHTML=
"✅ Correct! The retina is the image-forming screen of the eye.";

document.getElementById("quizResult").style.color="lime";

}

function retinaWrong(){

document.getElementById("quizResult").innerHTML=
"❌ Wrong! The correct answer is Retina.";

document.getElementById("quizResult").style.color="red";

}
function explainAtom(){

let text="Everything is made of atoms. An atom contains protons and neutrons in the nucleus, while electrons revolve around the nucleus in fixed energy levels according to Bohr's model.";

document.getElementById("atomAI").style.display="block";

document.getElementById("atomAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function oxygenCorrect(){

document.getElementById("oxygenResult").innerHTML=
"✅ Correct! Oxygen has Atomic Number 8.";

document.getElementById("oxygenResult").style.color="lime";

}

function oxygenWrong(){

document.getElementById("oxygenResult").innerHTML=
"❌ Wrong! The correct answer is 8.";

document.getElementById("oxygenResult").style.color="red";

}
let proton=0;
let neutron=0;
let electron=0;

function addProton(){

proton++;

document.getElementById("protonCount").innerHTML=proton;

checkAtom();

}

function addNeutron(){

neutron++;

document.getElementById("neutronCount").innerHTML=neutron;

checkAtom();

}

function addElectron(){

electron++;

document.getElementById("electronCount").innerHTML=electron;

checkAtom();

}

function checkAtom(){

if(proton==6 && neutron==6 && electron==6){

document.getElementById("atomStatus").innerHTML="✅ Excellent! You have successfully built a Carbon-12 atom.";

document.getElementById("atomStatus").style.color="lime";

}

}

function carbonCorrect(){

document.getElementById("carbonResult").innerHTML="✅ Correct! A neutral Carbon atom has 6 electrons.";

document.getElementById("carbonResult").style.color="lime";

}

function carbonWrong(){

document.getElementById("carbonResult").innerHTML="❌ Wrong! The correct answer is 6.";

document.getElementById("carbonResult").style.color="red";

}
function explainNuclear(){

let text="Radioactivity is the spontaneous emission of radiation from unstable nuclei. Alpha, Beta and Gamma rays are the three main types of nuclear radiation. Radioactivity has many useful applications in medicine, industry and electricity generation.";

document.getElementById("nuclearAI").style.display="block";

document.getElementById("nuclearAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function fusionCorrect(){

document.getElementById("fusionResult").innerHTML=
"✅ Correct! The Sun produces energy by Nuclear Fusion.";

document.getElementById("fusionResult").style.color="lime";

}

function fusionWrong(){

document.getElementById("fusionResult").innerHTML=
"❌ Wrong! The correct answer is Nuclear Fusion.";

document.getElementById("fusionResult").style.color="red";

}
function alphaRay(){

document.getElementById("radiationBox").style.background="red";

document.getElementById("radiationResult").innerHTML=
"✅ Alpha particles have LOW penetrating power.";

document.getElementById("radiationResult").style.color="lime";

}

function betaRay(){

document.getElementById("radiationBox").style.background="orange";

document.getElementById("radiationResult").innerHTML=
"✅ Beta particles have MEDIUM penetrating power.";

document.getElementById("radiationResult").style.color="lime";

}

function gammaRay(){

document.getElementById("radiationBox").style.background="violet";

document.getElementById("radiationResult").innerHTML=
"✅ Gamma rays have VERY HIGH penetrating power.";

document.getElementById("radiationResult").style.color="lime";

}

function startReactor(){

document.getElementById("reactor").style.background="lime";

document.getElementById("reactorResult").innerHTML=
"⚡ Nuclear Fission Started. Large amount of energy released.";

document.getElementById("reactorResult").style.color="lime";

}

function gammaCorrect(){

document.getElementById("gammaResult").innerHTML=
"✅ Correct! Gamma rays have the highest penetrating power.";

document.getElementById("gammaResult").style.color="lime";

}

function gammaWrong(){

document.getElementById("gammaResult").innerHTML=
"❌ Wrong! The correct answer is Gamma.";

document.getElementById("gammaResult").style.color="red";

}
function explainCarbon(){

let text="Carbon is an element with atomic number six. It forms covalent bonds by sharing electrons. Diamond, Graphite and Fullerene are important allotropes of carbon.";

document.getElementById("carbonAI").style.display="block";

document.getElementById("carbonAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}
function graphiteCorrect(){

document.getElementById("graphiteResult").innerHTML=
"✅ Correct! Graphite conducts electricity because of its free electrons.";

document.getElementById("graphiteResult").style.color="lime";

}

function graphiteWrong(){

document.getElementById("graphiteResult").innerHTML=
"❌ Wrong! The correct answer is Graphite.";

document.getElementById("graphiteResult").style.color="red";

}
function showDiamond(){

document.getElementById("carbonDisplay").innerHTML="💎";

document.getElementById("carbonDisplay").style.background="#55ddff";

document.getElementById("carbonInfo").innerHTML=
"💎 Diamond is the hardest natural substance.";

}

function showGraphite(){

document.getElementById("carbonDisplay").innerHTML="✏";

document.getElementById("carbonDisplay").style.background="#666";

document.getElementById("carbonInfo").innerHTML=
"✏ Graphite conducts electricity and is used in pencils.";

}

function showFullerene(){

document.getElementById("carbonDisplay").innerHTML="⚽";

document.getElementById("carbonDisplay").style.background="#444";

document.getElementById("carbonInfo").innerHTML=
"⚽ Fullerene consists of carbon atoms arranged like a football.";

}

function buildMethane(){

document.getElementById("methaneModel").innerHTML="CH₄";

document.getElementById("bondResult").innerHTML=
"✅ Methane contains one Carbon atom sharing electrons with four Hydrogen atoms.";

document.getElementById("bondResult").style.color="lime";

}

function carbonCorrect(){

document.getElementById("carbonQuiz").innerHTML=
"✅ Correct! Carbon forms four covalent bonds.";

document.getElementById("carbonQuiz").style.color="lime";

}

function carbonWrong(){

document.getElementById("carbonQuiz").innerHTML=
"❌ Wrong! Carbon generally forms four covalent bonds.";

document.getElementById("carbonQuiz").style.color="red";

}
function explainPeriodic(){

let text="The Modern Periodic Table arranges elements in increasing order of atomic number. It contains 18 groups and 7 periods. Elements in the same group have similar chemical properties.";

document.getElementById("periodicAI").style.display="block";

document.getElementById("periodicAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function groupCorrect(){

document.getElementById("groupResult").innerHTML="✅ Correct! The Modern Periodic Table has 18 groups.";

document.getElementById("groupResult").style.color="lime";

}

function groupWrong(){

document.getElementById("groupResult").innerHTML="❌ Wrong! The correct answer is 18.";

document.getElementById("groupResult").style.color="red";

}
function metalloidCorrect(){

document.getElementById("metalloidResult").innerHTML=
"✅ Correct! Silicon is a metalloid.";

document.getElementById("metalloidResult").style.color="lime";

}

function metalloidWrong(){

document.getElementById("metalloidResult").innerHTML=
"❌ Wrong! The correct answer is Silicon.";

document.getElementById("metalloidResult").style.color="red";

}
function showSodium(){

document.getElementById("elementInfo").innerHTML=
"🟡 Sodium (Na) belongs to Group 1 (Alkali Metals).";

}

function showChlorine(){

document.getElementById("elementInfo").innerHTML=
"🟢 Chlorine (Cl) belongs to Group 17 (Halogens).";

}

function showNeon(){

document.getElementById("elementInfo").innerHTML=
"🔵 Neon (Ne) belongs to Group 18 (Noble Gases).";

}

function showCalcium(){

document.getElementById("elementInfo").innerHTML=
"⚪ Calcium (Ca) belongs to Group 2 (Alkaline Earth Metals).";

}

function nobleCorrect(){

document.getElementById("nobleResult").innerHTML=
"✅ Correct! Noble gases are present in Group 18.";

document.getElementById("nobleResult").style.color="lime";

}

function nobleWrong(){

document.getElementById("nobleResult").innerHTML=
"❌ Wrong! The correct answer is Group 18.";

document.getElementById("nobleResult").style.color="red";

}
function explainBonding(){

let text="Chemical bonding is the force that holds atoms together. Atoms become stable by gaining, losing or sharing electrons according to the octet rule. The two main types of chemical bonds are ionic bonds and covalent bonds.";

document.getElementById("bondAI").style.display="block";

document.getElementById("bondAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function octetCorrect(){

document.getElementById("octetResult").innerHTML=
"✅ Correct! Atoms try to complete 8 electrons in the outermost shell.";

document.getElementById("octetResult").style.color="lime";

}

function octetWrong(){

document.getElementById("octetResult").innerHTML=
"❌ Wrong! The correct answer is 8.";

document.getElementById("octetResult").style.color="red";

}
function electronTransfer(){

document.getElementById("electronModel").innerHTML=
"Na → e⁻ → Cl";

document.getElementById("electronResult").innerHTML=
"✅ Sodium loses one electron and Chlorine gains one electron to form NaCl.";

document.getElementById("electronResult").style.color="lime";

}

function bondCorrect(){

document.getElementById("bondQuiz").innerHTML=
"✅ Correct! Covalent bonds are formed by sharing electrons.";

document.getElementById("bondQuiz").style.color="lime";

}

function bondWrong(){

document.getElementById("bondQuiz").innerHTML=
"❌ Wrong! The correct answer is Covalent Bond.";

document.getElementById("bondQuiz").style.color="red";

}
function showLewis(element){

if(element=="H")
document.getElementById("lewisDisplay").innerHTML="H •";

if(element=="O")
document.getElementById("lewisDisplay").innerHTML="•• O ••";

if(element=="Na")
document.getElementById("lewisDisplay").innerHTML="Na •";

if(element=="Cl")
document.getElementById("lewisDisplay").innerHTML="•• Cl •••••";

}

function showIonic(){

document.getElementById("bondDisplay").innerHTML="Na → e⁻ → Cl";

document.getElementById("bondExplanation").innerHTML=
"⚡ Ionic bond forms by transfer of electrons between Sodium and Chlorine.";

}

function showCovalent(){

document.getElementById("bondDisplay").innerHTML="H : H";

document.getElementById("bondExplanation").innerHTML=
"🔗 Covalent bond forms by sharing electrons between atoms.";

}

function ionicCorrect(){

document.getElementById("ionicQuizResult").innerHTML=
"✅ Correct! NaCl contains an Ionic Bond.";

document.getElementById("ionicQuizResult").style.color="lime";

}

function ionicWrong(){

document.getElementById("ionicQuizResult").innerHTML=
"❌ Wrong! The correct answer is NaCl.";

document.getElementById("ionicQuizResult").style.color="red";

}
function explainCurrent(){

let text="Electric current is the flow of electric charges through a conductor. The SI unit of current is Ampere. Current flows only in a closed electric circuit.";

document.getElementById("currentAI").style.display="block";

document.getElementById("currentAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function ampereCorrect(){

document.getElementById("ampereResult").innerHTML=
"✅ Correct! The SI unit of electric current is Ampere.";

document.getElementById("ampereResult").style.color="lime";

}

function ampereWrong(){

document.getElementById("ampereResult").innerHTML=
"❌ Wrong! The correct answer is Ampere.";

document.getElementById("ampereResult").style.color="red";

}function switchCircuit(){

document.getElementById("bulbStatus").innerHTML="💡 ON";

document.getElementById("circuitText").innerHTML=
"✅ The circuit is closed. Current flows and the bulb glows.";

document.getElementById("circuitText").style.color="lime";

}

function ohmCorrect(){

document.getElementById("ohmResult").innerHTML=
"✅ Correct! Resistance is measured in Ohm (Ω).";

document.getElementById("ohmResult").style.color="lime";

}

function ohmWrong(){

document.getElementById("ohmResult").innerHTML=
"❌ Wrong! The correct answer is Ohm (Ω).";

document.getElementById("ohmResult").style.color="red";

}
function calculateCurrent(){

document.getElementById("ohmsAnswer").innerHTML=
"I = V / R = 12 / 4 = <br><br><b>3 Ampere</b>";

}

function meterCorrect(){

document.getElementById("meterResult").innerHTML=
"✅ Correct! Ammeter measures Electric Current.";

document.getElementById("meterResult").style.color="lime";

}

function meterWrong(){

document.getElementById("meterResult").innerHTML=
"❌ Wrong! Current is measured using an Ammeter.";

document.getElementById("meterResult").style.color="red";

}

function parallelCorrect(){

document.getElementById("parallelResult").innerHTML=
"✅ Correct! House wiring uses Parallel Circuits.";

document.getElementById("parallelResult").style.color="lime";

}

function parallelWrong(){

document.getElementById("parallelResult").innerHTML=
"❌ Wrong! House wiring uses Parallel Circuits.";

document.getElementById("parallelResult").style.color="red";

}
function toggleAnswer(id, button){

let answer = document.getElementById(id);

if(answer.style.display==="none"){

answer.style.display="block";

button.innerHTML="🙈 Hide Answer";

}else{

answer.style.display="none";

button.innerHTML="👀 Show Answer";

}

}
function explainMagnetism(){

let text="Electromagnetism is the study of electricity and magnetism. Every magnet has two poles called North Pole and South Pole. Like poles repel and unlike poles attract.";

document.getElementById("magnetAI").style.display="block";

document.getElementById("magnetAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function poleCorrect(){

document.getElementById("poleResult").innerHTML=
"✅ Correct! North Pole and South Pole attract each other.";

document.getElementById("poleResult").style.color="lime";

}

function poleWrong(){

document.getElementById("poleResult").innerHTML=
"❌ Wrong! Unlike poles attract and like poles repel.";

document.getElementById("poleResult").style.color="red";

}
function electromagnetOn(){

document.getElementById("magnetState").innerHTML="🧲 ON";

document.getElementById("magnetMessage").innerHTML=
"✅ Current flows through the coil. The soft iron core becomes an electromagnet.";

document.getElementById("magnetMessage").style.color="lime";

}

function oerstedCorrect(){

document.getElementById("oerstedResult").innerHTML=
"✅ Correct! Oersted discovered that electric current produces a magnetic field.";

document.getElementById("oerstedResult").style.color="lime";

}

function oerstedWrong(){

document.getElementById("oerstedResult").innerHTML=
"❌ Wrong! The correct answer is Oersted.";

document.getElementById("oerstedResult").style.color="red";

}
function startMotor(){

document.getElementById("motorState").innerHTML="⚙ RUNNING";

document.getElementById("motorText").innerHTML=
"✅ Electrical energy is converted into Mechanical energy.";

document.getElementById("motorText").style.color="lime";

}

function startGenerator(){

document.getElementById("generatorState").innerHTML="💡 Electricity Produced";

document.getElementById("generatorText").innerHTML=
"✅ Mechanical energy is converted into Electrical energy.";

document.getElementById("generatorText").style.color="lime";

}

function faradayCorrect(){

document.getElementById("faradayResult").innerHTML=
"✅ Correct! Michael Faraday discovered Electromagnetic Induction.";

document.getElementById("faradayResult").style.color="lime";

}

function faradayWrong(){

document.getElementById("faradayResult").innerHTML=
"❌ Wrong! The correct answer is Michael Faraday.";

document.getElementById("faradayResult").style.color="red";

}
function explainCarbon(){

let text="Carbon is one of the most important elements. It has atomic number six and valency four. Carbon forms covalent bonds and shows catenation, which helps it form millions of compounds.";

document.getElementById("carbonAI").style.display="block";

document.getElementById("carbonAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function carbonCorrect(){

document.getElementById("carbonResult").innerHTML=
"✅ Correct! Carbon has valency 4.";

document.getElementById("carbonResult").style.color="lime";

}

function carbonWrong(){

document.getElementById("carbonResult").innerHTML=
"❌ Wrong! Carbon has valency 4.";

document.getElementById("carbonResult").style.color="red";

}
function diamondCorrect(){

document.getElementById("diamondResult").innerHTML=
"✅ Correct! Diamond is the hardest natural substance.";

document.getElementById("diamondResult").style.color="lime";

}

function diamondWrong(){

document.getElementById("diamondResult").innerHTML=
"❌ Wrong! The correct answer is Diamond.";

document.getElementById("diamondResult").style.color="red";

}
function acidCorrect(){

document.getElementById("acidResult").innerHTML=
"✅ Correct! Vinegar contains Ethanoic Acid.";

document.getElementById("acidResult").style.color="lime";

}

function acidWrong(){

document.getElementById("acidResult").innerHTML=
"❌ Wrong! The correct answer is Ethanoic Acid.";

document.getElementById("acidResult").style.color="red";

}

function alcoholCorrect(){

document.getElementById("alcoholResult").innerHTML=
"✅ Correct! Ethanol contains the -OH functional group.";

document.getElementById("alcoholResult").style.color="lime";

}

function alcoholWrong(){

document.getElementById("alcoholResult").innerHTML=
"❌ Wrong! The correct answer is -OH.";

document.getElementById("alcoholResult").style.color="red";

}
function explainEnvironment(){

let text="Environment includes all living and non living things around us. Living organisms are called biotic components and non living things like air, water and soil are called abiotic components. Together they form an ecosystem.";

document.getElementById("environmentAI").style.display="block";

document.getElementById("environmentAI").innerHTML="<p>"+text+"</p>";

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=0.9;

window.speechSynthesis.cancel();

window.speechSynthesis.speak(speech);

}

function environmentCorrect(){

document.getElementById("environmentResult").innerHTML=
"✅ Correct! Water is an abiotic component.";

document.getElementById("environmentResult").style.color="lime";

}

function environmentWrong(){

document.getElementById("environmentResult").innerHTML=
"❌ Wrong! The correct answer is Water.";

document.getElementById("environmentResult").style.color="red";

}
function bioCorrect(){

document.getElementById("bioResult").innerHTML=
"✅ Correct! Leaves are biodegradable.";

document.getElementById("bioResult").style.color="lime";

}

function bioWrong(){

document.getElementById("bioResult").innerHTML=
"❌ Wrong! Plastic and Glass are non-biodegradable.";

document.getElementById("bioResult").style.color="red";

}
function warmingCorrect(){

document.getElementById("warmingResult").innerHTML =
"✅ Correct! Carbon dioxide is the major greenhouse gas responsible for global warming.";

document.getElementById("warmingResult").style.color="lime";

}

function warmingWrong(){

document.getElementById("warmingResult").innerHTML =
"❌ Wrong! The correct answer is Carbon Dioxide (CO₂).";

document.getElementById("warmingResult").style.color="red";

}