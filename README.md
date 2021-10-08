# Whitelist_API

This project is only experimental, use carefully. Im not responsible for any fatal errors for any project.
Always use on testnet before using on mainnet
This project works offchain and does not validate whitelisted users using on chain data !
This repo is intended to be used with Candy Machine Mint site, or with my repo Candy_Machine_Whitelist_Site


How to run:
Clone the repo (obviously)

1) Install dependencies
yarn install

2) add your own API key to restrict others from using your API
located in .env file

3) create a csv containing the list of whitelisted users and reserves for each user

REQUIREMENTS FOR CSV FILE:
    1) Must be comma delimted
    2) Must have two Columns: 1)member 2)reserve
    3) Must be named whitelisted.csv
    4) Must be in the main directory, do not put in a seperate file called assets or similar.

4) Edit the config.json to your needs
To reload the csv list everytime the script runs
set load_csv_onetime = true

If you wish to run the script once and not have it run everytime
set load_csv_one time = false
and loaded = false



5) Upload to a hosting server, I used heroku. if you decide to use heroku here are the steps to setting that up:
if you prefer tutorials, this one is good and features two options: https://www.youtube.com/watch?v=Rz886HkV1j4&t=733s
IMPORTANT: MAKE SURE TO FOLLOW THE STEPS FOR ADDING .ENV TO THE HOSTING SYSTEM (included in the video)
ALL COMMANDS SHOULD BE RAN IN THE MAIN DIRECTORY 
    1) Install the heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
    2) run: "heroku login" , and then login into your account.
    3) run "git init"
    4) run "heroku git:remote -a Name_Of_Your_Project"
    5) run "git add ."
    6) run "git commit -m "first-commit"
    7) run "git push heroku master" heroku will then supply you with two urls, one of which is the url of the API, the other is not important (the one with github in it)
    8) after that is done run "heroku config:set API_KEY=Your_API_Key"
    Your_API_Key stands for the key you put in the env file in step 2

Congratulations 🍰, you have now deployed your API online.
Next integrate this with my repo @ Candy_Machine_Whitelist_Site



If you need anything you can contact me on discord in my server:
https://discord.gg/KTVYs7QAfP

