
## MDDN 242 Project 3: CRT TV x Predator Filter

### README

#### The Idea
Halloween season is around the corner. So it's time to get spooky. I have put together some classic horror filter effects and tried to incorperate them into this project. There are two I was able to implement well. First was the CRT static effect from the 1998 horror movie, "Ringu". Second was the heat vision effect used in the 1987 hit horror francise, "Predator". With images I took myself, I transformed them into an interesting visual output.

#### Conceptual Ideas
It's been a while, but as we end the year, I feel like my creativity and ideas are burning out. I found it quite difficult to come up with ideas I enjoy and want to do. I had a lot of photos of hydrant doors on my phone gallery. Originally, I was going to use these photos to create a fire like effect. However, the more I thought about it, the more bored I got. Come by October, spooky season is here. Along with various code examples from class, I was able to create an Heatmap Effect. This inspired me to make a Predator themed series.

#### Experimentations
After creating the Heatmap, I felt like it was lacking. So I began experimenting how I could ruin the whole image. Ruin. Destroy. Break. That's when I found out I could use random(). A whole new possiblity opened. With this, I was able to experiment with noise. Originally I wanted to implement Worley Noise. I understand how it works, I just don't know how to implement it into JavaScript. Another problem I had with Worley Noise is, I wanted parts of it to be transparent. Problem is, with the way the code was set up, I am unable to make transparent layers. So back to square one.

Looking from the distance, the noise I created for the background reminded me of a CRT TV; kind of fitting for a horror inspired look. Because of this, I spent the next few hours experiementing with line() and for() loops to try create the CRT scan lines. Meanwhile, I played around with sin, cosine, and tangent formulars. Creating a sin wave on the Y axis where the length stretched from one end of the page to the other worked.  I was able to overlay a colour on top of the background image to create the CRT scan line effect.

The final touch was displacing some rows a little left or a little right. This was to try and imitate the odd (mis)alignment CRT TV has in various depictions of movies and shows.

#### Reflection
One thing I enjoyed about this project was the noodling around. In a way, it felt like a waste of time. But time I wanted to waste. Surprisingly, the more I noodled, the more I started to understand how the code was laid out. I could better spot how one line linked with another; how I could affect one thing by doing another; what works and what doesn't. I may not be able to fully create the whole thing by myself, but by implementing and alterating little elements from a variety of resources, I was able to create my own design. It's like throwing different ingredients into a pot. Some things work together, some don't. But how we implement it can change the outcome. I don't know, my analogies have always been horrible.

Point is, I had fun experimenting with what I can and what I cannot do with JavaScript. This goes for all the projects I have done in MDDN242 Creative Coding.

#### Attribution
The inspiration I used was talked about extensively. Predator(1987) and Ringu(1998). Everyone has watched Predator. However not a lot of people know about Ringu. The original Japanese version of The Ring(2002).

#### Random Tangent
If you would like to watch Ringu (because of the halloween festive season), you can watch it on YouTube.
https://www.youtube.com/watch?v=CQ1jkNj4cZc
That's it from me. Bye.