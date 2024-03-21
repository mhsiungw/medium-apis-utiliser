
const getReqOptions = visibility => ({
	method: 'PUT',
	headers: {
		Cookie: process.env.COOKIE,
		'X-Xsrf-Token': process.env.X_XSRF_TOKEN,
		"Content-Type": "application/json",
		"Host": "medium.com",
	},
	body: JSON.stringify({
		visibility,
		lockedPostSource: 6,
		hightowerData: { isEligibleForRevenue: false },
	}),
})

const getStoryId = (url) => /-.+-(?<storyId>.+)/.exec(url).groups.storyId

const formatReqURL = (url) =>
	`https://medium.com/_/api/posts/${getStoryId(url)}/audience`

module.exports = { getReqOptions, formatReqURL }