# twitchy-son

A brilliant web application that uses the Twitch API to create a stream client

### How to set everything up (assuming that you have Node installed - Yarn is optional)

- Open your terminal `:)`
- Clone the repository
  - `git clone https://github.com/caffeinealgorithm/twitchy-son.git`
- Enter to the repository directory
  - `cd twitchy-son`
- Install all the dependencies
  - `yarn install` or `npm install`
- Get your Twitch API Client ID
  - [https://glass.twitch.tv/console/apps](https://glass.twitch.tv/console/apps)
- Set your Client ID in the `.env` file
  - `REACT_APP_CLIENT_ID=""`
- To start everything up
  - `yarn start` or `npm run start`
- Open your browser and feel free to watch an _amazingly_ stream
  - [http://localhost:3000/](http://localhost:3000/)

### Random thoughts

- Not including external requests in unit testing (ex. Not making an actual request ~ but checking if the status code is different from `200`);
- Can't miss the importance of an CI workflow.

### Reminder

- Be careful, don't waste your time watching too many streams (go outside).
