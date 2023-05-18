// Landing Page Navigator 
// @GydruS 2023 apr 22
//
// Full descr-doc-comment will be here l8er, maybe...

/*

Sample usage code:  
------------------

$(document).ready(function(){
	var lpn = new LPNavigator();
	$('#test').click(function(){lpn.scrollDown(2);});
});

*/

function LPNavigator(anchorSelector) {
    this.anchorSelector = anchorSelector || '.screen';
	this.anchorsCollection = [];
	this.screenIndex = 0;
	this.maxScreenIndex = 0;
	
    this.init();
    
    return this;
}

LPNavigator.prototype = {

	scrollTo: function(screenIdx) {
		var el = this.anchorsCollection[screenIdx];
		if (el) {
			el.scrollIntoView({behavior: 'smooth', block: "start", inline: "start"});
			this.screenIndex = screenIdx;
			if (this.onShowScreen) this.onShowScreen(screenIdx);
			return true;
		}
		return false;
	},

	scrollDown: function(steps) {
		steps = steps || 1;
		if (this.screenIndex < this.maxScreenIndex) {
			return this.scrollTo(this.screenIndex+steps);
		}
		return false;
	},

	scrollUp: function(steps) {
		steps = steps || 1;
		if (this.screenIndex > 0) {
			return this.scrollTo(this.screenIndex-steps);
		}
		return false;
	},
	
	init: function() {
		var self = this;
		
		this.anchorsCollection = $(this.anchorSelector);
		this.maxScreenIndex = this.anchorsCollection.length;
		
		this.screenIndex = this.getActiveScreenIndex();
		
		document.onkeydown = function (event) {
			switch (event.key) {
				case 'ArrowUp':
				case 'ArrowLeft':
					if (self.scrollUp()) event.preventDefault();
					break;
				case 'ArrowDown':
				case 'ArrowRight':
					if (self.scrollDown()) event.preventDefault();
					break;
			}
		};

		window.addEventListener("wheel", function (event) {
			if (event.deltaY > 0) {
				if (self.scrollDown()) event.preventDefault();
			}
			else {
				if (self.scrollUp()) event.preventDefault();
			}
		}, {passive: false} );
	},
	
	getActiveScreenIndex: function() {
		var result = 0;
		var pageTop = $(document).scrollTop();
		
		for (var i = this.anchorsCollection.length-1; i >= 0 ; i--) {
			var elTop = $(this.anchorsCollection[i]).offset().top;
			if (elTop <= pageTop) {
				result = i;
				break;
			}
		}
		
		return result;
	},
	
	onShowScreen: function(screenIndex) {
		
	}

};

