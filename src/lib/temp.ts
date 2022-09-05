export const subreddit = 'https://reddit.com/banfeedrouge/.json'

export const post_data = fetch(subreddit)

export async function subreddit_data(temp:string): Promise<string>{
	
	const post_data = await fetch(subreddit)
	const return_url = URL.createObjectURL(await post_data.blob())


	return return_url



}