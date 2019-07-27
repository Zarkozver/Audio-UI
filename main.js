let r = 33;
let sen = true;
let z_current;
let songs = ["Kuku$%20Klan%20-%20Bode%20Miller.mp3","Aries%20-%20CAROUSEL.mp3","Aries%20-%20SAYONARA.mp3","HIGH5%20-%20Di%20%C4%87e%C5%A1%20ti%20s%20tim.mp3"];
let covers = ["https://e-cdns-images.dzcdn.net/images/cover/04dfa0b579def572e99d3080dae93f8e/500x500.jpg","https://i1.sndcdn.com/artworks-000293872695-1iaqhd-t500x500.jpg","https://m.media-amazon.com/images/I/91dOQKV6YNL._SS500_.jpg","https://f4.bcbits.com/img/a3408304321_10.jpg"];
let fill = document.querySelector('.audio-sen');
let song = new Audio();
let title = document.querySelector('.title');
let i=0
let z;
let vol;
let vole;
let titles = ["Kukus - Bode Miller","Aries - Carousel","Aries - Sayonara","High 5 - Di ces ti sa tim"];
document.querySelector('.title').innerHTML = titles[i];
document.querySelector('.cover').src = covers[i];
song.src = songs[i];
song.volume = 0.5;
let volume_width = document.querySelector('.volume-length-sen');
volume_width.style.width = song.volume*100 + "%";
function Play(){
    song.src = songs[i];
    song.play();
    document.querySelector('.title').innerHTML = titles[i];
    document.querySelector('.cover').src = covers[i];

}

$('.fa-step-forward').click(function(){
    if(i>songs.length-2){
        i=0;
        Play();
    }else{
        i++;
        Play();
    }
});
$('.fa-step-backward').click(function(){
    if(i==0){
        i=songs.length-1;
        Play();
    }else{
        i--;
        Play();
    }
});

song.addEventListener('timeupdate',function(){ 
    let current = Math.round(song.currentTime);
    let whole = Math.round(song.duration);
    let mins = 0;
    let sec =0;

    if(song.currentTime <= 60){
        sec = current;
        if(song.currentTime <= 10){

            document.querySelector('.start').innerHTML = "0:0" + sec;
        }else{
            document.querySelector('.start').innerHTML = "0:" + sec;
        }
    }else{

        mins = Math.round(current/60);
        sec = Math.round(current%60);
        if(sec <= 10){
            document.querySelector('.start').innerHTML = mins + ":0" + sec;
        }else{
            document.querySelector('.start').innerHTML = mins + ":" + sec;
        }

    }

    let duration = Math.round(song.duration);
    let d_min = Math.round(duration/60);
    let d_sec = Math.round(duration%60);
    if(d_sec<=10){
        document.querySelector('.end').innerHTML = d_min + ":0" + d_sec;
    }else{
        document.querySelector('.end').innerHTML = d_min + ":" + d_sec; 
    }
    var position = song.currentTime / song.duration;

    fill.style.width = position * 100 +'%';

    if(current == whole){
    if(i>songs.length-2){
        i=0;
        Play();
    }else{
        i++;
        Play();
    }
    }
    var example = document.querySelector('.audio-length'); 
    example.onclick = function(e) { 
        var x = e.pageX - this.offsetLeft; 
        var y = e.pageY - this.offsetTop; 

        z = (x * 100)/600 +'%';
        z_current = (x/600)*song.duration;
        fill.style.width = z;
        song.currentTime = z_current;
    }

});
if(song.muted == false){
    $('.fa-volume-off').toggleClass('fa-volume-up');
}
$('.fa-volume-off').click(function(){
    if(song.muted == true){
        song.muted = false;
        $(this).toggleClass('fa-volume-up');
    }else if(song.muted == false){
        song.muted = true;
        $(this).toggleClass('fa-volume-up');
    }
}); 
$('.fa-forward').click(function(){
    song.currentTime +=5;

});
$('.fa-backward').click(function(){
    song.currentTime -= 5;

});
$('.fa-play').click(function(){
    if(sen == true){
        song.play();
        $(this).toggleClass('fa-pause');
        sen = false;
    }else if(sen == false){
        song.pause();
        $(this).toggleClass('fa-pause');
        sen = true;
    } 
});
$('.fa-plus').click(function(){
   song.volume += 0.1;
   volume_width.style.width = song.volume*100 + "%";
});
$('.fa-minus').click(function(){
   song.volume -= 0.1;
   volume_width.style.width = song.volume*100 + "%";
});
volume = document.querySelector('.volume-length');
volume.onclick = function(e){
    var x = e.pageX - this.offsetLeft; 
    var y = e.pageY - this.offsetTop; 
    vol = (x * 100)/80 +'%';
    vole = (x/80);
    volume_width.style.width = vol;
    song.volume = vole;
    console.log(x,vole);
}