
//variables to track these states  //This is also known as 'state management'
var currentSongNumber = 1;     
var willLoop = 0;           
var willShuffle = 0; // will use this soon


//**********************Songs Details***************************************************************************************
var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image' : 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image' : 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image' : 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image' : 'song4.jpg'
    }];
//**************************************************************************************************************************

//************Addind togglesong() function to play and pause the song
    function toggleSong() 
    {
      var song = document.querySelector('audio'); //***Selecting audio tag
      if(song.paused == true)   //*** if song is paused
      {    
      $('.play-icon').removeClass('fa-play').addClass('fa-pause');
      song.play();    // ***Then play the song
      }
      else 
      {
      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
      song.pause();   //*** Otherwise pause the song
      }
    } 
//*******************************************************************      

/*
// ARRAY variable to store music song
var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
*/

/*
//***********************writing different code for each song to play*********************************************
$('#song1').click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;    //storing source of current song in currentSong variable
  if(currentSong.search(fileNames[0]) != -1)  //if the current song text is similar to fileNames[0] then call the toggleSong fxn
  {
    //console.log(audio.paused)
    // audio.play();
    //console.log('If statement executing');
    toggleSong();    // calling toggleSong() fxn
  }
  else    //else audio ke source main fileNmaes[0] dal dena then apply toggleSong fxn
  {
   //console.log('Else statement executing');
   audio.src= fileNames[0];
   toggleSong();
  }
});

$('#song2').click(function() {
var audio = document.querySelector('audio');
audio.src = fileNames[1];
toggleSong();
});

$('#song3').click(function() {
var audio = document.querySelector('audio');
audio.src = fileNames[2];
toggleSong();
});

$('#song4').click(function() {
var audio = document.querySelector('audio');
audio.src = fileNames[3];
toggleSong();
});
//******************************************************************************************************
*/

//***********************************************************************************************
function changeCurrentSongDetails(songObj) 
{
    $('.current-song-image').attr('src','img/' + songObj.image) //1. using jQuery to select the element with class 'current-song-image'
                                                                //2. Then we are setting it's src attribute to something (.attr('src',...)
                                                                //3. The src is made of two strings added together: folder name + fileName
                                                                //4. This src attribute has a value of img/song1.jpg or whatever songObj.image's value is 
    $('.current-song-name').text(songObj.name)      
    $('.current-song-album').text(songObj.album)
}
//*****************************************************************************************************


//********************calling all the songs through a single fxn addSongNameClickEvent()************** 
function addSongNameClickEvent(songObj, position)  //addSongNameClickEvent fxn getting songName and positon as a parameter 
{                              //then the condition is checked, if the condition is satisfied, only then the code inside the curly braces is executed
  var songName = songObj.fileName; // New Variable 
  var id = '#song' + position;  //storing song id in variable id
  $(id).click(function()    //So if position = 1, the value in our 'id' variable is #song1
  {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;    //storing source of current song in currentSong variable
  if(currentSong.search(songName) != -1)  //if the current song text is similar to fileNames[0] then call the toggleSong fxn
  {
    //console.log(audio.paused)
    // audio.play();
    //console.log('If statement executing');
    toggleSong();    // calling toggleSong() fxn
  }
  else    //else audio ke source main fileNmaes[0] dal dena then apply toggleSong fxn
  {
   //console.log('Else statement executing');
   audio.src= songName;
   toggleSong();
   changeCurrentSongDetails(songObj);    //calling changeCurrentSongDetails() fxn and passing songObj as parameter which consist 0f complete song details
  }
  });
}


//******************************************************************
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) 
        {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } 
        else 
          {
            $('#name-input').addClass('error');
          }
    });
//******************************************************************

//************songs play in contionous loop**********************************************
$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')   //toggle class ko add or remove krega
    willLoop = 1 - willLoop;           //It changes the value of the variable willLoop
});
//******************************************************************************************

//*********play song randomly in loop*********************************************************
$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});
//*********************************************************************************************

// ********play icon or pause icon is clicked then play/pause the song **********
    $('.play-icon').on('click', function() 
    {
        toggleSong();
    });
//*******************************************************************************

