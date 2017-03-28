jQuery(document).ready() {


  	$('[data-open-modal]').click(function(event) {
  		var modal = $(this).attr('data-open-modal');
  		$('[data-modal='+ modal +']').addClass('open');
  	});

  	$('[data-modal-close]').click(function(){
  		$('.modal').removeClass('open');
  	})


  	var sliders = $('[data-show-slides]');
  	var dict = {};

  	$('[data-slider]').each(function() {
  		// Setting Slider and Slide sizes
  		var currentTranslate = 0;
  		var container = $(this).find('.images_container');
  		var numOfImages = container.find('.slide').length;
  		var numberOfSlidesToShow = $(this).attr('data-show-slides');
  		if(!numberOfSlidesToShow)
  			numberOfSlidesToShow = 1;
  		container.css('width', (numOfImages * 100) + '%');
  		container.find('.slide').css('width', 100 / (numOfImages * numberOfSlidesToShow) + '%');
  		container.attr('slide', 0);
  		if($(this).attr('data-slider-autoplay') == 'true') {
  			// TODO Start Shuffling cycle
  			// setTimeout()
  			// console.log($(this).attr('data-slider-autoplay'));
  				dict[$(this)] = setInterval(function() {
  					autoplay(container)
  				}, 5000);
  			// clearInterval(dict[$(this)])
  		}
  	})
  // $('[data-show-slides]').css('background-color', 'red')
  	// $('p').css('background-color', 'red');
  	// console.log(sliders[0])
  	// sliders[1].css('height', '300px');

  	$('.next').click(function () {
  		container = $(this).parent().find('.images_container');
  		currentSlide = parseInt(container.attr('slide'));
  		numOfImages = container.find('.slide').length;
  		numberOfSlidesToShow = parseInt($(this).parent().attr('data-show-slides'));
  		// console.log(numberOfSlidesToShow)
  		if(!numberOfSlidesToShow)
  			numberOfSlidesToShow = 1;

  		step = 100 / numOfImages;
  		currentTranslate = currentSlide * (step / numberOfSlidesToShow);
  		// console.log( numberOfSlidesToShow + " " + currentSlide + " " + currentTranslate);
  		if(numOfImages == numberOfSlidesToShow)
  			return;
  	  if(currentSlide + numberOfSlidesToShow == numOfImages) {
  	    container.css({"-webkit-transform":"translate(0, 0)",
  	                                "transition-duration": "1.5s",
  	                                "transition-timing-function": "ease-out"});
  	    container.attr('slide', 0);
  	  }

  	  else {
  			if(currentSlide + (2 * numberOfSlidesToShow) - 1 >= numOfImages - 1) {
  				var diff = numOfImages - (currentSlide + numberOfSlidesToShow);
  				currentTranslate += ((step * diff) / numberOfSlidesToShow);
  				console.log(currentTranslate + " " + diff + " " + numberOfSlidesToShow + " " + currentSlide + " " + numOfImages + " " + step);
  				container.attr('slide', parseInt(currentSlide) + diff);
  			}
  			else {
  	    	currentTranslate += step;
  				container.attr('slide', parseInt(currentSlide) + parseInt(numberOfSlidesToShow));
  				console.log(currentTranslate + " " + currentSlide + " " + step);
  			}
  	    container.css({"-webkit-transform":"translate(-" + currentTranslate + "%, 0)",
  	                                "transition-duration": "1.5s",
  	                                "transition-timing-function": "ease-out"});
  	  }
  		// console.log("-------");
  	})

  	$('.prev').click(function () {
  		container = $(this).parent().find('.images_container');
  		currentSlide = parseInt(container.attr('slide'));
  		numOfImages = container.find('.slide').length;
  		numberOfSlidesToShow = parseInt($(this).parent().attr('data-show-slides'));
  		console.log(numberOfSlidesToShow)
  		if(!numberOfSlidesToShow)
  			numberOfSlidesToShow = 1;

  		step = 100 / numOfImages;
  		currentTranslate = currentSlide * (step / numberOfSlidesToShow);
  	  if(currentSlide == 0) {
  	    currentTranslate = (step * (numOfImages - numberOfSlidesToShow) / numberOfSlidesToShow);
  	    container.css({"-webkit-transform":"translate(-" + currentTranslate + "%, 0)",
  	                                "transition-duration": "1.5s",
  	                                "transition-timing-function": "ease-out"});
  			console.log(currentTranslate + " " + step + " " + numberOfSlidesToShow + " 	Here");
  			container.attr('slide', numOfImages - numberOfSlidesToShow);
  	  }

  	  else {
  			if(currentSlide - numberOfSlidesToShow < 0) {
  				var diff = (currentSlide - numberOfSlidesToShow) * -1;
  				currentTranslate -= ((step * (numberOfSlidesToShow - diff)) / numberOfSlidesToShow);
  				container.attr('slide', 0);

  				console.log(currentTranslate + " " + diff + " " + numberOfSlidesToShow + " " + currentSlide + " " + numOfImages + " " + step);
  			}
  			else {
  	    	currentTranslate -= step;

  				console.log(currentTranslate + " " + currentSlide + " " + step + "Here");
  				container.attr('slide', parseInt(currentSlide) - parseInt(numberOfSlidesToShow));
  			}
  			container.css({"-webkit-transform":"translate(-" + currentTranslate + "%, 0)",
  	                                "transition-duration": "1.5s",
  	                                "transition-timing-function": "ease-out"});
  	  }
  				console.log("-------");
  	})


  	function autoplay(container) {
  		currentSlide = parseInt(container.attr('slide'));
  		numOfImages = container.find('.slide').length;
  		numberOfSlidesToShow = parseInt(container.parent().attr('data-show-slides'));
  		// console.log(numberOfSlidesToShow)
  		// console.log(numberOfSlidesToShow);
  		if(!numberOfSlidesToShow)
  			numberOfSlidesToShow = 1;

  		step = 100 / numOfImages;
  		currentTranslate = currentSlide * (step / numberOfSlidesToShow);
  		if(numOfImages == numberOfSlidesToShow)
  			return;
  	  if(currentSlide + numberOfSlidesToShow == numOfImages) {
  	    container.css({"-webkit-transform":"translate(0, 0)",
  	                                "transition-duration": "1.5s",
  	                                "transition-timing-function": "ease-out"});
  	    container.attr('slide', 0);
  	  }

  	  else {
  			if(currentSlide + (2 * numberOfSlidesToShow) - 1 >= numOfImages - 1) {
  				var diff = numOfImages - (currentSlide + numberOfSlidesToShow);
  				currentTranslate += ((step * diff) / numberOfSlidesToShow);
  				// console.log(currentTranslate + " " + diff + " " + numberOfSlidesToShow + " " + currentSlide + " " + numOfImages + " " + step);
  				container.attr('slide', parseInt(currentSlide) + diff);
  			}
  			else {
  	    	currentTranslate += step;
  				container.attr('slide', parseInt(currentSlide) + parseInt(numberOfSlidesToShow));
  				// console.log(currentTranslate + " " + currentSlide + " " + step);
  			}
  	    container.css({"-webkit-transform":"translate(-" + currentTranslate + "%, 0)",
  	                                "transition-duration": "1.5s",
  	                                "transition-timing-function": "ease-out"});
  	  }

  		// setTimeout(autoplay(images_container), 5000);
  	}

  })
