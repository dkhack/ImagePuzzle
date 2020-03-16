$(document).ready(function(){ 
	//  global variables
	var piececlicked = false;
	var firstpiececlicked; 
	var secondpiececlicked; 
	var topPosFir = 0;
	var leftPosFir = 0;
	var topPosSec = 0;
	var leftPosSec = 0;
	var shuffle = Math.floor((Math.random() * 6) + 1);// to get a random value shuffle 
	//var shuffle = 5;
	var moves = 0;
	var sec = 0;

	function shuffleTiles(){   //fun to shuffle the tiles
		if(shuffle == 1){   
			
			$('#tile1').css({top: 338, left: 0});
			$('#tile2').css({top: 0, left: 0});
			$('#tile3').css({top: 338, left: 338});
			$('#tile4').css({top: 0, left: 338});
			$('#tile5').css({top: 338, left: 680});
			$('#tile6').css({top: 0, left: 680});

		} else if(shuffle == 2){
			$('#tile1').css({top: 338, left: 680});
			$('#tile2').css({top: 0, left: 680});
			$('#tile3').css({top: 338, left: 338});
			$('#tile4').css({top: 0, left: 338});
			$('#tile5').css({top: 338, left: 0});
			$('#tile6').css({top: 0, left: 0});

		} else if(shuffle == 3){

			
			$('#tile1').css({top: 0, left: 680});
			$('#tile2').css({top: 338, left: 680});
			$('#tile3').css({top: 0, left: 338});
			$('#tile4').css({top: 338, left: 338});
			$('#tile5').css({top: 0, left: 0});
			$('#tile6').css({top: 338, left: 0});


		} else if(shuffle == 4){
			$('#tile1').css({top: 0, left: 0});
			$('#tile2').css({top: 338, left: 0});
			$('#tile3').css({top: 0, left: 338});
			$('#tile4').css({top: 338, left: 338});
			$('#tile5').css({top: 0, left: 680});
			$('#tile6').css({top: 338, left: 680});
			
		}
		else if(shuffle==5)
		{
			$('#tile1').css({top: 0, left: 680});
			$('#tile2').css({top: 0, left: 0});
			$('#tile3').css({top: 338, left: 338});
			$('#tile4').css({top: 338, left: 680});
			$('#tile5').css({top: 0, left: 338});
			$('#tile6').css({top: 338, left: 0});

			

		}
		else
		{
			$('#tile1').css({top: 338, left: 680});
			$('#tile2').css({top: 338, left: 0});
			$('#tile3').css({top: 338, left: 338});
			$('#tile4').css({top: 0, left: 680});
			$('#tile5').css({top: 0, left: 338});
			$('#tile6').css({top: 0, left: 0});

		}
	}

	$(window).load(function(){
		setTimeout(function(){ // call for Timeout function
			shuffleTiles(); //call for shuffleTIles
			setInterval(function(){ //start timer
				sec++ 
			}, 1000);
		}, 1000);
	});

	// playing

	$('.gamearea').click(function(){

		if(piececlicked == false){  //  no input

			
			firstpiececlicked = $(this).attr('id');
			topPosFir = parseInt($(this).css('top')); 
			leftPosFir = parseInt($(this).css('left')); 

			//  highlight tile
			$(this).addClass('highlight');
			piececlicked = true;

		} else{  //  if the tile is clicked

			
			secondpiececlicked = $(this).attr('id');
			topPosSec = parseInt($(this).css('top')); 
			leftPosSec = parseInt($(this).css('left'));

			//  swap animation
			$('#' + firstpiececlicked).css({'top' : topPosSec , 'left' : leftPosSec});
			$('#' + secondpiececlicked).css({'top' : topPosFir , 'left' : leftPosFir});
			moves++; //increases moves 


			//  Remove the highlight
			$('.gamearea').removeClass('highlight');
			piececlicked = false;

			

			setTimeout(function(){  //validate if the tiles are now in place
				if(
					$('#tile1').css('left') == '0px' && $('#tile1').css('top') == '0px' &&  //condition to satisfy
					$('#tile2').css('left') == '338px' && $('#tile2').css('top') == '0px' &&
					$('#tile3').css('left') == '680px' && $('#tile3').css('top') == '0px' &&
					$('#tile4').css('left') == '0px' && $('#tile4').css('top') == '338px' &&
					$('#tile5').css('left') == '338px' && $('#tile5').css('top') == '338px' &&
					$('#tile6').css('left') == '680px' && $('#tile6').css('top') == '338px' 
				){
					$('p').text('TOTAL TIME: ' + sec + ' SECONDS!  TOTAL MOVES   ' + moves);// replaces how to play 
                    $('div').text(''); //remove  instructions
                    $('h2').text('');
                    $('h1').text('Good Job!')
					$('article').addClass('highlight-2');
                    alert("Good Job! Restart to play again."); //alert they were successfull
                   
                    
					moves = 0;
				}
			}, 1000);

		}

	});  

});

