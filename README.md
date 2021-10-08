# Whitelist_API

This project is only experimental, use carefully. Im not responsible for any fatal errors for any project.
Always use on testnet before using on mainnet
This project works offchain and does not validate whitelisted users using on chain data !
This repo is intended to be used with Candy Machine Mint site, or with my repo Candy_Machine_Whitelist_Site


How to run:
1) Install dependencies
yarn install

2) add your own API key to restrict others from using your API
located in .env file

3) create a csv containing the list of whitelisted users and reserves for each user

REQUIREMENTS FOR CSV FILE:
-) Must be comma delimted
-) Must have two Columns: 1)member 2)reserve
-) Must be named whitelisted.csv
-) Must be in the main directory, do not put in a seperate file called assets or similar.

4) Edit the config.json to your needs
To reload the csv list everytime the script runs
set load_csv_onetime = true

If you wish to run the script once and not have it run everytime
set load_csv_one time = false
and loaded = false


If you need anything you can contact me on discord in my server:
https://discord.gg/KTVYs7QAfP

