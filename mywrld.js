// ZODIAC INQUIRY CODE
var zodiac = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

function yourSign(){
    var text =   prompt('What is your sign?', '..hope its not Sagittarius :/ ');
  switch(text.toLowerCase()){
    case "gemini":
    text = "How does it feel to know everything?";
    break;
    case "libra":
    text = "Figured out which personality you want yet?";
    break;
    case "aquarius":
    text = "So which emotion are you pretending not to feel today?";
    break;
    case "virgo":
    text = "So who are you deeply criticizing in your heads today?";
    break;
    case "taurus":
    text = "Which one's the vibe these days, super lazy or overly hardworking?";
    break;
    case "capricorn":
    text = "Where do you put your feelings when you're not using them?";
    break;
    case "pisces":
    text = "";
    break;
    case "cancer":
    text = "";
    break;
    case "scorpio":
    text = "Could you please stop looking at me like that?";
    break;
     case "leo":
    text = "Why are you yelling?";
    break;
    case "sagittarius":
    text = "";
    break;
    case "aries":
    text = "";
    break;
    default:
    text = "Oof I guess..";
    break;
}
  document.getElementById("ans").innerHTML = text;
}

//GENIUS API

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar");
xhr.setRequestHeader("x-rapidapi-host", "genius.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "4a6777074cmsh34b248fe8c85057p1e0cfdjsn9a8813ab36d3");

xhr.send(data);

fetch("https://genius.p.rapidapi.com/search?q=Brian%20Adams", {
       "method": "GET",
       "headers": {
              "x-rapidapi-key": "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
              "x-rapidapi-host": "genius.p.rapidapi.com"
       }
})
.then(response => {
       console.log(response);
})
.catch(err => {
       console.error(err);
});

//