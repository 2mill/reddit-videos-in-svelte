let subreddit = "https://www.reddit.com/r/IdiotsInCars/"


async function getDashFiles(subreddit: string) {
	const sub_data = await fetch(`${subreddit}/.json`);
	const json_data = await sub_data.json()
	let videos = []
	for (let child of json_data.data.children) {
		if (child.data.media)
		if (child.data.is_reddit_media_domain && !child.data.media.is_gif) {
			videos.push(
				{
					dash_link: child.data.media.reddit_video.dash_url,
					url: child.data.url,
					id: child.data.id
				}
			)
		}
			// videos.push(child.data.media.reddit_video.dash_url)
		// videos.push(child.data.media)
	}
	return videos
	// if (json_data.data.children) {
	// 	for (let child of json_data.data.children) {
	// 		if (child.media && child.media.is_video) {
	// 			videos.push(child.media.dash_url)
	// 		}
			
	// 	}
	// }
	// return videos
}


export async function load() {
	const videos = getDashFiles(subreddit)

	return {
		sub: subreddit,
		videos: videos
	}

}