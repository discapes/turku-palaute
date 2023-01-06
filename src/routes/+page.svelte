<script>
	export let data;
	$: ({ title, link, description, managingEditor, item: items } = data);

	function toTZ(date, timezone) {
		return new Date(
			(typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timezone })
		);
	}

	function formatDate(date) {
		return (
			date.getDate() +
			'.' +
			(date.getMonth() + 1) +
			' klo ' +
			date.getHours() +
			':' +
			date.getMinutes()
		);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>{title}</h1>
	<p class="subtitle">{description}</p>
	{#each items as item}
		<div class="item">
			<h2>{item.title}</h2>
			<p>{item.description.replaceAll('&#xD;', '\n').replaceAll('\n\n', '\n')}</p>
			<p>
				Julkaistu {formatDate(toTZ(item.pubDate, 'Europe/Helsinki'))}
				<a target="_blank" href={item.link}>🔗</a>
			</p>
			<p />
		</div>
	{/each}
</section>

<style>
	section {
		margin: auto;
		display: inline-block;
	}
	.subtitle {
		font-size: 1.2em;
		margin-bottom: 50px;
	}
	h1 {
		font-size: 2em;
		font-weight: 800;
		text-align: left;
		margin-bottom: 0;
	}
	h2 {
		font: 1.5em serif;
	}
	div.item {
		margin-top: 30px;
		border-radius: 20px;
		background: #ededed;
		padding: 10px 20px;
		max-width: 700px;
	}
	div {
		line-height: 1.8;
		font: 1em sans-serif;
		white-space: pre-line;
	}
	:global(body) {
		background-color: #d0d0d0;
		font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 25px;
	}
	a {
		color: black;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
