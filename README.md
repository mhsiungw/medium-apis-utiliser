This is a command-line tool designed to streamline the process of managing your stories on Medium. With just a few simple commands, you can easily list and unlist your Medium stories, helping you to organize and control your content effortlessly.

## Usage 

1. Clone this repository to your local machine
	```bash
	git clone https://github.com/mhsiungw/medium-apis-utiliser.git
	```

2. Navigate to the directory
3. Create `.env` file with `COOKIE` and `X_XSRF_TOKEN` set.
you can find your Cookie and X-Xsrf-Token in your request headers on Medium.
	```
	COOKIE=YOUR_COOKIE
	X_XSRF_TOKEN=YOUR_TOKEN
	```
4. Copy and paste the urls you want to list or unlist in `urls.json`
5. Run command
	```bash
	node index.js list
	node index.js unlist
	```

## Contributing
Contributions are welcome! If you'd like to contribute to this repo, please fork the repository, make your changes, and submit a pull request.
