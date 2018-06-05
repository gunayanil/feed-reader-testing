 /* All tests within the $() function to ensure they don't run
 until the DOM is ready */
 $(function() {
 	//RSS Feed Definitions
 	describe('RSS Feeds', function() {
 		//All feeds are defined and not empty
 		it('are defined', function() {
 			expect(allFeeds).toBeDefined();
 			expect(allFeeds.length).not.toBe(0);
 		});
 		//URL defined and not empty
 		it('url defined', function() {
 			for (let i = 0; i < allFeeds.length; i++) {
 				expect(allFeeds[i].url).toBeDefined();
 				expect(allFeeds[i].url.length).not.toBe(0);
 			}
 		});
 		//Name defined and not empty
 		it('name defined', function() {
 			for (let i = 0; i < allFeeds.length; i++) {
 				expect(allFeeds[i].name).toBeDefined();
 				expect(allFeeds[i].name.length).not.toBe(0);
 			}
 		});
 	});

 	//Menu Features
 	describe('The menu', function() {
 		const hiddenMenu = document.querySelector('.menu-hidden');
 		const hamburgerIcon = document.querySelector('.menu-icon-link');
 		//Menu element is hidden by default
 		it('should be hidden by default', function() {
 			expect(hiddenMenu.classList.contains('menu-hidden')).toBe(true);
 		});
 		//Menu visibility changes
 		it('should have it visibility toggled', function() {
 			hamburgerIcon.click();
 			expect(hiddenMenu.classList.contains('menu-hidden')).toBe(false);
 			hamburgerIcon.click();
 			expect(hiddenMenu.classList.contains('menu-hidden')).toBe(true);
 		});
 	});

 	//Initial Entries Tests
 	describe('Initial Entries', function() {
 		const entry = document.querySelector('.feed .entry');
 		//loadFeed() is asynchronous
 		beforeEach(function(done) {
 			loadFeed(0, done);
 		});
 		//loadFeed() function is called and completes its work
 		it('at least one entry is there(in the feed container)', function() {
 			expect(entry).not.toBe(0);
 		});

 	});

 	//New Feed Selection Tests
 	describe('New Feed Selection', function(){
 		let oldContent, newContent;
 		//Get default(0) and new(1) feed
 		beforeEach(function(done) {
 			loadFeed(0, function(){
 				oldContent = document.querySelector('.feed').innerHTML;

 				loadFeed(1, function() {
 					newContent = document.querySelector('.feed').innerHTML;
 					done();
 				});
 			});
 		});
 		//Check the content changes
 		it('changes the content', function() {
 			expect(newContent).not.toBe(oldContent);
 		});
 	});

 }());