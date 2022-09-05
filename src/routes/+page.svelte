
<script lang="ts">

	import fs from "node:fs"
	import Player from "../lib/Player.svelte"
	export let data
//	let that = 'https://v.redd.it/d9j8byds99k91/DASHPlaylist.mpd?a=1664253234%2CYjk0NTc2OTdiNmRiMTg2MTBmYzNjOThkYWUxNTg2NmVhZWI1NTQyOGM5ZTY0MGZmNGZiNDA0YzUzNDM2NjAyNw%3D%3D&v=1&f=sd'



	// async function temp() {
	// 	// let noob = await fetch('https://v.redd.it/d9j8byds99k91/DASH_240.mp4')
	// 	// let otherTemp = await fetch('https://v.redd.it/d9j8byds99k91/DASH_audio.mp4')
	// 	// let dat = await noob.blob()
	// 	//return URL.createObjectURL(dat)
	// 	let yeah = document.getElementById('wtf')
	// 	const mysource = new MediaSource()
	// 	const url = URL.createObjectURL(mysource)
	// 	let otherTemp = await fetch('https://v.redd.it/d9j8byds99k91/DASH_240.mp4')
	// 	let res = await otherTemp.arrayBuffer()

	// 	let noob = await fetch('https://v.redd.it/d9j8byds99k91/DASH_audio.mp4')
	// 	let noob_res = await noob.arrayBuffer()
	// 	mysource.addEventListener('sourceopen', function cool() {
	// 		console.log(this.readyState)
	// 		const mimeCodec = 'video/mp4; codecs="avc1.4D401E"';
	// 		const audiomime = 'video/mp4; codecs="mp4a.40.2"'
	// 		const videoSourceBuffer = mysource.addSourceBuffer(
	// 			mimeCodec
	// 		)
	// 		const audioSourceBuffer = mysource.addSourceBuffer(
	// 			audiomime
	// 		);

	// 		audioSourceBuffer.appendBuffer(noob_res)
	// 		videoSourceBuffer.appendBuffer(res)
	// 	})
		// if (yeah instanceof HTMLMediaElement) {
		// 	yeah.src=url
		// }
		//TODO:
		// videotag.src = url

		// const audioSourceBuffer = mysource.addSourceBuffer(
		// 	'audio/mp4; codecs="mp4.40.2"'
		// );


		// // audioSourceBuffer.appendBuffer(res)
		// 	res => res.arrayBuffer()
		// ).then(
		// 	audioData => audioSourceBuffer.appendBuffer(audioData)
		// )


		// 	res => res.arrayBuffer()
		// ).then(
		// 	videoData => videoSourceBuffer.appendBuffer(videoData)
		// )

		// return url
		//.then(res => res.blob()).then(
		// 	data => {
		// 		return URL.createObjectURL(data)
		// 	}
		// )
	// }
	

	// let data="this is some data"
	// fs.writeFileSync("something.txt", data)
</script>





<svelte:head>
	<script src="http://cdn.dashjs.org/latest/dash.all.min.js"></script>
</svelte:head>

<h1>Welcome to your library project</h1>
<p>
  Create your package using @sveltejs/package and preview/showcase your work
  with SvelteKit
</p>

{#each data.videos as video} 
	<Player mpd_link={video.dash_link} post_url={video.url} player_id={video.id}/>
{/each}