// ******** if space bar is clicked then play/pause the song  *************
    $('body').on('keypress', function(event)  //event getting a no. of info  
    {
      // console.log(event);
      var target = event.target;       //1. Save the target of the event in a variable
                                       //The target is the place where the event took place
        if (event.keyCode == 32 && target.tagName !='INPUT')  //This condition first checks if the spacebar key is pressed // Don't forget to write the tag name in CAPS
                                                                //Then it checks if the place where the event occurred had an input tag or not        
        {

            toggleSong();
        }
    });
//*************************************************************************

//************converting time from seconds to Hr:min:sec ******************
function fancyTimeFormat(time)  //getting currentTime and duration values from updateCurrentTime() fxn
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);          // 1 hr=3600 sec
    var mins = ~~((time % 3600) / 60); //  1 min= 60 sec
    var secs = time % 60;              

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
//***************************************************************************

//***************updateCurrentTime() function*******************************************************************************
function updateCurrentTime() {
var song = document.querySelector('audio');
//console.log(song.currentTime);
//console.log(song.duration);
var currentTime = Math.floor(song.currentTime);  //current Time of song is stored in variable
currentTime = fancyTimeFormat(currentTime);  //passing and getting currentTime in fancyTimeFormat
var duration = Math.floor(song.duration);  // Total duration of song is stored in variable
duration = fancyTimeFormat(duration);//passing and getting duration in fancyTimeFormat
$('.time-elapsed').text(currentTime); 
$('.song-duration').text(duration);
}   
//***************************************************************************************************************************

//***********window.onload fxn to call updateCurrentTime() fxn***************************************************************


window.onload = function()   
{ 
updateCurrentTime();  //Now as soon as our website is loaded, updateCurrentTime runs and then after every 1 second, setInterval makes it run again
changeCurrentSongDetails(songs[0]);
setInterval(function()    // code bar-bar run hoga after 1 second 
{
updateCurrentTime();    //Here only the updateCurrentTime() fxn is called
},1000);

for(var i =0; i < songs.length;i++) //songs.length=length of the OBJECT 'songs'
  {
    var obj = songs[i];            //storing i value in 'obj' variable
    var name = '#song' + (i+1);   //storing id of <div class="song" id="song1" >
    var song = $(name);             //storing values that comes under name=id '#song_X'
    song.find('.song-name').text(obj.name);    //finding song name under class .song-name and getting key value of object 'songs' 
    song.find('.song-artist').text(obj.artist);
    song.find('.song-album').text(obj.album);
    song.find('.song-length').text(obj.duration);
    addSongNameClickEvent(obj,i+1);  //calling addSongNameClickEvent() fxn and passing parameter song and its position
    }

if (window['webkitSpeechRecognition']) {
    var speechRecognizer = new webkitSpeechRecognition();
    // recognition will not end when user stops speaking if set to true
    speechRecognizer.continuous = true;
    // process the request while the user is speaking
    // and their commands are final. Set to false by default
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = "en-US";
    var currentCommands = ['play', 'stop', 'pause', 'next', 'previous'],
        results = [],
        timeoutSet = false;

    speechRecognizer.onresult = function (evt) {
     // audioPlayer.toggleSpinner(true);
      results.push(evt.results);     //The push() method adds new items to the end of an array, and returns the new length.
      if (!timeoutSet) {
        setTimeout(function() {     //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
          timeoutSet = false;
          results.reverse();       //The reverse() method reverses the order of the elements in an array.
          try {
            results.forEach(function (val, i) {   //The forEach() method calls a provided function once for each element in an array, in order.
              var el = val[0][0].transcript.toLowerCase();
              if (currentCommands.indexOf(el.split(" ")[0]) !== -1) {  //split() method is used to split a string into an array of substrings, and returns the new array.
                                                                    //indexOf() method tells index of
                speechRecognizer.abort();
                //audioPlayer.processCommands(el);
                //audioPlayer.toggleSpinner();
                addSongNameClickEvent(songs[0],1);
                results = [];
                throw new BreakLoopException;

              }
              if (i === 0) {
                //audioPlayer.processCommands(el);
                speechRecognizer.abort();
                //audioPlayer.toggleSpinner();
                results = [];
              }
            });
          }
          catch(e) {return e;}
        }, 3000)
      }

      timeoutSet = true;
    }
    speechRecognizer.onend = function () {
      speechRecognizer.start();
    }

    speechRecognizer.start();
  }
  else {
    alert("Your browser does not support the Web Speech API");
  }

/*      var r = document.getElementById('result');

      function startConverting () {
        if('webkitSpeechRecognition' in window){
          var speechRecognizer = new webkitSpeechRecognition();
          speechRecognizer.continuous = true;
          speechRecognizer.interimResults = true;
          speechRecognizer.lang = 'en-IN';
          speechRecognizer.start();

          var finalTranscripts = '';

          speechRecognizer.onresult = function(event){
            var interimTranscripts = '';
            for(var i = event.resultIndex; i < event.results.length; i++){
              var transcript = event.results[i][0].transcript;
              transcript.replace("\n", "<br>");
              if(event.results[i].isFinal){
                finalTranscripts += transcript;
              }else{
                interimTranscripts += transcript;
              }
            }
            r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
          };
          speechRecognizer.onerror = function (event) {
          };
        }else{
          r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
        }
      }
*/
}
//***********************************************************************************************

