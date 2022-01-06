# Farzan-Frontend-Intern-Challenge-Shopify

# Spacestagram 

Spacestagram - Farzan Bhuiyan's Frontend Developer Intern Challenge Submission:
Shopify is extending their mission to Make Commerce Better for Everyone to include the whole entire universe. As part of their mission, I built an app to help share photos from one of NASA’s image APIs (APOD).

## Overview
View 7 randomly selected photos straight from space at a time, provided by one of NASA's image APIs (APOD). Each image posted comes with the retrieved date, a description of the photo/explanation, and a like/unlike button. You will always have an abundant amount of photos to look through as you can always refresh to get 7 new space photos each time. 

Technologies: React, HTML/CSS, Axios, Node.js(npm/yarn)

## How to Run the App Locally

1. Generate a free API key from https://api.nasa.gov (just enter First and Last name and email).
2. Go to the src folder and in the src folder go into the file Feed.js with an editor of your choice. 
3. In Feed.js on line 14 you should see the API URL https://api.nasa.gov/planetary/apod?api_key=Mo2dp6WkMMJqvJcXYDXtdUbhdeiPzBDRZ32Pr5nV
4. Replace everything after api_key= in the URL above with the API key that you generated in step 1. 
5. Make sure you have npm or yarn installed.
6. Install Axios by running: yarn add axios
7. Install the date-fns library by running: yarn add date-fns
8. Run: npm start

Open http://localhost:3000 to view it in the browser.

## Live Deployment

Live Deployment can be seen here https://frosty-heyrovsky-e784d5.netlify.app

