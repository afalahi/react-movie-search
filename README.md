# React Algolia Movie Search

This app is based on CRA, it connects to Algolia for searching, sorting, and filtering. I've started with Algolia React hooks, but then went to react-dom since I found more references online. After I finished working on the project, and became more familiar with the react SDK, I noticed that the react hooks offer more customization via hooks as opposed to using connectors. If I were to write this again, I'd use the react hooks library.

I've customized the Hits using connectHits. I created a custom card component to render the list data. I thought about using connectSearchBox and other connectors, but that would've been an endless rabbit hole for me since I'll spend time customizing the look and feel more than utilizing the functionality.

I've used the Movie data set, and created three Virtual Replicas for sorting, the data set has many of the images broken, so it does make the sight a bit "ugly". Using Facets, I've included a refinement list to the side of the movies to help users with filtering the search results.

The  app is minimal, I didn't include a "click here for more" button on each hit since I couldn't find a description for a single movie in the dataset, so for now it's just a search page that returns the results, and displays a toast notification of the search stat, how long did it take.

I've mostly relied on bootstrap for styling, but it doesn't include some basic CSS to make things prettier.