//***************window.onload function to display details of songs******************************   
/*window.onload = function() 
{
  changeCurrentSongDetails(songs[0]);    //1. we are showing the song details of the first song by default.
                                          //2. songs[0] gives us the song object for the first song!
  for(var i =0; i < songs.length;i++) //songs.length=length of the OBJECT 'songs'
  {
    var obj = songs[i];            //storing i value in 'obj' variable
    var name = '#song' + (i+1);   //storing id of <div class="song" id="song1" >
    var song = $(name);             //storing values that comes under name=id '#song_X'
    song.find('.song-name').text(obj.name);    //finding song name under class .song-name and getting key value of object 'songs' 
    song.find('.song-artist').text(obj.artist);
    song.find('.song-album').text(obj.album);
    song.find('.song-length').text(obj.duration);
    addSongNameClickEvent(obj,i+1);  //calling addSongNameClickEvent() fxn and passing parameter song and its position
    }
}
*///***********************************************************************************************

$('#songs').DataTable(        //initializing DataTables
  {
        paging: false        //turn off the page count by passing object in DataTable() fxn
    }
);

/*function timeJump()             //jumps to the first end of the song 
{
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
*/
/*
$('.fa-step-forward').on('click',function() {
    var audio = document.querySelector('audio');
    var nextSongObj = songs[currentSongNumber];
    audio.src = nextSongObj.fileName;
    changeCurrentSongDetails(nextSongObj);
    currentSongNumber =currentSongNumber-1;
});
*///*******************playing next song********************************************

//*********************************************************************************************************************
$('audio').on('ended',function()    //on('ended') event tells the end of the audio or video
{                                   
    var audio = document.querySelector('audio');

    if (willShuffle == 1)          //if shuffle of song is on
    {
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); //Calling our fxn from stackoverflow 
                                                         //obtain a random integer number in a certain range [1, 4], excluding one value currentSongNumber
                                                //generate it between 1 and 4-1, and then increment it by one if it's higher than or equal to currentSongNumber 
        var nextSongObj = songs[nextSongNumber-1];        
        audio.src = nextSongObj.fileName;     //updating source of song
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }

    else if(currentSongNumber < 4)  //this code will just play the next song after the current song ends
    {                             //means 1st to last song tk loop main chlega 
                                //lekin last song pr jakr loop ruk jayega     
        var nextSongObj = songs[currentSongNumber]; //getting currentsong info from the 'songs' ARRAY
                              //initially currentSongNumber=1
        audio.src = nextSongObj.fileName;        //changing the source of the song
        toggleSong();
        changeCurrentSongDetails(nextSongObj);     //updating image
        currentSongNumber = currentSongNumber + 1;   //changing current song number
    }

    else if(willLoop == 1)   //user is on the last song and willLoop is on 
    {                       //user wants after last song first song will play
        var nextSongObj = songs[0];  //nextSongObj store info of first song which is in ARRAY 'songs[0]'
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj); //passing song info to changeCurrentSongDetails() fxn
        currentSongNumber =  1;   //update  variable value
    }

    else       //The else condition runs if we are on the last song
    {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');   //When the last song ends, it changes the play icon 
        audio.currentTime = 0;    //resets the song currentTime to zero
    }
})
//*****************************************************************************************************************************