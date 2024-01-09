This tool was created to visualize this workings of some common sorting algorithms. 
Hosted at: https://sort-visualizer.pages.dev/

It is built with React, which poses some unique challenges related to React's rendering dependencies. 
In order to increase performance of any React App, it is beneficial to reduce unnecessary re-renders due to state change. 
In a project with specifications like this, namely a large number of array iterations that may correspond to a higher order 
state change, there are potential bottlenecks in which one might induce unnecessary re-renders.

Animating the sorting processes was the most difficult aspect of this project, as I wanted to animate elements
differently depending on the stage of the sort. One color to indicate the values being compared (then a subsequent 
reversion to their original color after the comparison), a change in size to indicate swap, and a second color to 
indicate an element being inserted into its final sorted position. The final animation proved the most difficult, 
as it requires catching elements at a very specific point in the algorithm.
