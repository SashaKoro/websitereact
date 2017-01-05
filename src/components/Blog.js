import React from 'react';
import styled from 'styled-components';

const BlogDiv = styled.div`
  padding-left: 16%;
  padding-right: 16%;
  font-size: 25px;
  padding-bottom: 75px;
  padding-top: 140px;
  background-color: white;
  height: 100%;
  color: #555F61;
  flex: 1;
`;

const BlogHeader = styled.h1`
  text-align: center;
  padding-top: 75px;
`;

const BlogDate = styled.h3`
  padding-top: 105px;
  padding-bottom: 25px;
`;

const Blog = () => {
  return (
    <BlogDiv className="BlogDiv">
      <BlogHeader className="BlogHeader"><b>Welcome to my blog!</b></BlogHeader>
      <BlogDate className="BlogDate"><b>December 29, 2016</b></BlogDate>
      <p>I have spent the last two weeks neck deep in React and React related things. Its been a lot of fun, and I have learned quite a bit. React is a Javascript Library that has been open sourced by Facebook. Its main function is to create user interfaces by putting ‘html’ (JSX) inside your Javascript and using functions to output ‘views’ as opposed to regular outputs. While learning React I have incidentally learned a whole bunch of other stuff on the way. Here are some of the new tools and processes I have come across:</p><br/><p>Linting is the process of running an automated bug and syntax checking program, and it is customizable to the point where you can make it ‘enforce’ your programs to follow best practices. It has been very helpful in catching errors on the fly. I think this is something akin to ‘static type checking’.</p><br/><p>Babel is a Javascript compiler that turns your ES6 (also known as ES2015) code into ES5 so browsers can understand it. ES6 is the latest version of Javascript and it has not been completely implemented by web browsers (especially Internet Explorer) so Babel is a handy tool that ‘transforms’ your ES6 syntax back into understandable ES5 syntax right before shipping it into the browser. Babel also offers something called ‘polyfill’, from my understanding this is to enable 100% ES6 emulation at the cost of large files (50kb) is the number I have heard thrown around.</p><br/><p>Webpack is code bundler. It takes all of your nicely modulated Javascript files and combines them into a single file before delivering it into the browser (or server). I had no need for Webpack prior to learning React, since my Javascript usually sat in one big file, but now that I’m working on writing more readable and reusable code, Webpack has become a bigger necessity for making sure my applications continue to run fast. Webpack is also capable of handling css files and various Bootstrap font files.</p><br/><p>React Router is a library that can handle the Routing needs of your React projects. Routing is the process of displaying the correct user interface when the URL of the website is changed. With routing you have hashtag routing (www.google.com/#/example) and clean routing (www.google.com/example). The hashtag method supports older browsers that cannot handle the HTML5 history API, but many prefer the clean method because, well, it looks cleaner!</p><br/><p>Package.json is kind of a big deal. It is a ‘technical readme’ of sorts that you need for each one of your projects. It lists all the dependencies that your project relies on, for both development and production. It can also list handy command line scripts for starting up your project, running tests and linting tools. It is also the place that houses the URL to your GitHub repository, so you can push changes right from the command line.</p><br/><p>These are just a few of them. There are so many tools and libraries in the Javascript world that it can get kind of overwhelming. The good news is that many of them are very similar and if you figure out the fundamentals you can even make your own (not there yet!). I’m making pretty good progress with rebuilding my Calc/Frankulator using React; in-fact the application is already usable, although the code is far from polished, that is what I will be focusing on in the next two weeks.</p>
      <BlogDate className="BlogDate" ><b>December 17, 2016</b></BlogDate>
      <p>This week I have completed my latest project. An online version of the popular memory game ‘Simon’. A link to view and play the game can be found under the ‘projects’ tab. The app is fully operational, however the code itself is a little too verbose and does not follow the Single Responsibility Principle. Thus it is difficult to understand, update and debug. I aim to in the coming weeks to fix up the code in not only the Simon project but in my other projects to make sure that my code is more readable and easier to debug. I have not been fully following the popular ‘Make it work, Make it right, Make it fast’ philosophy. After making my software work I have found myself moving onto a new project, without spending alot of time making the code ‘right’. There is alot to be learned in refactoring your code, and I have been missing out. I plan to tackle one of the backend projects on FreeCodeCamp next, I really want to gain a better understanding of servers, databases and the whole ‘back-end’ infrastructure that can complement my JavaScript.</p><br/><p>I have also begun to learn ReactJS this week. So far I am just getting started, and I have even needed to go back into Javascript and brush up on my knowledge on things like Closures, Recursion and Callback functions before even touching React. The goal is to fully refactor my Calc/Frankulator app using ReactJS. My goal for next week is to just take in as many React tutorials as I can to get a better understanding of the ES5 syntax and the entire ‘process’ of what React does. The week after that is when I plan to begin refactoring the Calc/Frankulator from the ground up. If everything goes smoothly, I plan on getting into Redux, which is apparently a great partner to React.</p><br/><p>I was listening to a Ruby Rogues podcast earlier this week, and the topic was paired programming. One of the founders of ‘Pair Columbus’ happened to be on the show, and I ended up finding their Meetup group and signed up for their next pairing Meetup happening on January 14th. As I mentioned in an earlier blog post, I plan to create a paired programming Meetup here in Cincinnati; so going to the ‘Pair Columbus’ Meetup is an excellent opportunity for me to see how a paired programming Meetup operates and to hopefully meet some of the organizers and ask them for advice on creating my own pairing group. The tentative plan right now is to have the Meetup every other Saturday (the Saturday that the Cincinnati Web Tech Study Group does not meet) and to have it be a 2-3 hour long event. Once I have attended the ‘Pair Columbus’ event, I know I will have a much clearer idea on how my Meetup will go.</p>
      <BlogDate className="BlogDate" ><b>December 9, 2016</b></BlogDate>
      <p>My recovery has slowed down even more. While I’m back up to studying full time, I am experiencing a lot of pain, in some ways the pain has become worse because I am coming off of my pain medication. I think this weekend will be a tough one for me, as I will be completely out of pain medication and I will not ask the doctor for a refill. I don’t want to be on pain-killers forever! What is keeping me happily distracted from that? Programming! This week I have been begun learning node.js via FreeCodeCamp tutorials, asynchronous function calls here I come! I have also been working on making my website responsive, as of today it is fully usable on any size of device, although the margins are still a little wonky. I have spotted a strange bug however, when I view the site on my iPhone the ‘Projects’ text inside the corresponding button, comes into contact with the edge of the button. Strangely enough, this glitch is not present when I use Safari’s Responsive Design Mode on my laptop to view my website on the correct phone screen size. My plan is to fiddle around with the button layout and hopefully put in the fix. The reason I decided to ‘manually’ work on responsiveness instead of using Bootstrap is because I wanted to figure it out for myself, to see how it all comes together ‘under the hood’. With that being said, I will definitely use a framework next time; manually programming web responsiveness can get fairly repetitive.</p><br/><p>I ended up going to the Acodemy info session. The instructor was actually in another city at the time so the website building session ended up being guided over webcam via google Docs. The owner of the co-working space where the bootcamp will be taking place was there in person however, and he was able to act as a liaison of sorts, helping us get our computers set up and communicating with the instructor. I did not end up participating in the website tutorial as I have experience in the basics already, so instead I got a grand tour of the place from the owner! The name of the building is called ‘The Eddy’, and it is one cool place. It is a work-in-progress co-working artist/programmer/welder/beerbrewer community building (mansion?) extraordinaire. I can’t really do the place justice with my words, so just go check it out. They will be opening back up for co-working in January and I am strongly considering getting a membership. The rates are awesome and it is just a cool place to be. I also met a really cool guy at the Meetup who is studying finance but is also looking into learning programming. I’m looking forward to helping him get started. Even though I am new to the field myself, I think it is just an awesome community and I want to bring in as many people as I can into it. As for Acodemy, apparently the owner is going to be in town next Thursday for the next Meetup, so I will be able to meet him in person and ask some questions about the program.</p><br/><p>I also got to participate in the ‘Hour of Code’ this week. Myself and another programmer went to a public library hosting the event. The library had computers set up for the kids and a gamified tutorial for learning the basics of programming. It was a lot of fun helping the kids work through the problems. I will definitely come back in the future to help out again. What I’m really looking forward to however, is the opportunity to mentor high school aged teens in programming. High school seems to be the time when most teens really start to think about what they want to do for a Career, and what they want to study in College if they end up attending. I want to be there at this critical juncture to give them a push in the right direction. This is very personal to me in a way, as when I was attending High School I felt like I had no clue about how College or Career’s worked or the importance of learning new skills. Till next time!</p>
        <BlogDate className="BlogDate"><b>December 5, 2016</b></BlogDate>
        <p>The past two weeks have been very different for me. I had undergone surgery two weeks ago and have since been recovering. I was diagnosed with sleep apnea several years ago and the surgery expanded my airway so the chance of it closing up during my sleep is lessened. When the airway constantly closes up during sleep in a person with sleep apnea, the side affects are reduced sleep quality, reduced time spent in deep sleep and REM sleep. The side effects are tiredness, and mental fog during the day. Thankfully my sleep apnea was only ‘moderate’, but it still affected the quality of my life, that is why I needed to have the procedure. The surgery went well, but the recovery is definitely taking more than I expected! I spent 6 days in the hospital and while I’ve been out for a week recovering at my girlfriend’s, I’m still not 100%. Nevertheless, I managed to write up another project; a local weather app you can find on this website. The application was created on the FreeCodeCamp track. This is the first app I have built that utilizes API’s, and the implementation proved pretty challenging, (being on pain-meds the entire time I was building it, did not help things either!). The ability to access this sort of data from various websites has definitely opened up new app ideas.</p><br/><p>My plan for this week is to get back to full-time studying and working on programming. Because the surgery recovery is taking longer than expected, I will give myself another week or two before I start applying for programming jobs. What kind of job am I looking for? Since I am a beginner, and I am growing rapidly, I am looking for a place that can accommodate that growth. An environment where I have the chance to take on additional responsibilities as my skills increase. I am also looking forward to starting up my paired-programming Meetup group sometime in January to help myself and others get better at programming as a team and fostering a supporting environment of other aspiring programmers. Another thing I will do, is attend a Toastmasters meeting, and see if the group is for me. I have heard of the Toastmasters almost two years but have not gone around to attending a meeting. The time is now. I get very nervous when speaking in front of a group of people for a length of time; I turn bright red, start sweating profusely and even stutter! I think this fear of public speaking goes way back to the those middle school book reports in front of the entire class… This fear is something I need to conquer and the ability to speak in front of a large group is a skill I want to master.</p><br/><p>Looks like there is a new bootcamp in town, Acodemy. They are new, like brand new. I think the January cohort will be their first ever class. They also started a Meetup group and are having an informational session/website build this coming Thursday. I will be attending. The bootcamp cost they are advertising is considerably lower than that of the Iron Yard or Cincy Code It. $4990. They are also claiming a job within 6 months of graduation or your money back. Sounds too good to be true? Yes and no. Looking through their website, it looks like there is no onsite teacher. All the lectures are presented via live video stream, by an expert you can interact with, and a mentor is available via live stream as well to guide you through the coding challenges. Sounds pretty interesting, it is in a way a hybrid boot camp, you communicate with the instructor on the screen, and the other campers in person. I’m pretty excited to attend the info session and find out more about their program.</p>
          <BlogDate className="BlogDate"><b>November 18, 2016</b></BlogDate>
          <p>Looks like IMDB has not gotten back to me yet regarding my request to crawl their movie quotes file and make a game app out of it. No matter! In the meantime I have created two more web applications which you can find under my ‘projects’ tab on this website. While the tribute page was relatively straight forward to build, the quote machine proved to be a little tricky.  One of the functionalities of the quote machine is the ability to publish the quote onto Twitter. Tweets, however; have a 140 character limit, so I had to remove some of the longer quotes as I wanted end-to-end functionality for every single quote. The biggest issue, however, proved to be aligning the ‘next quote’ button with the ‘tweet’ icon. The ‘tweet’ icon from font-awesome ended up having really strange behavior and sat a couple of pixels higher in my div. Attempts to align the ‘tweet’ icon caused me to realize that the icon was somehow disconnected to its background element (which was a small rectangular box). I eventually decided that it was not a huge issue and aligned the two buttons vertically, which I think looks kind of cool anyway. This vertical alignment and close proximity of the buttons also gives me a stronger urge to click the ‘tweet’ icon while cycling through the quotes. Take note, social media web developers.</p><br/><p>I ended up doing some of my first ever paired programming this week. Myself and another aspiring programmer from Slack have got together three times so far and have taken on a variety of coding challenges on Coderbyte. The experience has been pretty awesome and is definitely teaching me quite a few things. First: the combination of voice, pen(marker), and paper(whiteboard) as a tool for explaining ideas, is simply unmatched. The ability to draw diagrams, flow charts and arrows to explain complex ideas is not only powerful but almost mandatory to make sure that everyone is on the same page. Second: The ability to explain your thinking is an important skill. The importance of this skill is probably more than I can even realize at this point in time. As ideas become more complex, the skill necessary to explain these ideas becomes higher and higher. Third: Your brain gets tired faster when pair programming as opposed to programming alone. This makes sense, as you are subjected to additional stimuli when programming as a team, thus you learn faster, but as a result, you get worn out faster too. The thing to gather from all this: go out and find yourself a pair programming buddy and get to it! Post a message on Slack, or ask people you see at Meetups to pair program with you.</p><br/><p>I am currently on the FreeCodeCamp track. Nobody is paying me to say this, but FreeCodeCamp is an awesome website, that has really great tutorials, algorithm challenges and projects you can do. Every project I have done so far (except the Frankulator spinoff) has been from their Front End Developer track. I have six more projects and 30 more algorithm challenges to complete before I can earn my Front End Development Certificate. I might end up tackling some of the Back End projects before I’m done with the Front End track, as completing Front End is not a prerequisite to starting on those projects. My goal is to start applying for jobs once I have a couple more projects under my belt, and I’m still not sure whether I want to attend a local coding bootcamp or not, (the next ones start in mid-January). All I know is that I want to keep coding!</p>
            <BlogDate className="BlogDate"><b>November 14, 2016</b></BlogDate>
            <p>Welcome to my second blog post! I would like to update you all on what I have done so far. I have come up with an idea for my end-to-end application. I want to create a movie quote game. The game at its core is relatively simple, the user is shown a quote from a movie and they have to guess what movie the quote is from. Time and score will be kept track of, as well as different levels of difficulty; expert (multiple-choice), master (hang-man style guessing) and wizard (write-in the answer). Why is this game going to be so difficult? Because I want to use a 200 megabyte file of quotes from the IMDB website. I want to make a crawler that randomly chooses a quote from one of the tens of thousands of quotes in the file to display to the user. This game is designed for huge movie buffs in mind, as the sheer number of movies and quotes that the crawler could choose from would quickly frustrate the average movie-goer. The one hiccup in my project is getting permission from IMDB to crawl their file and make an app out of it that others can use. So far I have emailed IMDB with my request in the hopes that they let me create this project. If that ends up falling through, no fear, I will come up with a different idea!</p><br/><p>One of my other ideas is to split up my Frankulator/Calculator project into two distinct beings. On the one hand, the Calculator can stand on its own as a regular, user friendly calculator, while the Frankulator is transformed into an application that outputs ‘fun’ stats on a given number. The user would type in or key in a number into the Frankulator and click the ‘Frankulate’ button. The application would then output a list of stats on the number, such as; is the number prime, how many divisors does it have, is it a Chen prime, etc. There would also be links to Wikipedia articles, informing the user of just what a Chen prime is. I think it would be quite fun and educational. I would also like to start incorporating accessibility into my projects, I want someone who does not use a mouse, to be able to navigate my Calculator with arrow keys, not by just tabbing through. I want to add a sound mode, where the keys of the calculator access the speaker of the computer and a voice (Siri?) can tell the user what keys they are hitting if they wish to do so. I think adding this stuff would be pretty cool and helpful.</p><br/><p>I want to take the time to give some advice to others who are teaching themselves how to code. Use a multidisciplinary approach to teaching yourself programming. Podcasts, videos, meetups, tutorials, books, presentations, and many other tools and communities can help you on your way to becoming a software developer. However the best way to learn, is by doing, so you should strive to build your own programs as quickly as possible, no matter how simple or buggy these programs are, this will be a huge motivator for you in ways that other mediums of learning cannot reach.</p><br/><p>I also have a secret productivity tip, that so far I have not heard anyone mention. When you get to the point very late in the day, when your brain is fuzzy and you find yourself spacing out, but you still want to squeeze in an extra 30-45 minutes of studying before you go to bed, do this: go to a popular github repository in the coding language that you are learning, and just starting typing out the code in one of the files. Even if you don’t know what the code means, just start typing it out in a separate text document. The first time I tried this, I noticed how weak my muscle-memory knowledge of where the special characters were located on the keyboard was. I was so much more used to typing out essays rather than blocks of code that I found myself typing at a snail’s pace while looking down at my fingers every time I needed a bracket or a semi-colon. I feel this technique is akin to listening to a foreign-language book on tape, even though you do not know any of the words, you are still learning, and in effect, the language of computers is a foreign language to many of us. That’s all for today, see you next time!</p>
              <BlogDate className="BlogDate"><b>November 11, 2016</b></BlogDate>
              <p>Hello website visitors! Let this be my first blog post. Ever. I’ve decided to create this blog to document my programming journey. I began teaching myself programming on September 20, 2016. So I’m almost two months in at this point and I am having a great time. My only past experience with programming was an intro course back in 2014 when I was attending community college. I had a lot of other things on my mind at the time and as a result, the course made no impression on me whatsoever. Then I moved to Cincinnati on September 7th and I found myself with a strong sense of motivation, I was no longer living with my parents and working in another entry level job was not going to cut it. I wanted a career. I wanted to be intellectually challenged at work and have the opportunity to grow without limits. As I started researching careers I stumbled onto programming, and as I learned more and more about the field, I realized that this is what I was looking for all along. Freely shared knowledge. The ability to work and contribute from anywhere and anytime. An outlet for almost limitless creative expression. A field that eagerly embraces newcomers. A community that wants to better the world. …Oh, and the pay isn’t bad either!</p><br/><p>For the first 4 weeks I studied part time as I was still working, but I decided to quit my part time job on October 24th and focus 100% on studying. It was a strategic decision, I was working at a warehouse and the only thing I was earning there was money. I was not learning, I was not growing, I was only getting a paycheck. So the past 3 weeks of studying full time have been excellent. I have managed to put in 54 and 55 hours during the first two ‘full-time’ weeks respectively and this week, I am on track for 60! I never could have imagined myself devoting so much time to one thing and enjoying it so much. With some encouragement I have created my first project, the calculator/frankulator you can find on this website. I had so much fun creating it, that I knew this was the way to learn. Learn by doing, learn by building. And now I have created this website from scratch, a place to document my progress, my blog and my projects. My goal for learning is to continue doing things that I think I cannot do. I did not think I was capable of building the calculator, but I did it. Now my next project will be even more ambitious, I will create a complete end-to-end application and launch it. I want to cover all my bases; the planning, the design, security, accessibility, server stuff, support. I want to cover the things that I do not even know will need to be covered. If I need to learn new technologies in creating this, I will learn them. New tools, I will use them. I’m starting today after I finish writing up this blog and committing this website. I will update and post my progress on this blog and on github.</p><br/><p>Oh yeah, If you are in Cincinnati - I will be launching a paired programming meetup in December. There are tons of tech meetups in Cincinnati and they are great, but they are mostly focused on tech presentations and on networking. I want to create a meetup where people are empowered to work side by side on a problem and gain the critical skill of teamwork that is so important for modern programming. Feel free to reach out if you have any questions, I am happy to respond and help guide beginners who are also starting their coding journey. Till next time!</p>
    </BlogDiv>
  );
};

export default Blog;
