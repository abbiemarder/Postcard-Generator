let states = document.getElementById('states');
states.onchange = function() {
     //Joinging a string 'state index' and adding it to the index of the selected dropdown
    console.log('states index:' + states.selectedIndex);
   //Joining  a string 'state index' and adding it to the TEXT value of the selected option
    console.log('states index:' + states.options[states.selectedIndex].text);
     //Provides image for each state that is selected in console. 
    console.log('img/' + states.value + '@2x.jpg');
   //Changes the background image of each destination to their geographical location
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
    //Select the innerHTML Element with the ID of 'state-heading' and assign it the value of the selected state from the drop down menu
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
    //Selects the innerHTML greeting and presents the 'Greetings from:' text
    document.getElementById('greeting').innerHTML ='Greetings from:';
}