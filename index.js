import * as text from "./text.js";

//Made by: Saad Haider

//~~~~~The Start function. The website loads from here, starting at the home page. Navigation buttons are loaded.~~~~~
function start() {
  homePage()

  const conditionBtn = document.getElementById('condition');
  conditionBtn.onclick = () => {
    if (conditionBtn.innerHTML == "Return to Home") {homePage();}
    else {createPage_1("condition_cards");}
  }
  
  const how2PlayBtn = document.getElementById('how2Play');
  how2PlayBtn.onclick = () => {
    if (how2PlayBtn.innerHTML == "Return to Home") {homePage();}
    else {how2PlayPage();}
  }

  const mishmashBtn = document.getElementById('mishmash');
  mishmashBtn.onclick = () => {
    if (mishmashBtn.innerHTML == "Return to Home") {homePage();}
    else {createPage_1("mishmash_cards");}
  }
}



//~~~~~Display the Home page~~~~~
function homePage() {
  navReset("home");

  const content_I = document.getElementById('content_I');
  content_I.innerHTML = ``;
  const prompts = document.getElementById('prompts');
  prompts.innerHTML = ``;
  const content_II = document.getElementById('content_II');
  content_II.innerHTML = text.home_page_txt;
  const inputs = document.getElementById('inputs');
  inputs.innerHTML = ``;
}



//~~~~~Display the How to Play page~~~~~
function how2PlayPage() {
  navReset('how2Play');

  const content_I = document.getElementById('content_I');
  content_I.innerHTML = ``;
  const prompts = document.getElementById('prompts');
  prompts.innerHTML = ``;
  const content_II = document.getElementById('content_II');
  content_II.innerHTML = text.how2play_page_txt;
  const inputs = document.getElementById('inputs');
  inputs.innerHTML = ``;
}



//~~~~~Give prompts (condition or mishmash) to the user to choose from~~~~~
async function createPage_1(db) {
  //check database that is being called
  if (db == "condition_cards") {navReset('condition');}
  else if (db == "mishmash_cards") {navReset('mishmash');}
  else {return console.log( db + " db has no value :(" );}

  const card_type = (currPage == "condition") ? "[CONDITION]" : "[MISHMASH]"; 
  const content_I = document.getElementById('content_I');
  content_I.innerHTML = `<br/>`;

  //fetch prompts
  const response = await fetch(
    "http://localhost:8080/projects/cis435_project4/index.php",
    {
      method: 'POST',
      headers: {
          'Accept' : 'application/json'
      },
      body: JSON.stringify({db: db})
    }
  );
  
  resp_data = await response.json();  //asynchronous so we await the json data
  if (resp_data.length != 0) {
    const prompts = document.getElementById('prompts');
    prompts.innerHTML =  `<section class="card" id="prompt1"></section>
                          <section class="card" id="prompt2"></section>
                          <section class="card" id="prompt3"></section>
                          <section class="card" id="prompt4"></section>`
    
    const prompt1 = document.getElementById('prompt1');
    const prompt2 = document.getElementById('prompt2');
    const prompt3 = document.getElementById('prompt3');
    const prompt4 = document.getElementById('prompt4');


    //Randomly choose prompts!
    resp_randomizer = []; 
    for (let i = 0; i < resp_data.length; i++) { resp_randomizer.push(i); }   //fill randomizer with all ID numbers
    
    rand_prompts = [];
    for (let i = 0; i < 4; i++) {
      //choose a random ID in the randomizer array
      let rIndex = Math.floor(Math.random() * resp_randomizer.length);
      rand_prompts.push(resp_randomizer[rIndex]);

      //then pop that ID (done by overwriting it with the last variable in the array, since order won't matter)
      resp_randomizer[rIndex] = resp_randomizer[resp_randomizer.length-1];
      resp_randomizer.pop();
    }
    prompt1.innerHTML = `<p>  <br/><b>${card_type}</b>  <br/><br/><br/>${resp_data[rand_prompts[0]].Name}</p>`;
    prompt2.innerHTML = `<p>  <br/><b>${card_type}</b>  <br/><br/><br/>${resp_data[rand_prompts[1]].Name}</p>`;
    prompt3.innerHTML = `<p>  <br/><b>${card_type}</b>  <br/><br/><br/>${resp_data[rand_prompts[2]].Name}</p>`;
    prompt4.innerHTML = `<p>  <br/><b>${card_type}</b>  <br/><br/><br/>${resp_data[rand_prompts[3]].Name}</p>`;
  }
  else {
    const error = document.getElementById('error');
    error.innerHTML = "This shouldn't happen!";
  }

  //display text and dropdown menus, next button
  const content_II = document.getElementById('content_II');
  content_II.innerHTML = (currPage == 'condition') ? text.condition_page1_txt: text.mishmash_page1_txt;

  const inputs = document.getElementById('inputs');
  inputs.innerHTML = `
<!--It seems you need to manually insert id into the text input, otherwise label's "for" attribute won't match it-->

                      <section class="grid">
                        <label for="selectPrompt1">First Prompt: </label>
                        <select required id="selectPrompt1">
                          <option value=-1>--Please choose an option--</option>
                          <option value=0>${resp_data[rand_prompts[0]].Name}</option>
                          <option value=1>${resp_data[rand_prompts[1]].Name}</option>
                          <option value=2>${resp_data[rand_prompts[2]].Name}</option>
                          <option value=3>${resp_data[rand_prompts[3]].Name}</option>
                        </select>
                        <label for="selectPrompt2">Second Prompt: &nbsp</label>
                        <select required id="selectPrompt2">
                          <option value=-1>--Please choose an option--</option>
                          <option value=0>${resp_data[rand_prompts[0]].Name}</option>
                          <option value=1>${resp_data[rand_prompts[1]].Name}</option>
                          <option value=2>${resp_data[rand_prompts[2]].Name}</option>
                          <option value=3>${resp_data[rand_prompts[3]].Name}</option>
                        </select>
                      </section>
                      <br/>
                      <button class="flex" id="next1">Next</button>`;
  const nextBtn = document.getElementById('next1');
  nextBtn.onclick = createPage_2;
}



