import Head from 'next/head';

function layout(props) {
	return;
	<>
		<Head>
			<title>{props.name}</title>
		</Head>

		<main>{props.children}</main>
	</>;
}

export default layout;
