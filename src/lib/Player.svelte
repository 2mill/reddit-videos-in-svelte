<script lang="ts">
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { subreddit_data } from "./temp.js"
	// let temp = subreddit_data("https://reddit.com/r/banfeedrouge/.json")
	//TODO: Link snowflake parser
	// import { library } from "$app/path"
	// import dashjs from "dashjs"
	// import dashjs from "dashjs"
	export let post_url = "njuwhubk3ik91"
	export let mpd_link = 'https://v.redd.it/njuwhubk3ik91/DASHPlaylist.mpd'
	export let player_id = 'swordfish'
	onMount(async () => {
		// library.init()
		let dashjs = browser ? await import('dashjs') : undefined;


		if (dashjs != undefined) {
			let file = await fetch(mpd_link)
			// let url = URL.createObjectURL(await file.blob())
			let temp = await file.text()

			let xml_injection = [
				//TODO
				`${post_url}/DASH_220.mp4`,
				`${post_url}/DASH_240.mp4`,
				`${post_url}/DASH_360.mp4`,
				`${post_url}/DASH_480.mp4`,
				`${post_url}/DASH_720.mp4`,
			].reverse()
			if (temp.match(/>DASH_audio.mp4</)) xml_injection.push(`${post_url}/DASH_audio.mp4`)
			while (xml_injection.length > 0) {
				// console.log('in loop')
				let yep = `<BaseURL>${xml_injection.pop()}</BaseURL>`
				if (yep != undefined)
					temp = temp.replace(/<BaseURL>DASH.+<\/BaseURL>/, yep)
			}
			// console.log(temp)
			let url = URL.createObjectURL(new Blob([temp]))

			var player = dashjs.MediaPlayer().create();
			let selector = document.querySelector(`#${player_id}`)
			if (selector instanceof HTMLElement) {
				player.initialize(selector, url, true);
			}
		}
	})

</script>

<!-- <svelte:head>
	<script src="http://cdn.dashjs.org/latest/dash.all.min.js"></script>
</svelte:head> -->
<video id='{player_id}' controls></video>