//~~~~~Allow user to create a fusion card out of the prompts~~~~~
function createPage_2(e) {
  const choice1 = document.getElementById("selectPrompt1");
  const choice2 = document.getElementById("selectPrompt2");
  console.log(`Choice I: has value ${choice1.value} and text "${choice1.options[choice1.selectedIndex].text}"`)
  console.log(`Choice II: has value ${choice2.value} and text "${choice2.options[choice2.selectedIndex].text}"`)
  if (choice1.value == -1 || choice2.value == -1) {
    alert("Please use both of the dropdown menus to select two of the available prompts.");
    return;
  }
  if (choice1.value == choice2.value) {
    alert("You cannot select the same prompt twice. Please change one of your selected prompts.");
    return;
  }


  //if no errors, change page to have selected prompts and textboxes for card customization
  const card_type = (currPage == "condition") ? "[CONDITION]" : "[MISHMASH]"; 
  chosen_prompts = [choice1.options[choice1.selectedIndex].text, choice2.options[choice2.selectedIndex].text];

  const prompts = document.getElementById('prompts');
  prompts.innerHTML =  `<section class="card" id="prompt1"></section>
                        <section class="card" id="prompt2"></section>`;

  const prompt1 = document.getElementById('prompt1');
  const prompt2 = document.getElementById('prompt2');
  prompt1.innerHTML = `<p>  <br/><b>${card_type}</b>  <br/><br/><br/>${chosen_prompts[0]}</p>`;
  prompt2.innerHTML = `<p>  <br/><b>${card_type}</b>  <br/><br/><br/>${chosen_prompts[1]}</p>`;                      


  const content_II = document.getElementById('content_II');
  content_II.innerHTML = (currPage == 'condition') ? text.condition_page2_txt: text.mishmash_page2_txt;

  const inputs = document.getElementById('inputs');
  inputs.innerHTML = `<section class="grid">
                        <label for="name">Name: </label>
                            <input type="text" id="name" style="width: 800px">
                        <label for="desc">Description: &nbsp</label>
                            <input type="text" id="desc" style="width: 800px">
                      </section>
                      <br/>
                      <button class="flex" id="next2">Next</button>`;


  const nextBtn = document.getElementById('next2');
  nextBtn.onclick = createPage_3;
}



//~~~~~Display the finished fusion card~~~~~
function createPage_3(e) {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  if (name == "" || desc == "") {
    alert("Please fill in both the name and description textboxes for your fusion card.");
    return;
  }
  if (name.length > 64 && desc.length > 320) {
    alert(`You've exceeded the limit size for BOTH textboxes (Name: ${name.length} characters), Description: ${desc.length} characters). Please decrease the length for both.`);
    return;
  }
  if (name.length > 64) {
    alert(`You've exceeded the limit size for your card's NAME (${name.length} characters). Please decrease the length.`);
    return;
  }
  if (desc.length > 320) {
    alert(`You've exceeded the limit size for your card's DESCRIPTION (${desc.length} characters). Please decrease the length.`);
    return;
  }


  //if no errors, go to finished card page
  console.log(desc.length);
  const height = ((desc.length > 240 && name.length > 48) || (desc.length > 280 && name.length > 40)) ? "32em" : "28em";
  const card_type = (currPage == "condition") ? "[FUSION CONDITION]" : "[FUSION MISHMASH]";
  const prompts = document.getElementById('prompts');
  prompts.innerHTML = `<section class="card" style="height: ${height}; ">
                          <p>  <br/><b>${card_type}</b></p>
                          <h3>${name}</h3>
                          <p>(Made from "${chosen_prompts[0]}" and "${chosen_prompts[1]}" cards)<br/><br/></p>
                          <p><i>${desc}</i></p>
                       </section>`;
  
  const content_II = document.getElementById('content_II');
  content_II.innerHTML = (currPage == 'condition') ? text.condition_page3_txt: text.mishmash_page3_txt;

  const inputs = document.getElementById('inputs');
  inputs.innerHTML = (currPage == "condition") ? `<button class="flex" id="next2">Create Another Condition</button>` 
    : `<button class="flex" id="next2">Create Another Mishmash</button>`;

  const nextBtn = document.getElementById('next2');
  nextBtn.onclick = loopCreatePage;
}



//~~~~~Go back to createPage_1, depending on whether you were making condition or mishmash cards~~~~~
function loopCreatePage(e) {
  const conditionBtn = document.getElementById('condition');
  if (conditionBtn.innerHTML == "Return to Home") {createPage_1("condition_cards");}
  else {createPage_1("mishmash_cards");}
}



//~~~~~Change nav button text as needed~~~~~
function navReset(pageType) {
  const conditionBtn = document.getElementById('condition');
  const how2PlayBtn = document.getElementById('how2Play');
  const mishmashBtn = document.getElementById('mishmash');

  conditionBtn.innerHTML = (pageType == "condition") ? "Return to Home" : "Create a Condition";
  how2PlayBtn.innerHTML = (pageType == "how2Play") ? "Return to Home" : "How To Play";
  mishmashBtn.innerHTML = (pageType == "mishmash") ? "Return to Home" :"Create a Mishmash";
  
  currPage = pageType;
}



//~~~~~START + global variables~~~~~
var resp_data = "";
var resp_randomizer = [];
var rand_prompts = [];
var chosen_prompts = [];
var currPage = "home";
window.onload = start;